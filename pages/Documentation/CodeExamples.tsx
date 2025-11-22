import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/CodeBlock";

const CodeExamples = () => {
  return (
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
              <CodeBlock id="curl-random" code={`curl api/v1/quotes/random`} language="bash" />
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
              <CodeBlock id="curl-categories" code={`curl api/v1/categories`} language="bash" />
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
  );
};

export default CodeExamples;
