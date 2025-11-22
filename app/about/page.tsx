import Contact from "@/pages/About/Contact";
import DeveloperProfile from "@/pages/About/DeveloperProfile";
import Mission from "@/pages/About/Mission";
import SupportProject from "@/pages/About/SupportProject";
import Values from "@/pages/About/Values";

function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 ">
      {/* Header */}
      <div className="relative bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 overflow-hidden ">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 relative max-w-5xl">
          <h1 className="text-6xl mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-blue-100">
            About Quotify
          </h1>
          <p className="text-2xl text-indigo-100 max-w-2xl">
            Built with passion by a solo developer, powered by AI
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Mission */}
          <Mission />

          {/* Developer Profile */}
          <DeveloperProfile />

          {/* Values Grid */}
          <Values />

          {/* Contact Section */}
          <Contact />

          {/* Support the Project */}
          <SupportProject />
        </div>
      </div>
    </div>
  );
}

export default About;
