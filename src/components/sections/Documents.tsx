
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, BookOpen, Zap, Map, Settings } from 'lucide-react';

const Documents = () => {
  const quickLinks = [
    {
      title: "Technical Architecture",
      description: "Deep dive into our VPP infrastructure and carbon credit integration",
      icon: Settings,
      color: "bg-blue-500",
      link: "https://beeg-energy.gitbook.io/beeg-energy-docs/technical-architecture"
    },
    {
      title: "BEEG Protocol Solution",
      description: "Complete breakdown of our tokenized carbon vault model",
      icon: Zap,
      color: "bg-green-500",
      link: "https://beeg-energy.gitbook.io/beeg-energy-docs/beeg-protocol-solution"
    },
    {
      title: "Roadmap",
      description: "Project milestones and future development timeline",
      icon: Map,
      color: "bg-purple-500",
      link: "https://beeg-energy.gitbook.io/beeg-energy-docs/roadmap"
    }
  ];

  const openLink = (link) => {
    window.open(link, '_blank')
  }
  const handleGitBookClick = () => {
    window.open('https://beeg-energy.gitbook.io/beeg-energy-docs', '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Documentation Hub
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto">
            Access our comprehensive documentation including technical specifications, 
            protocol details, and project roadmap through our GitBook repository.
          </p>
        </div>
        
        {/* Main GitBook CTA */}
        <div className="mb-16">
          <Card className="max-w-2xl mx-auto shadow-xl border-none bg-gradient-to-r from-[#22513B] to-[#1A1C1E] text-white">
            <CardHeader className="text-center pb-4">
              <BookOpen className="h-16 w-16 text-[#FFD600] mx-auto mb-4" />
              <CardTitle className="text-2xl md:text-3xl">Complete Documentation</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-4 sm:px-8">
              <p className="text-gray-200 mb-6 text-lg">
                Explore our full documentation suite including whitepapers, technical guides, 
                tokenomics, and legal frameworks.
              </p>
              <Button 
                size="lg" 
                className="bg-[#FFD600] text-[#1A1C1E] hover:bg-[#FFD600]/90 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                onClick={handleGitBookClick}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit GitBook Documentation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Links */}
        <div>
          <h3 className="text-2xl font-bold text-[#212121] text-center mb-8">
            Quick Access
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Card key={index} className="shadow-lg border-none hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`h-12 w-12 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#212121]">{link.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-[#555555] mb-6">{link.description}</p>
                  <Button variant="outline" className="border-[#22513B] text-[#22513B] hover:bg-[#22513B] hover:text-white w-full" onClick={() => openLink(link.link)}>
                    <FileText className="mr-2 h-4 w-4" />
                    Read Section
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default Documents;
