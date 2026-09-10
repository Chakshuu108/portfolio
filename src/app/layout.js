import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Chakshu Gupta',
  description:
    'Chakshu Gupta — AI/ML Engineer & Researcher. Machine learning, computer vision, and generative AI, from research to production.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink antialiased">
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid bg-grid-pulse" />
          <div className="absolute top-[-8%] left-[8%] w-[520px] h-[520px] bg-coral/[0.09] blur-[170px] rounded-full blob-float-1" />
          <div className="absolute top-[28%] right-[2%] w-[620px] h-[620px] bg-violet/[0.14] blur-[190px] rounded-full blob-float-2" />
          <div className="absolute top-[62%] left-[22%] w-[560px] h-[560px] bg-coral2/[0.08] blur-[180px] rounded-full blob-float-3" />
          <div className="absolute bottom-[-10%] right-[15%] w-[540px] h-[540px] bg-violet/[0.12] blur-[180px] rounded-full blob-float-4" />
          <div className="absolute top-[45%] left-[50%] w-[460px] h-[460px] bg-mint/[0.10] blur-[170px] rounded-full blob-float-5" />
        </div>
        {children}
      </body>
    </html>
  );
}
