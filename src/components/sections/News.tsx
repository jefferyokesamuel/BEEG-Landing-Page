
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "FUOYE Campus Goes Live with Africa's First Tokenized VPP",
      date: "December 15, 2024",
      category: "Project Update",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&h=300&fit=crop",
      excerpt: "Federal University Oye-Ekiti becomes the first institution to operate a tokenized carbon-backed Virtual Power Plant..."
    },
    {
      title: "Nigerian Government Signs MOU for 25 University VPPs",
      date: "December 10, 2024",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=600&h=300&fit=crop",
      excerpt: "Federal Ministry of Education partners with BEEG Energy to deploy clean power infrastructure across 25 federal universities..."
    },
    {
      title: "KlimaDAO Integration: Bridging Traditional Carbon Markets",
      date: "December 5, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&h=300&fit=crop",
      excerpt: "BEEG announces integration with KlimaDAO's on-chain carbon infrastructure, enabling seamless tokenized carbon credit flows..."
    }
  ];

  return (
    <section className="py-24 bg-[#E8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            News & Partnerships
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto">
            Stay updated on our latest project deployments, government partnerships, 
            and ecosystem integrations driving Africa's clean energy transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="shadow-lg border-none bg-white hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${article.image}')` }}
              ></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-[#FFD600] text-[#1A1C1E] px-2 py-1 rounded font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-[#555555]">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-lg text-[#212121] leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#555555] text-sm mb-4">{article.excerpt}</p>
                <Button variant="outline" className="w-full border-[#22513B] text-[#22513B] hover:bg-[#22513B] hover:text-white">
                  Read More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
