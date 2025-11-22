import { Card, CardContent, CardHeader } from "@/components/ui/card";

const BestPractices = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-3xl">Best Practices</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-slate-900">Cache Responses</h4>
            <p className="text-slate-600">
              To reduce API calls and improve performance, cache quote responses locally for a
              reasonable duration (e.g., 24 hours for quote lists, 1 hour for random quotes).
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-slate-900">Handle Errors Gracefully</h4>
            <p className="text-slate-600">
              Always implement proper error handling and provide fallback content in case the API is
              unreachable. Consider storing a local backup of quotes.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-slate-900">Use Appropriate Limits</h4>
            <p className="text-slate-600">
              When fetching multiple quotes, use the limit parameter to request only what you need.
              This improves response times and reduces bandwidth.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-slate-900">Attribution</h4>
            <p className="text-slate-600">
              Always display the author attribution with each quote. It's respectful to the original
              speakers and adds credibility to your application.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-slate-900">Be Respectful</h4>
            <p className="text-slate-600">
              While there are no strict rate limits, please be considerate of server resources.
              Avoid making unnecessary repeated requests in short time periods.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BestPractices;
