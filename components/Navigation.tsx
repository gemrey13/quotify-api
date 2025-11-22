import { Sparkles } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-5xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-blue-600" />
          <span className="text-xl">Quotify</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/documentation"
            className="text-slate-600 hover:text-slate-900 transition-colors">
            Documentation
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
            About
          </Link>
          <Link href="/feedback" className="text-slate-600 hover:text-slate-900 transition-colors">
            Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
