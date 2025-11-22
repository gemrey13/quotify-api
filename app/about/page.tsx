import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Contact from '@/pages/About/Contact';
import DeveloperProfile from '@/pages/About/DeveloperProfile';
import Mission from '@/pages/About/Mission';
import Values from '@/pages/About/Values';
import { Sparkles, ArrowLeft, Heart, Code, Gem, Mail, Github, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 ">

      {/* Header */}
      <div className="relative bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 overflow-hidden ">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 relative max-w-5xl">
          <h1 className="text-6xl mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-blue-100">
            About Quotify
          </h1>
          <p className="text-2xl text-indigo-100 max-w-2xl">
            Built with passion by a solo developer, powered by AI
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Mission */}
          <Mission />

          {/* Developer Profile */}
          <DeveloperProfile />

          {/* Values Grid */}
          <Values />

          {/* Contact Section */}
          <Contact />

          {/* Support the Project */}
          <Card className="border-0 shadow-xl bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
            <CardContent className="p-10 text-center">
              <h2 className="text-4xl mb-6 bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Support Quotify
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Quotify is free and always will be. If you find it useful, here's how you can help:
              </p>
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">Share It</h3>
                  <p className="text-slate-600">Tell other developers about Quotify and help grow the community.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">Contribute Quotes</h3>
                  <p className="text-slate-600">Submit your favorite quotes to expand the collection.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">Give Feedback</h3>
                  <p className="text-slate-600">Share your ideas to make the API even better.</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}


export default About