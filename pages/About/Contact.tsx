import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <Card className="border-0 shadow-2xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      <CardContent className="p-10 text-center relative">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl">
          <Mail className="w-10 h-10" />
        </div>
        <h2 className="text-4xl mb-4">Let's Connect</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Have questions, suggestions, or just want to say hello? I'd love to hear from you. Your
          feedback helps make Quotify better for everyone.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/feedback">
            <Button
              size="lg"
              className="bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg">
              Send Feedback
            </Button>
          </Link>
          <a href="mailto:gemreyranola@gmail.com">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg">
              Email Me
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
