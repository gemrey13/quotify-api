import { Card, CardContent } from "@/components/ui/card";
import { Code, Gem, Heart, Sparkles } from "lucide-react";

const Values = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-br from-white to-blue-50">
        <CardContent className="p-8">
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl mb-3 text-slate-900">Simplicity First</h3>
          <p className="text-slate-600 leading-relaxed">
            Great APIs should be intuitive and require minimal setup. No unnecessary complexity,
            just clean and efficient code.
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
            Access to inspiration shouldn't have a price tag. Quotify will always be free for all
            developers.
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
            Excellent documentation, consistent responses, and helpful error messages are at the
            core of everything.
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
            Built with Gemini AI, demonstrating how solo developers can create professional-grade
            applications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Values;
