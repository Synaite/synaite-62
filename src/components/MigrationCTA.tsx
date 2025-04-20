
import { GradientButton } from "./ui/gradient-button";

const MigrationCTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-violet/20 to-indigo/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ALREADY HAVE A WEBSITE & DEDICATED SERVER?
        </h2>
        <p className="text-lg text-coolGray mb-8 max-w-3xl mx-auto">
          We'll handle the entire migration process for you, ensuring zero downtime 
          and a seamless transition to our high-performance infrastructure.
        </p>
        <GradientButton size="lg">
          Let's migrate it for you. For free!
        </GradientButton>
      </div>
    </section>
  );
};

export default MigrationCTA;
