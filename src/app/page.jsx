import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#161513] w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <img
            className="img-profile"
            src={"profile.png"}
            alt="Yousef's profile"
          />
          <div className="desc-profile">
            <h1 className="mx-auto"><span className="bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent">I'm Yousef Hatem,</span> frontend developer based in Egypt.</h1>
            <p className="text-center mt-4 text-gray-300 leading-relaxed">
              Passionate about crafting clean, responsive web experiences with React, Next.js, and modern CSS.
              Skilled in JavaScript, TypeScript, and C++ (OOP & DSA). Dedicated to writing efficient code
              and continuously expanding my expertise in web development.
            </p>
            <a target="_blank" href="https://drive.google.com/file/d/1n9t7vyWNoz3Xw4gSz2zgon_XdRIqCMSo/view?usp=sharing" ><button className="cursor-pointer ms-100 mt-3.5">My Resume</button></a>
          </div>
        </div>
      </div>
    </>
  );
}
