
import { Globe, Server, Users } from "lucide-react";
const StatsSection = () => {
  return <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#101C3A] to-[#050A1A]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="inline-flex p-4 rounded-lg bg-[#007BFF]/10 mb-4">
            <Globe className="h-8 w-8 text-[#007BFF]" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">Global</h3>
          <p className="text-[#B0B5BF]">Worldwide infrastructure</p>
        </div>
        <div className="text-center">
          <div className="inline-flex p-4 rounded-lg bg-[#007BFF]/10 mb-4">
            <Server className="h-8 w-8 text-[#007BFF]" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
          <p className="text-[#B0B5BF]">Uptime guarantee</p>
        </div>
        <div className="text-center">
          <div className="inline-flex p-4 rounded-lg bg-[#007BFF]/10 mb-4">
            <Users className="h-8 w-8 text-[#007BFF]" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
          <p className="text-[#B0B5BF]">Customer support</p>
        </div>
      </div>
    </div>
  </section>;
};
export default StatsSection;
