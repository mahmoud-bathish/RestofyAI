import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEEE0] via-white to-[#FDCEA2] dark:from-[#333333] dark:via-[#333333] dark:to-[#333333]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF6C1F]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FDCEA2]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-[#FF6C1F]/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header */}
        <header className="absolute top-8 left-8 right-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/restofyai-logo.png"
              alt="RestofyAI Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold gradient-text">RestofyAI</span>
          </div>
        </header>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Large Hero Logo */}
          <div className="mb-12">
            <Image
              src="/restofyai-logo.png"
              alt="RestofyAI Logo"
              width={200}
              height={200}
              className="mx-auto mb-8 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="gradient-text">قريباً</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#333333] dark:text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            نعمل بجد لنقدم لكم RestofyAI. ترقبوا شيئًا رائعًا!
          </p>

          {/* English subtitle */}
          <p className="text-lg md:text-xl text-[#333333]/80 dark:text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            We're working hard to bring you RestofyAI. Get ready for something amazing!
          </p>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-sm text-[#333333]/70 dark:text-white/70">
          <div>
            © 2025 RestofyAI. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-[#FF6C1F] dark:hover:text-[#FDCEA2] transition-colors">
              سياسة الخصوصية | Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
