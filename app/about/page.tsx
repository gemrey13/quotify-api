import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl mb-4 bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">The Mission</h2>
                  <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                    Quotify was created with a simple but powerful mission: to make inspirational content easily accessible to developers worldwide. I believe that the right words at the right time can motivate, inspire, and transform the way people think and act.
                  </p>
                  <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                    In today's fast-paced digital world, applications need more than just functionality—they need heart. Whether it's a motivation app that helps users start their day with positivity, a learning platform that encourages students during challenging lessons, or a social media tool that spreads wisdom, quotes have the power to connect and inspire.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    By providing a free, reliable, and easy-to-use API, I aim to lower the barrier for developers who want to integrate meaningful content into their applications, without the hassle of managing quote databases, authentication systems, or complex infrastructure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Developer Profile */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-linear-to-br from-blue-50 to-indigo-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-full min-h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM3Mjk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                  <h3 className="text-2xl mb-4 text-slate-700">Your Name</h3>
                  <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                    I'm a solo developer passionate about creating tools that make developers' lives easier. Quotify was born from my own need for a simple, reliable quotes API.
                  </p>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    This entire project was built with the help of <span className="inline-flex items-center gap-1 px-2 py-1 bg-linear-to-r from-purple-100 to-pink-100 text-purple-700 rounded">
                      <Gem className="w-4 h-4" />
                      Gemini AI
                    </span>, showcasing how AI can empower individual developers to build powerful applications.
                  </p>

                  {/* Social Links */}
                  <div className="space-y-3">
                    <p className="text-sm text-slate-500 mb-3">Connect with me:</p>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="mailto:yourname@example.com"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                      <a 
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <a 
                        href="https://facebook.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                      <a 
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md"
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                      <a 
                        href="https://tiktok.com/@yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                        </svg>
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-br from-white to-blue-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">Simplicity First</h3>
                <p className="text-slate-600 leading-relaxed">
                  Great APIs should be intuitive and require minimal setup. No unnecessary complexity, just clean and efficient code.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-br from-white to-green-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">Always Free</h3>
                <p className="text-slate-600 leading-relaxed">
                  Access to inspiration shouldn't have a price tag. Quotify will always be free for all developers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-br from-white to-purple-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">Developer Experience</h3>
                <p className="text-slate-600 leading-relaxed">
                  Excellent documentation, consistent responses, and helpful error messages are at the core of everything.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-br from-white to-indigo-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Gem className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">AI-Powered Development</h3>
                <p className="text-slate-600 leading-relaxed">
                  Built with Gemini AI, demonstrating how solo developers can create professional-grade applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="border-0 shadow-2xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
            <CardContent className="p-10 text-center relative">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl">
                <Mail className="w-10 h-10" />
              </div>
              <h2 className="text-4xl mb-4">Let's Connect</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Have questions, suggestions, or just want to say hello? I'd love to hear from you. Your feedback helps make Quotify better for everyone.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/feedback">
                  <Button size="lg" className="bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg">
                    Send Feedback
                  </Button>
                </Link>
                <a href="mailto:yourname@example.com">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg">
                    Email Me
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

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