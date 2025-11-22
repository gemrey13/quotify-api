import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

const DemoCard = () => {
  const currentQuote = {
    id: "1",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation",
    createdAt: "2024-01-01T00:00:00Z",
  };
  return (
    <div id="demo" className="mb-16">
      <Card className="max-w-2xl mx-auto bg-white shadow-xl">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="text-left">
              <h3 className="text-sm text-slate-500 mb-2">LIVE DEMO</h3>
              <p className="text-slate-600">Random Quote Generator</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              New Quote
            </Button>
          </div>

          {currentQuote && (
            <div className="space-y-4">
              <blockquote className="text-2xl text-slate-900 italic">
                "{currentQuote.text}"
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t">
                <p className="text-slate-600">— {currentQuote.author}</p>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  {currentQuote.category}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoCard;
