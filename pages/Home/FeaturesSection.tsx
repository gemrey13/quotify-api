import { Card, CardContent } from "@/components/ui/card";
import { Code, Sparkles, Zap, Globe, Shield, RefreshCw } from "lucide-react";

const FeaturesSection = () => {
  return (
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
                Optimized API responses with minimal latency. Get quotes instantly for seamless user
                experiences.
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
                Simple REST endpoints with comprehensive documentation and code examples in multiple
                languages.
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
  );
};

export default FeaturesSection;
