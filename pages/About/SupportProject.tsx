import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Sparkles } from "lucide-react";

const SupportProject = () => {
  return (
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
            <p className="text-slate-600">
              Tell other developers about Quotify and help grow the community.
            </p>
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
  );
};

export default SupportProject;
