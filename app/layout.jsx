import { Inter } from "next/font/google";
import BubbleAI from "@/components/BubbleAI";
import "@/app/globals.css";

// 1. Using Inter for that premium SaaS feel
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Babua Classroom | Logic-First DSA",
  description: "Stop memorizing code. Start building logic with Socratic AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#050505] text-white antialiased`}
      >
        {/* Main page content */}
        <main className="relative min-h-screen">
          {children}
        </main>

        {/* The AI Mentor Bubble. 
            Because of the 'usePathname' logic inside BubbleAI, 
            it will only render on /courses or /classroom.
        */}
        <BubbleAI />
      </body>
    </html>
  );
}