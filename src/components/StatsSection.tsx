
import { Globe, Server, Users } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Locations Stat */}
          <div className="bg-darkCard rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-violet/10 rounded-lg">
                <Globe className="h-8 w-8 text-violet" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="text-coolGray">Global Locations</p>
              </div>
            </div>
            <p className="text-coolGray">
              Our servers are distributed across the globe for optimal performance.
            </p>
          </div>

          {/* Data Centers Stat */}
          <div className="bg-darkCard rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-violet/10 rounded-lg">
                <Server className="h-8 w-8 text-violet" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">80+</h3>
                <p className="text-coolGray">Data Centers</p>
              </div>
            </div>
            <p className="text-coolGray">
              State-of-the-art facilities with redundant systems for reliability.
            </p>
          </div>

          {/* Users Stat */}
          <div className="bg-darkCard rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-violet/10 rounded-lg">
                <Users className="h-8 w-8 text-violet" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">25K+</h3>
                <p className="text-coolGray">Active Users</p>
              </div>
            </div>
            <p className="text-coolGray">
              Thousands of satisfied customers trust our hosting solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
