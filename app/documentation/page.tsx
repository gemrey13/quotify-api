"use client";

import { useState } from "react";
import { Sparkles, Copy, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Documentation() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CodeBlock = ({
    code,
    language = "javascript",
    id,
  }: {
    code: string;
    language?: string;
    id: string;
  }) => (
    <div className="relative group">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <span className="text-xs text-slate-400 uppercase">{language}</span>
        <Button
          size="sm"
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => copyToClipboard(code, id)}>
          {copiedId === id ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl mb-4">API Documentation</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Complete reference for integrating Quotify API into your applications
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Getting Started */}
          <Card>
            <CardHeader>
              <h2 className="text-3xl">Getting Started</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Quotify API is a free REST API that provides access to inspirational quotes. No
                authentication or API keys required - simply make HTTP requests to our endpoints and
                start receiving quotes instantly.
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

          {/* Endpoints */}
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
                <p className="text-slate-600 mb-4">
                  Returns a random quote from the entire collection.
                </p>

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
                    <span className="text-slate-600">
                      - Filter quotes by author name (optional)
                    </span>
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

          {/* Code Examples */}
          <Card>
            <CardHeader>
              <h2 className="text-3xl">Code Examples</h2>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                </TabsList>

                <TabsContent value="javascript" className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-slate-900">Fetch a Random Quote</h4>
                    <CodeBlock
                      id="js-random"
                      code={`// Using fetch API
fetch('api/v1/quotes/random')
  .then(response => response.json())
  .then(data => {
    console.log(data.text);
    console.log('- ' + data.author);
  })
  .catch(error => console.error('Error:', error));

// Using async/await
async function getRandomQuote() {
  try {
    const response = await fetch('api/v1/quotes/random');
    const quote = await response.json();
    return quote;
  } catch (error) {
    console.error('Error:', error);
  }
}`}
                    />
                  </div>

                  <div>
                    <h4 className="mb-2 text-slate-900">Get Quotes by Category</h4>
                    <CodeBlock
                      id="js-category"
                      code={`async function getQuotesByCategory(category) {
  const response = await fetch(
    \`api/v1/quotes?category=\${category}&limit=10\`
  );
  const data = await response.json();
  return data.quotes;
}

// Usage
getQuotesByCategory('Motivation').then(quotes => {
  quotes.forEach(quote => {
    console.log(quote.text);
  });
});`}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="python" className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-slate-900">Fetch a Random Quote</h4>
                    <CodeBlock
                      id="py-random"
                      code={`import requests

def get_random_quote():
    response = requests.get('api/v1/quotes/random')
    if response.status_code == 200:
        quote = response.json()
        print(f'"{quote["text"]}"')
        print(f'- {quote["author"]}')
    return response.json()

# Usage
get_random_quote()`}
                      language="python"
                    />
                  </div>

                  <div>
                    <h4 className="mb-2 text-slate-900">Get Quotes by Category</h4>
                    <CodeBlock
                      id="py-category"
                      code={`import requests

def get_quotes_by_category(category, limit=10):
    params = {'category': category, 'limit': limit}
    response = requests.get(
        'api/v1/quotes',
        params=params
    )
    if response.status_code == 200:
        data = response.json()
        return data['quotes']
    return []

# Usage
quotes = get_quotes_by_category('Motivation')
for quote in quotes:
    print(f'{quote["text"]} - {quote["author"]}')`}
                      language="python"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="curl" className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-slate-900">Fetch a Random Quote</h4>
                    <CodeBlock
                      id="curl-random"
                      code={`curl api/v1/quotes/random`}
                      language="bash"
                    />
                  </div>

                  <div>
                    <h4 className="mb-2 text-slate-900">Get Quotes by Category</h4>
                    <CodeBlock
                      id="curl-category"
                      code={`curl "api/v1/quotes?category=Motivation&limit=10"`}
                      language="bash"
                    />
                  </div>

                  <div>
                    <h4 className="mb-2 text-slate-900">Get All Categories</h4>
                    <CodeBlock
                      id="curl-categories"
                      code={`curl api/v1/categories`}
                      language="bash"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="php" className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-slate-900">Fetch a Random Quote</h4>
                    <CodeBlock
                      id="php-random"
                      code={`<?php
function getRandomQuote() {
    $url = 'api/v1/quotes/random';
    $response = file_get_contents($url);
    $quote = json_decode($response, true);
    
    echo '"' . $quote['text'] . '"' . "\\n";
    echo '- ' . $quote['author'] . "\\n";
    
    return $quote;
}

// Usage
getRandomQuote();
?>`}
                      language="php"
                    />
                  </div>

                  <div>
                    <h4 className="mb-2 text-slate-900">Get Quotes by Category</h4>
                    <CodeBlock
                      id="php-category"
                      code={`<?php
function getQuotesByCategory($category, $limit = 10) {
    $url = 'api/v1/quotes?' . http_build_query([
        'category' => $category,
        'limit' => $limit
    ]);
    
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    
    return $data['quotes'];
}

// Usage
$quotes = getQuotesByCategory('Motivation');
foreach ($quotes as $quote) {
    echo $quote['text'] . ' - ' . $quote['author'] . "\\n";
}
?>`}
                      language="php"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Error Handling */}
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

          {/* Best Practices */}
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
                    Always implement proper error handling and provide fallback content in case the
                    API is unreachable. Consider storing a local backup of quotes.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-slate-900">Use Appropriate Limits</h4>
                  <p className="text-slate-600">
                    When fetching multiple quotes, use the limit parameter to request only what you
                    need. This improves response times and reduces bandwidth.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-slate-900">Attribution</h4>
                  <p className="text-slate-600">
                    Always display the author attribution with each quote. It's respectful to the
                    original speakers and adds credibility to your application.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-slate-900">Be Respectful</h4>
                  <p className="text-slate-600">
                    While there are no strict rate limits, please be considerate of server
                    resources. Avoid making unnecessary repeated requests in short time periods.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="bg-linear-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl mb-3">Need Help?</h3>
              <p className="text-slate-600 mb-6">
                Have questions or feedback about the API? We'd love to hear from you.
              </p>
              <Link href="/feedback">
                <Button size="lg">Submit Feedback</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Documentation;
