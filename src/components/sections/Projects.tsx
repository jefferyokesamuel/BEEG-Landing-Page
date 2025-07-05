
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Zap } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-24 bg-[#E8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Projects Showcase
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto">
            Starting with flagship institutions and scaling across Africa's educational and healthcare infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-xl border-none bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-[#212121]">
                  FUOYE Campus - Nigeria
                </CardTitle>
                <div className="bg-[#FFD600] text-[#1A1C1E] px-3 py-1 rounded-full text-sm font-semibold">
                  Active
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div 
                className="h-48 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&h=400&fit=crop')`
                }}
              ></div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-[#22513B]" />
                  <span className="text-[#555555]">5 MW Solar + 7.15Mwh BESS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-[#22513B]" />
                  <span className="text-[#555555]">Ekiti State</span>
                </div>
              </div>
              
              <p className="text-[#555555]">
                Federal University Oye-Ekiti becomes Africa's first tokenized carbon-backed campus, 
                generating 513 VCUs (SD vista certified) annually while providing reliable clean power.
              </p>
              
              <Button className="w-full bg-[#22513B] hover:bg-[#22513B]/90">
                View Project Details
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl border-none bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#212121]">
                50+ Projects Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div 
                className="h-48 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=800&h=400&fit=crop')`
                }}
              ></div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-[#E8F6F2] rounded-lg">
                  <span className="font-semibold text-[#212121]">Universities</span>
                  <span className="text-[#22513B] font-bold">25 Projects</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#E8F6F2] rounded-lg">
                  <span className="font-semibold text-[#212121]">Hospitals</span>
                  <span className="text-[#22513B] font-bold">15 Projects</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#E8F6F2] rounded-lg">
                  <span className="font-semibold text-[#212121]">Government</span>
                  <span className="text-[#22513B] font-bold">10 Projects</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full border-[#22513B] text-[#22513B] hover:bg-[#22513B] hover:text-white">
                <Calendar className="mr-2 h-4 w-4" />
                View Timeline
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
