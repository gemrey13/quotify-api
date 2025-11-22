import CodeBlock from "@/components/CodeBlock";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Endpoints = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-3xl">API Endpoints</h2>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Get Random Quote */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">GET</span>
            <code className="text-lg">/quotes/random</code>
          </div>
          <p className="text-slate-600 mb-4">Returns a random quote from the entire collection.</p>

          <h4 className="mb-2 text-slate-900">Response Example:</h4>
          <CodeBlock
            id="random-response"
            code={`{
  "id": "123",
  "text": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs",
  "category": "Motivation",
  "createdAt": "2024-01-01T00:00:00Z"
}`}
            language="json"
          />
        </div>

        {/* Get All Quotes */}
        <div className="pt-6 border-t">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">GET</span>
            <code className="text-lg">/quotes</code>
          </div>
          <p className="text-slate-600 mb-4">
            Returns all quotes in the collection. Supports pagination and filtering.
          </p>

          <h4 className="mb-2 text-slate-900">Query Parameters:</h4>
          <div className="space-y-2 mb-4 bg-slate-50 p-4 rounded-lg">
            <div className="flex gap-2">
              <code className="text-blue-600">category</code>
              <span className="text-slate-600">- Filter quotes by category (optional)</span>
            </div>
            <div className="flex gap-2">
              <code className="text-blue-600">author</code>
              <span className="text-slate-600">- Filter quotes by author name (optional)</span>
            </div>
            <div className="flex gap-2">
              <code className="text-blue-600">limit</code>
              <span className="text-slate-600">
                - Number of quotes to return (default: 10, max: 100)
              </span>
            </div>
            <div className="flex gap-2">
              <code className="text-blue-600">offset</code>
              <span className="text-slate-600">- Number of quotes to skip (default: 0)</span>
            </div>
          </div>

          <h4 className="mb-2 text-slate-900">Example Request:</h4>
          <CodeBlock
            id="all-quotes-request"
            code={`GET /quotes?category=Motivation&limit=5`}
            language="http"
          />

          <h4 className="mt-4 mb-2 text-slate-900">Response Example:</h4>
          <CodeBlock
            id="all-quotes-response"
            code={`{
  "quotes": [
    {
      "id": "123",
      "text": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs",
      "category": "Motivation",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    // ... more quotes
  ],
  "total": 150,
  "limit": 5,
  "offset": 0
}`}
            language="json"
          />
        </div>

        {/* Get Quote by ID */}
        <div className="pt-6 border-t">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">GET</span>
            <code className="text-lg">/quotes/:id</code>
          </div>
          <p className="text-slate-600 mb-4">Returns a specific quote by its ID.</p>

          <h4 className="mb-2 text-slate-900">Response Example:</h4>
          <CodeBlock
            id="quote-by-id"
            code={`{
  "id": "123",
  "text": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs",
  "category": "Motivation",
  "createdAt": "2024-01-01T00:00:00Z"
}`}
            language="json"
          />
        </div>

        {/* Get Categories */}
        <div className="pt-6 border-t">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">GET</span>
            <code className="text-lg">/categories</code>
          </div>
          <p className="text-slate-600 mb-4">Returns all available quote categories.</p>

          <h4 className="mb-2 text-slate-900">Response Example:</h4>
          <CodeBlock
            id="categories"
            code={`{
  "categories": [
    "Motivation",
    "Inspiration",
    "Life",
    "Success",
    "Innovation",
    "Wisdom"
  ]
}`}
            language="json"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Endpoints;
