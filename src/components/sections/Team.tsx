
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const team = [
    {
      name: "Dr. Adaora Okafor",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Williams",
      role: "Head of Carbon Finance",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Okonkwo",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Our Team
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto">
            Meet the experts driving the future of carbon-backed clean energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="shadow-lg border-none hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center p-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[#212121] mb-2">{member.name}</h3>
                <p className="text-[#555555]">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
