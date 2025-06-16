
export default function Home() {
  return (
    <>
      <div className="bg-[#161513] hh  font-fam pt-8 pb-4 w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-8 sm:pb-0 ">
        <div className="flex items-center justify-center flex-col text-center">
          <img
            className="img-profile"
            src={"profile.png"}
            alt="Yousef's profile"
          />
          <div className="desc-profile w-full sm:w-[90%] md:w-[80%] lg:w-[60%]">
            <h1 className="mx-auto text-[34px] sm:text-[42px] md:text-[50px] lg:text-[60px] leading-tight">
              <span className="bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent">
                I'm Yousef Hatem,
              </span>{" "}
              frontend developer based in Egypt.
            </h1>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg px-2">
              Passionate about crafting clean, responsive web experiences with React, Next.js, and modern CSS.
              Skilled in JavaScript, TypeScript, and C++ (OOP & DSA). Dedicated to writing efficient code
              and continuously expanding my expertise in web development.
            </p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1n9t7vyWNoz3Xw4gSz2zgon_XdRIqCMSo/view?usp=sharing"
            >
              <button className="cursor-pointer mt-4">
                
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>

    </>
  );
}
