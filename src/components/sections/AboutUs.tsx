export const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1C1E] mb-4 relative pb-4">
            <span className="bg-[#FFD600] h-1 w-16 absolute bottom-0 left-1/2 -translate-x-1/2"></span>
            About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#FFD600]">
              <h3 className="text-2xl font-semibold mb-4 text-[#1A1C1E]">
                <span className="text-[#FFD600]">//</span> Our Foundation
              </h3>
              <p className="text-lg text-[#4A4F54] leading-relaxed">
                Beeg Protocol is built by the team at Beeg Energy, a registered clean energy company
                deploying prepaid solar + battery infrastructure across diesel-reliant public
                institutions in Africa.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#FFD600]">
              <h3 className="text-2xl font-semibold mb-4 text-[#1A1C1E]">
                <span className="text-[#FFD600]">//</span> Who We Are
              </h3>
              <ul className="space-y-4 text-[#4A4F54]">
                <li className="flex items-start">
                  <span className="text-[#FFD600] mr-3 mt-1">▹</span>
                  A climate-tech infrastructure team, not just a token project
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD600] mr-3 mt-1">▹</span>
                  Operators of on-grid + off-grid prepaid energy systems
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD600] mr-3 mt-1">▹</span>
                  Registered and listed in Verra’s carbon registry
                </li>
                 <li className="flex items-start">
                  <span className="text-[#FFD600] mr-3 mt-1">▹</span>
                  Backed by real LOIs, real institutions, and real community deployment plans
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#F8F9FA] p-8 rounded-2xl h-full">
            <h3 className="text-2xl font-semibold mb-6 text-[#1A1C1E]">
              <span className="text-[#FFD600]">//</span> Mission Statement
            </h3>
            <p className="text-3xl font-medium text-[#1A1C1E] leading-tight mb-8">
              Transforming underserved campuses into
              <span className="text-[#FFD600]"> verifiable carbon generators </span>
              through prepaid power infrastructure backed by real infrastructure and tracked on-chain.
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};