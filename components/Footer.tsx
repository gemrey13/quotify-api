import { Sparkles } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="text-xl">Quotify API</span>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link
              href="/documentation"
              className="text-slate-600 hover:text-slate-900 transition-colors">
              Documentation
            </Link>
            <Link
              href="/feedback"
              className="text-slate-600 hover:text-slate-900 transition-colors">
              Feedback
            </Link>
          </div>

          <p className="text-slate-500 text-sm">© 2024 Quotify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
