import { Card, CardContent } from "@/components/ui/card";

const UseCasesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-slate-900">Use Cases</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how developers are using Quotify API in their projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-linear-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-3 text-slate-900">Motivation Apps</h3>
              <p className="text-slate-600 mb-4">
                Display daily inspirational quotes to keep users motivated and engaged with your
                wellness or productivity applications.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Daily quote notifications</li>
                <li>• Widget integrations</li>
                <li>• Personalized quote streams</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-purple-50 to-pink-50">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-3 text-slate-900">Learning Platforms</h3>
              <p className="text-slate-600 mb-4">
                Enhance educational content with relevant quotes from thought leaders, philosophers,
                and innovators.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Course introductions</li>
                <li>• Study break content</li>
                <li>• Student dashboards</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-3 text-slate-900">Social Media Tools</h3>
              <p className="text-slate-600 mb-4">
                Power quote-sharing features, automated posting bots, and social media content
                generation tools.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Scheduled posts</li>
                <li>• Quote image generators</li>
                <li>• Content calendars</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-orange-50 to-red-50">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-3 text-slate-900">Design Projects</h3>
              <p className="text-slate-600 mb-4">
                Add meaningful placeholder content for mockups, prototypes, and design
                demonstrations.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• UI/UX prototypes</li>
                <li>• Design portfolios</li>
                <li>• Client presentations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
