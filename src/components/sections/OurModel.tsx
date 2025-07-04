
import { Card, CardContent } from '@/components/ui/card';
import { Battery, Sun, BarChart3, Shield } from 'lucide-react';

const OurModel = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-8">
              Our Model
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#FFD600] pl-6">
                <h3 className="text-xl font-bold text-[#212121] mb-2">What is a VPP?</h3>
                <p className="text-[#555555]">
                  Virtual Power Plants (VPPs) are clusters of solar + battery systems installed across public campuses and communities. We use smart meters and on-site control infrastructure to deliver prepaid electricity replacing diesel use with clean, predictable power.
                </p>
              </div>
              
              <div className="border-l-4 border-[#22513B] pl-6">
                <h3 className="text-xl font-bold text-[#212121] mb-2">Carbon Credits via Verra + MRV</h3>
                <p className="text-[#555555]">
                  For every 1,000–1,200 kWh of diesel-based electricity displaced, Beeg generates one Verified Carbon Unit (VCU) certified under Verra’s SD VISta standard.
                  All energy data is tracked via digital MRV systems for transparent, tamper-proof climate impact.
                </p>
              </div>
              
              <div className="border-l-4 border-[#FFD600] pl-6">
                <h3 className="text-xl font-bold text-[#212121] mb-2">Token Logic</h3>
                <p className="text-[#555555]">
                  We don’t tokenize electricity. We tokenize vaulted carbon credits.
                  $BEEG tokens represent access to Africa’s cleanest, most transparent carbon reserves — generated from real infrastructure, stored on-chain, and backed by smart-contract buyback rules.
                  Tokens are non-redeemable offsets, but offer FX-linked yield and verified climate exposure.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#E8F6F2] rounded-lg">
              <p className="text-[#22513B] font-semibold text-lg">
                "No Land Costs. No Diesel. Full Transparency."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#212121] mb-4">VPP Stack Flow</h3>
            </div>
            
            <div className="flex flex-col space-y-4">
              {[
                { icon: Sun, label: "Solar Generation", color: "#FFD600" },
                { icon: Battery, label: "Battery Storage", color: "#22513B" },
                { icon: BarChart3, label: "Smart Metering", color: "#FFD600" },
                { icon: Shield, label: "Carbon Credits", color: "#22513B" }
              ].map((item, index) => (
                <Card key={index} className="border-l-4" style={{ borderLeftColor: item.color }}>
                  <CardContent className="p-4 flex items-center space-x-4">
                    <item.icon className="h-8 w-8" style={{ color: item.color }} />
                    <span className="text-[#212121] font-semibold">{item.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurModel;
