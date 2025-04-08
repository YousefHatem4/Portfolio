import React from 'react'

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce",
      link: "https://e-commerce-project-9gwh.vercel.app/",
      image: "E-commerce.png"
    },
    {
      title: "React Project",
      link: "https://react-project-orcin-nine.vercel.app/",
      image: "react.png"
    },
    {
      title: "Weather App",
      link: "https://yousefhatem4.github.io/Weather_Project/",
      image: "weather.png"
    },
    {
      title: "Game Review",
      link: "https://yousefhatem4.github.io/Game_Review_Project/",
      image: "game.png"
    },
    {
      title: "Login System",
      link: "https://yousefhatem4.github.io/Login_Project/",
      image: "login.png"
    },
    {
      title: "Bookmark App",
      link: "https://yousefhatem4.github.io/Book_Mark_Project/",
      image: "bookmark.png"
    },
    {
      title: "Quote Generator",
      link: "https://yousefhatem4.github.io/Quote_Project/",
      image: "quote.png"
    },
    {
      title: "Daniel's Insights",
      link: "https://yousefhatem4.github.io/Daniels_Insights_Project/",
      image: "daniels.png"
    },
    {
      title: "Grid Masterclass",
      link: "https://yousefhatem4.github.io/Grid_MasterClass_Project/Index.html",
      image: "grid.png"
    },
    {
      title: "DevFolio",
      link: "https://yousefhatem4.github.io/DevFolio_Project/",
      image: "devfolio.png"
    },
    {
      title: "Mealify",
      link: "https://yousefhatem4.github.io/Mealify_Project/",
      image: "mealify.png"
    },
    {
      title: "Fokir",
      link: "https://yousefhatem4.github.io/Fokir_Project/#ab",
      image: "fokir.png"
    }
  ];

  return (
    <section id="portfolio" className='bg-[#161513] font-fam w-full min-h-screen py-16 px-4 sm:px-8'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mt-10 md:mt-5">
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>My Latest Work</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#0083f5] mx-auto"></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 md:mb-0'>
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] transition-all duration-300 hover:z-10 hover:shadow-lg hover:shadow-[#00d9f5]/20">
              <a
                target='_blank'
                rel="noopener noreferrer"
                href={project.link}
                className="block h-full w-full"
              >
                <img
                  className="card-portfolio w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}