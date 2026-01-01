import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-center z-[100] px-6 py-6">
      <nav className="w-full max-w-6xl bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl flex justify-between items-center shadow-2xl">
        
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-black text-black group-hover:rotate-12 transition-transform">
            B
          </div>
          <h2 className="text-xl font-bold tracking-tighter bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Babua Classroom
          </h2>
        </Link>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-yellow-400 transition-colors">
            Courses
          </Link>
          <Link href="/mentor-connect" className="hover:text-yellow-400 transition-colors">
            Mentor Connect
          </Link>
          
          {/* Added Links with unique styling */}
          <Link href="/for-companies" className="hover:text-white transition-colors border-l border-white/10 pl-6">
            For Companies
          </Link>
          <Link href="/pro" className="text-yellow-400 font-bold hover:scale-105 transition-transform">
            Go Pro ⚡
          </Link>
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          <LoginButton />
          
          <Link 
            href="/courses" 
            className="hidden sm:block px-5 py-2 bg-yellow-400 text-black text-xs font-bold rounded-full hover:bg-yellow-300 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}