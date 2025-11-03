import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[#161513] font-fam pt-30 w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-8 sm:pb-10 ">
        <div className="flex items-center justify-center flex-col text-center">
          {/* Enhanced Profile Image with Animation */}
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] rounded-full opacity-20 blur-lg animate-pulse-slow"></div>
            <img
              className="img-profile relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300"
              src={"profile.jpg"}
              alt="Yousef Hatem - Frontend Developer"
            />
          </div>

          {/* Enhanced Hero Section */}
          <div className="desc-profile w-full sm:w-[90%] md:w-[80%] lg:w-[60%]">
            <h1 className="mx-auto text-[34px] sm:text-[42px] md:text-[50px] lg:text-[60px] leading-tight font-bold">
              <span className="bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent animate-gradient">
                Yousef Hatem
              </span>
              <br className="sm:hidden" />
              <span className="text-white"> Frontend Developer</span>
            </h1>

            <div className="mt-2 mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 text-gray-300 text-sm border border-gray-700">
                🎯 Available for new projects
              </span>
            </div>

            {/* Client-Focused Description */}
            <p className="mt-6 text-gray-300 leading-relaxed text-lg sm:text-xl px-2 max-w-3xl mx-auto">
              I transform ideas into <span className="text-[#00F5A0] font-semibold">high-performance web applications</span> that deliver exceptional user experiences. Specializing in modern React ecosystems, I build <span className="text-[#00D9F5] font-semibold">scalable, responsive solutions</span> that drive business growth and engage users across all devices.
            </p>

            {/* Key Value Propositions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-[#00F5A0] transition-colors">
                <div className="text-[#00F5A0] text-lg mb-2">⚡</div>
                <h3 className="text-white font-semibold">Fast & Responsive</h3>
                <p className="text-gray-400 text-sm mt-1">Lightning-fast applications optimized for all devices</p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-[#00D9F5] transition-colors">
                <div className="text-[#00D9F5] text-lg mb-2">🎨</div>
                <h3 className="text-white font-semibold">Modern UI/UX</h3>
                <p className="text-gray-400 text-sm mt-1">Clean, intuitive designs that users love</p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-[#0083F5] transition-colors">
                <div className="text-[#0083F5] text-lg mb-2">🚀</div>
                <h3 className="text-white font-semibold">Production Ready</h3>
                <p className="text-gray-400 text-sm mt-1">Robust code with best practices & SEO optimization</p>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/19K-Pkzq-3Aw3S2AtJ8_vzsBy0SF_CgFn/view"
                className="group"
              >
                <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-gray-900 font-bold rounded-lg hover:from-[#00D9F5] hover:to-[#0083F5] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  📄 View My Resume
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </a>

              <Link href={"/contact"} className="group">
               
                  <button className="cursor-pointer px-8 py-4 border-2 border-[#00F5A0] text-[#00F5A0] font-bold rounded-lg hover:bg-[#00F5A0] hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    💬 Let's Talk
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
             
           </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex justify-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-gray-400 text-sm">Internships</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}