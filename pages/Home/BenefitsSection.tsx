import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import Link from "next/link";

const BenefitsSection = () => {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Why Choose Quotify?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Built by developers, for developers. We understand what you need.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl mb-2">100% Free Forever</h3>
                  <p className="text-slate-300">
                    No hidden costs, no premium tiers. Completely free for all developers and
                    projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl mb-2">No Rate Limits</h3>
                  <p className="text-slate-300">
                    Make as many requests as you need. Perfect for high-traffic applications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl mb-2">RESTful Design</h3>
                  <p className="text-slate-300">
                    Standard HTTP methods and predictable endpoint structure for easy integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl mb-2">JSON Responses</h3>
                  <p className="text-slate-300">
                    Clean, consistent JSON format that's easy to parse in any programming language.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl mb-2">Category Filtering</h3>
                  <p className="text-slate-300">
                    Filter quotes by category to match your application's theme and context.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl mb-2">Community Driven</h3>
                  <p className="text-slate-300">
                    Submit your favorite quotes and help grow the collection for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/documentation">
              <Button size="lg" variant="secondary" className="gap-2">
                <Code className="w-5 h-5" />
                Get Started with API
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
