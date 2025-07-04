
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Building, DollarSign, Code } from 'lucide-react';

const GetInvolved = () => {
  const personas = [
    {
      icon: Users,
      title: "Climate DAO?",
      subtitle: "Support with liquidity",
      description: "Join our climate finance ecosystem and provide liquidity for tokenized carbon vaults.",
      cta: "Partner with Us"
    },
    {
      icon: Building,
      title: "Campus Leader?",
      subtitle: "Host a VPP",
      description: "Transform your institution into a carbon-positive power hub with our VPP infrastructure.",
      cta: "Request Proposal"
    },
    {
      icon: DollarSign,
      title: "Carbon Financier?",
      subtitle: "Buy-in now",
      description: "Get early exposure to verified carbon credits through our institutional buyback model.",
      cta: "Invest Today"
    },
    {
      icon: Code,
      title: "Developer?",
      subtitle: "Build with us",
      description: "Contribute to our open-source climate tech stack and Web3 integration tools.",
      cta: "Join GitHub"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto">
            Join the carbon economy revolution. Whether you're a DAO, institution, financier, or developer, 
            there's a place for you in our ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <Card key={index} className="shadow-lg border-none hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#22513B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <persona.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-[#212121]">{persona.title}</CardTitle>
                <p className="text-sm text-[#FFD600] font-semibold">{persona.subtitle}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#555555] mb-6">{persona.description}</p>
                <Button variant="outline" className="border-[#22513B] text-[#22513B] hover:bg-[#22513B] hover:text-white w-full">
                  {persona.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
