import { Card, CardContent, CardHeader } from "@/components/ui/card";

const GettingStarted = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-3xl">Getting Started</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate-600">
          Quotify API is a free REST API that provides access to inspirational quotes. No
          authentication or API keys required - simply make HTTP requests to our endpoints and start
          receiving quotes instantly.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-slate-900 mb-2">Base URL</p>
          <code className="text-blue-600">api/v1</code>
        </div>
        <p className="text-slate-600">
          All responses are returned in JSON format with appropriate HTTP status codes.
        </p>
      </CardContent>
    </Card>
  );
};

export default GettingStarted;
