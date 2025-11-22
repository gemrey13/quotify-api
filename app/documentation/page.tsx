import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import GettingStarted from "@/pages/Documentation/GettingStarted";
import Endpoints from "@/pages/Documentation/Endpoints";
import CodeExamples from "@/pages/Documentation/CodeExamples";
import ErrorHandling from "@/pages/Documentation/ErrorHandling";
import BestPractices from "@/pages/Documentation/BestPractices";

function Documentation() {
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
          <GettingStarted />

          {/* Endpoints */}
          <Endpoints />

          {/* Code Examples */}
          <CodeExamples />

          {/* Error Handling */}
          <ErrorHandling />

          {/* Best Practices */}
          <BestPractices />

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
