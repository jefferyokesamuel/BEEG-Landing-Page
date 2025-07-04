import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins, TrendingUp, Shield } from 'lucide-react';

const TokenSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Not a Carbon Offset",
      description: "BEEG tokens represent exposure to carbon credit vaults, not redeemable offsets. Pure financial instrument."
    },
    {
      icon: TrendingUp,
      title: "$205 Buyback Model",
      description: "Institutional buyback mechanism tied to energy demand and carbon credit generation cycles."
    },
    {
      icon: Coins,
      title: "Exposure to 735,000 VCUs",
      description: "Token holders gain exposure to verified carbon units across our entire project portfolio."
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
            Revolutionary tokenized exposure to verified carbon credits and institutional energy demand, 
            powered by real infrastructure and transparent blockchain tracking.
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
