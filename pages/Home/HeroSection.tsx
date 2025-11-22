"use client";

import DemoCard from "@/components/DemoCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Free & Open API</span>
        </div>

        <h1 className="text-6xl mb-6 text-slate-900">Quotify API</h1>

        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          A simple, fast, and reliable REST API for accessing inspirational quotes. Perfect for
          developers building motivational apps, websites, or creative projects.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <Link href="/documentation">
            <Button size="lg" className="gap-2">
              <BookOpen className="w-5 h-5" />
              View Documentation
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
            }}>
            Try Live Demo
          </Button>
        </div>

        {/* Live Demo */}
        <DemoCard />
      </div>
    </section>
  );
};

export default HeroSection;
