import React from "react";

export default function Contact() {
  return (
    <main className="bg-emerald-50 text-emerald-800 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-10 max-w-xl w-full">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-emerald-900 mb-4">Contact Us</h1>
        <p className="mb-6 text-base sm:text-lg">
          Have feedback, questions, or ideas? Or you just want to explore my other projects. Feel free to check out my profiles below or contact me via email. I would love to hear from you!
        </p>

        <div className="space-y-4">
          <div>
            <p className="font-extrabold">Email:</p>
            <a href="mailto:lakshayaol@gmail.com" className="text-emerald-800 hover:underline break-all">
              lakshayaol@gmail.com
            </a>
          </div>

          <div>
            <p className="font-extrabold">LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/lakshay-aol/"
              target="_blank"
              className="text-emerald-800 hover:underline break-all"
            >
              linkedin.com/in/lakshay-aol
            </a>
          </div>

          <div>
            <p className="font-extrabold">GitHub:</p>
            <a
              href="https://github.com/lakshayaol"
              target="_blank"
              className="text-emerald-800 hover:underline break-all"
            >
              github.com/lakshayaol
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
