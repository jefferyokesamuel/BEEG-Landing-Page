import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins, TrendingUp, Shield } from 'lucide-react';

const TokenSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Not a Carbon Offset",
      description: "$BEEG tokens are not retireable offsets.They represent exposure to verifiable carbon credit vaults, backed by real diesel displacement — designed as financial instruments for climate-aligned investors."
    },
  {
  icon: TrendingUp,
  title: "$205 Buyback Model",
  description: (
    <>
      Each $BEEG token is minted with a fixed sell price and a guaranteed buyback price, set annually after:<br /> <br />
      1. The launch of a new project series,<br />
      2. The sale of 10% of that series’ Verra-verified SD VISta VCUs.<br /> <br />
      Prices are locked per vintage and never change once minted, providing institutional-grade clarity and predictable returns.
    </>
  )
},
    {
      icon: Coins,
      title: "Exposure to 735,000 VCUs",
      description: "$BEEG tokens are backed by a projected pipeline of 735,000+ verified carbon units, generated across public institutions converting from diesel to clean prepaid power by 2031."
    }
  ];

  return (
    <section className="py-24 bg-[#1A1C1E] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#FFD600]">$BEEG</span> – A Tokenized Carbon Vault for Institutional Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Programmable carbon exposure from public institutions — tokenized by vintage,
            secured by clean infrastructure, and governed by transparent smart contracts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#22513B] border-none text-white">
              <CardHeader className="text-center">
                <feature.icon className="h-12 w-12 text-[#FFD600] mx-auto mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Button 
            size="lg" 
            className="bg-[#FFD600] text-[#1A1C1E] hover:bg-[#FFD600]/90 px-8 py-3 text-lg font-semibold"
          >
            View Tokenomics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
