import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Mission = () => {
  return (
    <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8 md:p-10">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-4xl mb-4 bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              The Mission
            </h2>
            <p className="text-slate-600 mb-4 text-lg leading-relaxed">
              Quotify was created with a simple but powerful mission: to make inspirational content
              easily accessible to developers worldwide. I believe that the right words at the right
              time can motivate, inspire, and transform the way people think and act.
            </p>
            <p className="text-slate-600 mb-4 text-lg leading-relaxed">
              In today's fast-paced digital world, applications need more than just
              functionality—they need heart. Whether it's a motivation app that helps users start
              their day with positivity, a learning platform that encourages students during
              challenging lessons, or a social media tool that spreads wisdom, quotes have the power
              to connect and inspire.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              By providing a free, reliable, and easy-to-use API, I aim to lower the barrier for
              developers who want to integrate meaningful content into their applications, without
              the hassle of managing quote databases, authentication systems, or complex
              infrastructure.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Mission;
