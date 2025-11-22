import { Code, Sparkles, Zap, Globe, Shield, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/pages/Home/HeroSection";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-slate-900">Key Features</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to integrate inspiring quotes into your applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Lightning Fast</h3>
                <p className="text-slate-600">
                  Optimized API responses with minimal latency. Get quotes instantly for seamless
                  user experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl mb-2">Developer Friendly</h3>
                <p className="text-slate-600">
                  Simple REST endpoints with comprehensive documentation and code examples in
                  multiple languages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl mb-2">No Authentication</h3>
                <p className="text-slate-600">
                  Start using immediately without API keys or registration. Perfect for quick
                  prototypes and learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2">Curated Collection</h3>
                <p className="text-slate-600">
                  Access hundreds of inspiring quotes organized by category, author, and theme.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl mb-2">Reliable & Stable</h3>
                <p className="text-slate-600">
                  Built for production use with consistent uptime and predictable response formats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl mb-2">Always Growing</h3>
                <p className="text-slate-600">
                  Regular updates with new quotes and features based on community feedback and
                  requests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-slate-900">Use Cases</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how developers are using Quotify API in their projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-linear-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-3 text-slate-900">Motivation Apps</h3>
                <p className="text-slate-600 mb-4">
                  Display daily inspirational quotes to keep users motivated and engaged with your
                  wellness or productivity applications.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Daily quote notifications</li>
                  <li>• Widget integrations</li>
                  <li>• Personalized quote streams</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-3 text-slate-900">Learning Platforms</h3>
                <p className="text-slate-600 mb-4">
                  Enhance educational content with relevant quotes from thought leaders,
                  philosophers, and innovators.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Course introductions</li>
                  <li>• Study break content</li>
                  <li>• Student dashboards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-3 text-slate-900">Social Media Tools</h3>
                <p className="text-slate-600 mb-4">
                  Power quote-sharing features, automated posting bots, and social media content
                  generation tools.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Scheduled posts</li>
                  <li>• Quote image generators</li>
                  <li>• Content calendars</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-orange-50 to-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-3 text-slate-900">Design Projects</h3>
                <p className="text-slate-600 mb-4">
                  Add meaningful placeholder content for mockups, prototypes, and design
                  demonstrations.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• UI/UX prototypes</li>
                  <li>• Design portfolios</li>
                  <li>• Client presentations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Why Choose Quotify?</h2>
            <p className="text-xl text-slate-300 mb-12">
              Built by developers, for developers. We understand what you need.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">100% Free Forever</h3>
                    <p className="text-slate-300">
                      No hidden costs, no premium tiers. Completely free for all developers and
                      projects.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">No Rate Limits</h3>
                    <p className="text-slate-300">
                      Make as many requests as you need. Perfect for high-traffic applications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">RESTful Design</h3>
                    <p className="text-slate-300">
                      Standard HTTP methods and predictable endpoint structure for easy integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">JSON Responses</h3>
                    <p className="text-slate-300">
                      Clean, consistent JSON format that's easy to parse in any programming
                      language.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Category Filtering</h3>
                    <p className="text-slate-300">
                      Filter quotes by category to match your application's theme and context.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Community Driven</h3>
                    <p className="text-slate-300">
                      Submit your favorite quotes and help grow the collection for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/documentation">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Code className="w-5 h-5" />
                  Get Started with API
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default Home;