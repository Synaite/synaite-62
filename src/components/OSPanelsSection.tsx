
const OSPanelsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OPERATING SYSTEMS & PANELS</h2>
          <p className="text-coolGray max-w-2xl mx-auto text-lg">
            Choose from a wide variety of operating systems and control panels to suit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Control Panels Card */}
          <div className="bg-darkCard rounded-xl overflow-hidden shadow-lg border border-violet/20">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Control Panels</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/kLTHzBu.png" alt="cPanel" className="h-12 mx-auto mb-2" />
                  <p className="text-white">cPanel</p>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/LVkFjQM.png" alt="Plesk" className="h-12 mx-auto mb-2" />
                  <p className="text-white">Plesk</p>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/YxHMSx7.png" alt="DirectAdmin" className="h-12 mx-auto mb-2" />
                  <p className="text-white">DirectAdmin</p>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/vfQCO1q.png" alt="Webmin" className="h-12 mx-auto mb-2" />
                  <p className="text-white">Webmin</p>
                </div>
              </div>

              <p className="text-coolGray">
                All control panels are fully optimized for our servers and come with easy installation options.
                Our team can assist with setup and configuration as needed.
              </p>
            </div>
          </div>

          {/* Operating Systems Card */}
          <div className="bg-darkCard rounded-xl overflow-hidden shadow-lg border border-violet/20">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Operating Systems</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/7g8JsSu.png" alt="Ubuntu" className="h-12 mx-auto mb-2" />
                  <p className="text-white">Ubuntu</p>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/wSISQGR.png" alt="CentOS" className="h-12 mx-auto mb-2" />
                  <p className="text-white">CentOS</p>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/tLwZHdw.png" alt="Windows Server" className="h-12 mx-auto mb-2" />
                  <p className="text-white">Windows</p>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/Vl0KNXp.png" alt="Debian" className="h-12 mx-auto mb-2" />
                  <p className="text-white">Debian</p>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/GDQOlcD.png" alt="Fedora" className="h-12 mx-auto mb-2" />
                  <p className="text-white">Fedora</p>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg text-center">
                  <img src="https://i.imgur.com/mAMJjP0.png" alt="Alpine" className="h-12 mx-auto mb-2" />
                  <p className="text-white">Alpine</p>
                </div>
              </div>

              <p className="text-coolGray">
                We support a wide range of operating systems including the latest versions of Linux distributions 
                and Windows Server. Custom OS installation is also available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OSPanelsSection;
