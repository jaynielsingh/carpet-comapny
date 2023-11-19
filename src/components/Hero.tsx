import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg-4.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl text-white">
              E & B Carpets
            </h1>
            <p className="mt-6 text-2xl font-serif leading-8 text-white">
              Let E & B repair it, before, you replace it!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="tel:5104158251"
                className="rounded-md bg-amber-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl hover:bg-amber-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Call Us
              </a>
              <a
                href="/service"
                className="text-sm font-semibold leading-6 text-white"
              >
                Service <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Additional elements with absolute positioning */}
    </div>
  );
};

export default Hero;
