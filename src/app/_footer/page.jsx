import Link from "next/link";

export default function Footer() {
    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/YousefHatem4",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/yousef-hatem-16530024b/",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        },
        {
            name: "Email",
            href: "mailto:yousef.hatem.developer@gmail.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
            )
        }
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" }
    ];

    const services = [
        "Frontend Development",
        "React Applications",
        "Responsive Design",
        "UI/UX Implementation"
    ];

    return (
        <footer className="bg-[#1a1917] border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand & Description */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent mb-4">
                            Yousef Hatem
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4 max-w-md">
                            Transforming ideas into exceptional digital experiences. Specializing in modern frontend development with React, Next.js, and cutting-edge web technologies.
                        </p>
                        <div className="flex items-center gap-4 text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                            </svg>
                            <span className="text-sm">El Sheikh Zayed, Egypt</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#00F5A0] transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service} className="text-gray-400 text-sm flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#00D9F5]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social & Contact Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 py-6 border-t border-gray-800">
                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
                        <a
                            href="mailto:yousef.hatem.developer@gmail.com"
                            className="hover:text-[#00F5A0] transition-colors duration-300 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            yousef.hatem.developer@gmail.com
                        </a>
                        <a
                            href="tel:+201140821819"
                            className="hover:text-[#00D9F5] transition-colors duration-300 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            +20 114 082 1819
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gradient-to-r hover:from-[#00F5A0] hover:to-[#00D9F5] text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-6 border-t border-gray-800 text-center">
                    <p className="text-gray-500 text-sm mb-2">
                        © {new Date().getFullYear()} Yousef Hatem. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
                        Crafted with
                        <span className="text-[#00D9F5] animate-pulse">♥</span>
                        using Next.js & Tailwind CSS
                        <span className="text-[#00F5A0] ml-1">⚡</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}