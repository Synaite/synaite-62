import { GradientButton } from "./ui/gradient-button";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How to Choose the Right Dedicated Server for Your Business",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
      excerpt: "Learn about the key factors to consider when selecting a dedicated server for your specific business needs.",
      category: "Guides"
    },
    {
      title: "5 Ways to Optimize Your Server for Maximum Performance",
      date: "April 10, 2025",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
      excerpt: "Discover expert techniques to fine-tune your dedicated server and achieve peak performance.",
      category: "Tips & Tricks"
    },
    {
      title: "The Future of Dedicated Hosting: Trends to Watch in 2025",
      date: "April 5, 2025",
      image: "https://images.unsplash.com/photo-1560732488-7b5f5b8c8ba6?auto=format&fit=crop&q=80&w=600",
      excerpt: "Stay ahead of the curve with our analysis of emerging technologies and trends in dedicated server hosting.",
      category: "Industry News"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#F6FBFF] via-[#EEF5FF] to-[#D6E8FF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">LATEST FROM OUR BLOG</h2>
            <p className="text-coolGray max-w-2xl text-lg">
              Expert insights, guides, and news about dedicated servers and web hosting.
            </p>
          </div>
          <a href="#all-articles" className="text-violet hover:text-indigo mt-4 md:mt-0 inline-flex items-center">
            View all articles
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-darkCard rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-violet/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-coolGray text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-coolGray mb-4">{post.excerpt}</p>
                <GradientButton variant="ghost" className="text-violet hover:text-white">
                  Read more
                </GradientButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
