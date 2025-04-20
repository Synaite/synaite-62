
const PartnersSection = () => {
  const partners = [
    {
      name: "Intel",
      logo: "https://i.imgur.com/oY4B1Ha.png"
    },
    {
      name: "AMD",
      logo: "https://i.imgur.com/QigV03k.png"
    },
    {
      name: "Cisco",
      logo: "https://i.imgur.com/8YnIkGX.png"
    },
    {
      name: "Nvidia",
      logo: "https://i.imgur.com/2FSJNDQ.png"
    },
    {
      name: "Microsoft",
      logo: "https://i.imgur.com/BjgpvJL.png"
    },
    {
      name: "Dell",
      logo: "https://i.imgur.com/O4wyW5O.png"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-darkCard">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">OUR TECHNOLOGY PARTNERS</h2>
          <p className="text-coolGray max-w-2xl mx-auto">
            We partner with industry leaders to provide the best technology for our servers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center p-4 bg-dark/50 rounded-lg hover:bg-dark/90 transition-colors">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
