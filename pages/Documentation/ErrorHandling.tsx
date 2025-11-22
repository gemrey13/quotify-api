import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CodeBlock from "@/components/CodeBlock";

const ErrorHandling = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-3xl">Error Handling</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate-600">
          The API uses standard HTTP status codes to indicate success or failure of requests.
        </p>

        <div className="space-y-3">
          <div className="flex gap-3 p-3 bg-green-50 rounded">
            <code className="text-green-700">200 OK</code>
            <span className="text-slate-600">Request successful</span>
          </div>
          <div className="flex gap-3 p-3 bg-red-50 rounded">
            <code className="text-red-700">404 Not Found</code>
            <span className="text-slate-600">Quote or resource not found</span>
          </div>
          <div className="flex gap-3 p-3 bg-red-50 rounded">
            <code className="text-red-700">400 Bad Request</code>
            <span className="text-slate-600">Invalid parameters provided</span>
          </div>
          <div className="flex gap-3 p-3 bg-red-50 rounded">
            <code className="text-red-700">500 Server Error</code>
            <span className="text-slate-600">Internal server error</span>
          </div>
        </div>

        <h4 className="mt-6 mb-2 text-slate-900">Error Response Format:</h4>
        <CodeBlock
          id="error-format"
          code={`{
  "error": {
    "message": "Quote not found",
    "status": 404
  }
}`}
          language="json"
        />
      </CardContent>
    </Card>
  );
};

export default ErrorHandling;
