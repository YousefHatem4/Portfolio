import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#161513] flex flex-col justify-center items-center text-white font-fam px-4 text-center">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] text-transparent bg-clip-text mb-4">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-400 mb-6 max-w-md">
                Oops! The page you're looking for doesn't exist or might have been moved.
            </p>
            <Link
                href="/"
                className="px-6 py-3 rounded-xl font-semibold text-[#161513] bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] hover:opacity-90 transition-all duration-300 shadow-lg"
            >
                Go Back Home
            </Link>
        </div>
    );
}
