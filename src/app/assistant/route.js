import { NextResponse } from 'next/server';
import {
  PROFILE,
  TRUST_STATS,
  EXPERIENCE,
  RESEARCH,
  PROJECTS,
  SKILLS_ROW_1,
  SKILLS_ROW_2,
  CAPABILITIES,
  TIMELINE,
} from '@/data/content';

// Run on the Node.js serverless runtime (Netlify's Next.js runtime turns this
// into a serverless function automatically — no extra config needed).
export const runtime = 'nodejs';

// GROQ_API_KEY must be set as an environment variable in Netlify
// (Site settings -> Environment variables). It is never hardcoded here.
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

// Builds a plain-text dump of everything on the site about Chakshu, straight
// from the same data file the UI renders from — so the assistant always
// has the full, current context and nothing needs to be duplicated by hand.
function buildProfileContext() {
  const lines = [];

  lines.push(`Name: ${PROFILE.name}`);
  lines.push(`Role: ${PROFILE.role}`);
  lines.push(`Tagline: ${PROFILE.tagline}`);
  lines.push(`About: ${PROFILE.subtag}`);
  lines.push(`Location: ${PROFILE.location}`);
  lines.push(`Email: ${PROFILE.email} (alt: ${PROFILE.emailAlt})`);
  lines.push(`Phone: ${PROFILE.phone}`);
  lines.push(`GitHub: ${PROFILE.github} (${PROFILE.githubHandle})`);
  lines.push(`LinkedIn: ${PROFILE.linkedin}`);
  lines.push(`Resume: ${PROFILE.resume}`);

  lines.push('\nKey stats:');
  TRUST_STATS.forEach((s) => lines.push(`- ${s.value} ${s.label}`));

  lines.push('\nExperience:');
  lines.push(`${EXPERIENCE.role} at ${EXPERIENCE.company} (${EXPERIENCE.period})`);
  EXPERIENCE.points.forEach((p) => lines.push(`- ${p}`));

  lines.push('\nResearch:');
  lines.push(
    `${RESEARCH.title} — ${RESEARCH.supervisor} (${RESEARCH.period}, status: ${RESEARCH.status})`
  );
  RESEARCH.points.forEach((p) => lines.push(`- ${p}`));

  lines.push('\nProjects:');
  PROJECTS.forEach((p) => {
    lines.push(
      `- ${p.name} [${p.tag}, ${p.period}]: ${p.description} Stack: ${p.stack.join(', ')}.${
        p.demo ? ` Live demo: ${p.demo}` : ' No public demo link.'
      }`
    );
  });

  lines.push('\nSkills:');
  lines.push([...SKILLS_ROW_1, ...SKILLS_ROW_2].join(', '));

  lines.push('\nWhat makes Chakshu different:');
  CAPABILITIES.forEach((c) => lines.push(`- ${c.title}: ${c.body}`));

  lines.push('\nTimeline:');
  TIMELINE.forEach((t) => lines.push(`- ${t.year}: ${t.label} (${t.sub})`));

  return lines.join('\n');
}

function buildSystemPrompt() {
  return `You are "Chakshu's Personal AI" — a chat assistant embedded on Chakshu Gupta's personal portfolio website. You are NOT a general-purpose assistant.

IDENTITY & SCOPE:
- You only answer questions about Chakshu: his background, education, skills, experience, research, projects, and how to contact/hire him.
- Always speak about Chakshu in the third person (he/his), like a knowledgeable assistant representing him — never pretend to literally be Chakshu.
- If the user greets you or asks who you are, introduce yourself briefly as Chakshu's personal AI.

OUT-OF-SCOPE QUESTIONS:
If the user asks anything not about Chakshu (general knowledge, coding help unrelated to his projects, other people, current events, opinions on unrelated topics, etc.), do NOT answer it. Instead, politely decline in a style like this (you can vary the exact wording, but always keep this meaning):
"I'm Chakshu's personal AI — I can only answer questions about Chakshu. For anything else, you can ask other AI assistants."

ACCURACY:
- Only state facts that are present in the CONTEXT below. Never invent numbers, dates, employers, or claims about Chakshu.
- If something isn't covered in the context, say you don't have that detail and suggest reaching out to Chakshu directly at ${PROFILE.email}.

STYLE:
- Warm, sharp, and concise — a few sentences by default. Expand only if the user explicitly asks for more detail.
- You may point people toward relevant sections of the site (e.g. Projects, Experience, Research, Contact) when useful.

==== FULL CONTEXT ABOUT CHAKSHU (this is your entire source of truth) ====
${buildProfileContext()}
==== END CONTEXT ====`;
}

export async function POST(req) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'GROQ_API_KEY is not configured. Add it as an environment variable in Netlify to enable the assistant.',
        },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const incoming = Array.isArray(body?.messages) ? body.messages : [];

    if (incoming.length === 0) {
      return NextResponse.json({ error: 'No messages provided.' }, { status: 400 });
    }

    // Keep the payload small: last few turns only, and cap message length.
    const trimmedHistory = incoming.slice(-12).map((m) => ({
      role: m?.role === 'assistant' ? 'assistant' : 'user',
      content: String(m?.content || '').slice(0, 2000),
    }));

    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: 'system', content: buildSystemPrompt() }, ...trimmedHistory],
        temperature: 0.6,
        max_tokens: 500,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text().catch(() => '');
      console.error('Groq API error:', groqRes.status, errText);
      return NextResponse.json(
        { error: 'The assistant is temporarily unavailable. Please try again shortly.' },
        { status: 502 }
      );
    }

    const data = await groqRes.json();
    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "I'm not sure how to answer that right now — please try again in a moment.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Assistant route error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
