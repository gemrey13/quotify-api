import { Card, CardContent } from "@/components/ui/card";
import { Code, Gem, Mail } from "lucide-react";
import { LuGithub, LuFacebook, LuInstagram } from "react-icons/lu";
import Image from "next/image";

const DeveloperProfile = () => {
  return (
    <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-linear-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-full min-h-[400px]">
            <Image
              src="/GemPic.png"
              alt="Developer"
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Gem className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-4xl mb-4 bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Meet the Developer
            </h2>
            <h3 className="text-2xl mb-4 text-slate-700">Code with Gem</h3>
            <p className="text-slate-600 mb-4 text-lg leading-relaxed">
              I'm a solo developer passionate about creating tools that make developers' lives
              easier. Quotify was born from my own need for a simple, reliable quotes API.
            </p>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              This entire project was built with the help of{" "}
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-linear-to-r from-purple-100 to-pink-100 text-purple-700 rounded">
                <Gem className="w-4 h-4" />
                Gemini AI
              </span>
              , showcasing how AI can empower individual developers to build powerful applications.
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm text-slate-500 mb-3">Connect with me:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:gemreyranola@gmal.com"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href="https://github.com/gemrey13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md">
                  <LuGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/codewgem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                  <LuFacebook className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/codewgem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md">
                  <LuInstagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@codewgem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeveloperProfile;
