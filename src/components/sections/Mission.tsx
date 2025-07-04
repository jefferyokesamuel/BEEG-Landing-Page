
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Zap, Coins } from 'lucide-react';

const Mission = () => {
  const cards = [
    {
      icon: Zap,
      title: "Prepaid Power",
      description: "Smart meters enable reliable prepaid electricity access for institutions and communities abandoned by the grid powered by clean energy, not diesel."
    },
    {
      icon: Globe,
      title: "Carbon Revenue", 
      description: "Every project is registered under Verra’s SD VISta standard, creating high-integrity carbon credits from diesel displacement — tracked and vaulted on-chain."
    },
    {
      icon: Coins,
      title: "Tokenized Returns",
      description: "$BEEG tokens represent claims on verified carbon assets, not electricity. Tokens are FX- yielding, buyback-guaranteed, and tied to the real energy transition in Africa’s most underserved zones."
    }
  ];

  return (
    <section className="py-24 bg-[#E8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Globe className="h-12 w-12 text-[#22513B]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Turning Africa’s Diesel-Reliant Public Institutions into Carbon-Backed Prepaid Power Hubs
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto">
            We deploy solar + battery infrastructure, smart metering systems, and carbon credit vaults across public properties — from campuses and hospitals to boreholes and ministries — converting diesel-reliant sites into low-carbon, prepaid energy hubs with verifiable climate impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <card.icon className="h-12 w-12 text-[#FFD600] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#212121] mb-4">{card.title}</h3>
                <p className="text-[#555555]">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
