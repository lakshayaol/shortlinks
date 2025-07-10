import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-white text-emerald-900 min-h-screen flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 mb-6">About ShortLinks</h1>
        <p className="text-base sm:text-lg mb-4">
          ShortLinks is a simple, fast, and user-friendly URL shortener built to meet your daily digital sharing needs.
        </p>
        <p className="text-base sm:text-lg mb-4">
          Shortlinks is designed to make sharing links easier and more efficient. With just a few clicks, you can transform long, unwieldy URLs into concise, memorable links that are perfect for sharing on social media, emails, or anywhere else you need them.
        </p>
        <p className="text-base sm:text-lg mb-4">
          Be it sharing that resume link with a potential employer, last night revision notes with a friend, or just tidying up your social media posts, ShortLinks is here to help you streamline your online sharing experience.
        </p>
        <p className="text-base sm:text-lg mb-4">
          Whether you're a casual user or a professional, ShortLinks helps you quickly convert long URLs into neat, shareable links—no login, no subscriptions, just instant results.
        </p>
        <p className="text-base sm:text-lg mb-8">
          This platform was developed by <span className="font-bold text-emerald-800">Lakshay Aol</span>, a final year student at <span className="font-bold text-emerald-800">Netaji Subhas University of Technology</span>. As a full-stack developer, I am passionate about creating efficient, scalable web solutions and delivering seamless user experiences while providing solutions to real world problems, as I tried to provide in this project.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Link href="https://www.linkedin.com/in/lakshay-aol/" target="_blank">
            <button className="bg-emerald-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition cursor-pointer">
              LinkedIn
            </button>
          </Link>
          <Link href="https://github.com/lakshayaol" target="_blank">
            <button className="bg-emerald-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition cursor-pointer">
              GitHub
            </button>
          </Link>
        </div>

        <Image
          src="/Happy developer.jpg"
          alt="Illustration of working professional"
          width={800}
          height={400}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </main>
  );
}
