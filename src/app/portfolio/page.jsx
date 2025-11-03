import React from 'react'
import { ExternalLink, Github, Zap, ShoppingCart, Car, Utensils, Cloud, Bookmark, Gamepad2, User, Quote, Layout, Code2, Calendar } from 'lucide-react'
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: "Tasty Bites – Food Ordering",
      description: "Team-collaborated food ordering web app with category filtering and dynamic cart functionality",
      link: "https://tasty-bites-project.vercel.app/login",
      image: "TastyBites.png",
      category: "E-Commerce",
      technologies: ["React", "Tailwind CSS", "Django API"],
      icon: <Utensils className="w-4 h-4" />,
      featured: true
    },
    {
      title: "E-Commerce",
      description: "Modern, fully responsive online shopping platform with product search/filtering and cart management",
      link: "https://e-commerce-project-9gwh.vercel.app/",
      image: "E-commerce.png",
      category: "E-Commerce",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      icon: <ShoppingCart className="w-4 h-4" />,
      featured: true
    },
    {
      title: "ShopSphere E-Commerce Platform",
      description: "Modern, fully responsive online shopping platform with product search/filtering and cart management",
      link: "https://shop-sphere-e-commerce-project-mvuc.vercel.app/",
      image: "Shopsphere.png",
      category: "E-Commerce",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      icon: <ShoppingCart className="w-4 h-4" />,
      featured: true
    },
    {
      title: "GearGrid – Car Listing",
      description: "Responsive car exploration platform with authentication, dynamic listings, and search functionality",
      link: "https://gear-grid-project.vercel.app/login",
      image: "GearGrid.png",
      category: "Web Application",
      technologies: ["React", "Tailwind CSS", "React Router", "Context API"],
      icon: <Car className="w-4 h-4" />,
      featured: true
    },
   
  
    {
      title: "TaskFlow Landing Page",
      description: "Fully responsive landing page for task management app with animations and modern UI/UX",
      link: "https://elevvo-internship-task-3.vercel.app/", // Add link
      image: "taskflow.png", // Add image
      category: "Landing Page",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      icon: <Calendar className="w-4 h-4" />,
      featured: false
    },
    {
      title: "TripleBite - Food Ordering System",
      description: "Responsive food ordering platform integrated with Django backend, mobile-first design",
      link: "https://phase-2-task-4-dev-wave.vercel.app/login", // Add link
      image: "food-system.png", // Add image
      category: "Full Stack",
      technologies: ["React", "Tailwind CSS", "Django"],
      icon: <Utensils className="w-4 h-4" />,
      featured: true
    },
    {
      title: "Weather App",
      description: "Sleek weather application with live API integration and real-time updates",
      link: "https://yousefhatem4.github.io/Weather_Project/",
      image: "weather.png",
      category: "Web App",
      technologies: ["HTML", "Bootstrap", "JavaScript", "API"],
      icon: <Cloud className="w-4 h-4" />,
      featured: false
    },
    {
      title: "Game Review Platform",
      description: "Responsive game review website demonstrating OOP principles and modular JavaScript",
      link: "https://yousefhatem4.github.io/Game_Review_Project/",
      image: "game.png",
      category: "Website",
      technologies: ["HTML", "Bootstrap", "JavaScript", "OOP"],
      icon: <Gamepad2 className="w-4 h-4" />,
      featured: false
    },
    {
      title: "Bookmark Manager",
      description: "Lightweight web app for managing bookmarks with CRUD operations and modern interface",
      link: "https://yousefhatem4.github.io/Book_Mark_Project/",
      image: "bookmark.png",
      category: "Web App",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      icon: <Bookmark className="w-4 h-4" />,
      featured: false
    },
    {
      title: "Login System",
      description: "Secure authentication system with responsive design and password masking",
      link: "https://yousefhatem4.github.io/Login_Project/",
      image: "login.png",
      category: "UI Component",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: <User className="w-4 h-4" />,
      featured: false
    },
    {
      title: "Quote Generator",
      description: "Interactive quote generator with dynamic content and responsive design",
      link: "https://yousefhatem4.github.io/Quote_Project/",
      image: "quote.png",
      category: "Web App",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: <Quote className="w-4 h-4" />,
      featured: false
    },
    {
      title: "Daniel's Insights",
      description: "Quickly developed responsive website focusing on modern styling and seamless user experience",
      link: "https://yousefhatem4.github.io/Daniels_Insights_Project/",
      image: "daniels.png",
      category: "Website",
      technologies: ["HTML", "CSS", "Bootstrap"],
      icon: <Layout className="w-4 h-4" />,
      featured: false
    },
    {
      title: "React First Project",
      description: "Modern web application with fully responsive design and elegant UI/UX",
      link: "https://react-project-orcin-nine.vercel.app/",
      image: "react.png",
      category: "Web Application",
      technologies: ["React", "SCSS", "JavaScript"],
      icon: <Zap className="w-4 h-4" />,
      featured: false
    },
    {
      title: "Grid Masterclass",
      description: "Showcase of advanced CSS Grid techniques with Bootstrap integration and responsive layouts",
      link: "https://yousefhatem4.github.io/Grid_MasterClass_Project/Index.html",
      image: "grid.png",
      category: "Website",
      technologies: ["HTML", "CSS", "Bootstrap"],
      icon: <Layout className="w-4 h-4" />,
      featured: false
    },
    {
      title: "DevFolio Portfolio",
      description: "Modern, fully responsive portfolio website with customizable sections for developers",
      link: "https://yousefhatem4.github.io/DevFolio_Project/",
      image: "devfolio.png",
      category: "Portfolio",
      technologies: ["HTML", "CSS", "Bootstrap"],
      icon: <Code2 className="w-4 h-4" />,
      featured: false
    },
    {
      title: "Mealify Website",
      description: "User-friendly meal planning website with clean layout and lightweight performance",
      link: "https://yousefhatem4.github.io/Mealify_Project/",
      image: "mealify.png",
      category: "Website",
      technologies: ["HTML", "CSS"],
      icon: <Utensils className="w-4 h-4" />,
      featured: false
    },
    {
      title: "Fokir Portfolio",
      description: "Minimalist website focusing on clean aesthetics and web development fundamentals",
      link: "https://yousefhatem4.github.io/Fokir_Project/#ab",
      image: "fokir.png",
      category: "Portfolio",
      technologies: ["HTML", "CSS"],
      icon: <Layout className="w-4 h-4" />,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className='bg-[#161513] font-fam w-full min-h-screen py-16 px-4 sm:px-8'>
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 mt-10 md:mt-5">
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
            My <span className="bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#0083f5] bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Showcasing innovative web solutions that deliver exceptional user experiences and drive business results
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#0083f5] mx-auto"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-[#1f1d1b] border border-[#2a2926] hover:border-[#00d9f5] transition-all duration-500 hover:transform hover:-translate-y-2">
                <a
                  target='_blank'
                  rel="noopener noreferrer"
                  href={project.link}
                  className="block"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#00f5a0]">{project.icon}</span>
                      <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d9f5] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#00f5a0] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Project <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">More Projects</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {otherProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-[#1f1d1b] border border-[#2a2926] hover:border-[#00f5a0] transition-all duration-300 hover:transform hover:-translate-y-1">
                <a
                  target='_blank'
                  rel="noopener noreferrer"
                  href={project.link}
                  className="block"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">{project.category}</span>
                      <span className="text-[#00f5a0]">{project.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00f5a0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#00f5a0] transition-colors" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-lg mb-6">
            Interested in working together on your next project?
          </p>
          <Link href={'/contact'}>
            <button className="px-8 py-3 bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-gray-900 font-bold rounded-lg hover:from-[#00d9f5] hover:to-[#0083f5] transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start a Project
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}