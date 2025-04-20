const PartnersSection = () => {
  const partners = [{
    name: "Intel",
    logo: "https://i.imgur.com/oY4B1Ha.png"
  }, {
    name: "AMD",
    logo: "https://i.imgur.com/QigV03k.png"
  }, {
    name: "Cisco",
    logo: "https://i.imgur.com/8YnIkGX.png"
  }, {
    name: "Nvidia",
    logo: "https://i.imgur.com/2FSJNDQ.png"
  }, {
    name: "Microsoft",
    logo: "https://i.imgur.com/BjgpvJL.png"
  }, {
    name: "Dell",
    logo: "https://i.imgur.com/O4wyW5O.png"
  }];
  
  return <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#050A1A] to-[#101C3A]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="w-32 h-16 flex items-center justify-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  </section>;
};
export default PartnersSection;
