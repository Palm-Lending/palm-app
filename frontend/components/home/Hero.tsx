import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-image-mockups bg-no-repeat bg-center left-16 ml-20 -top-16 md:-top-16 bg-custom-mobile-mockup-size"></div>
      <div className="container h-screen relative z-20">
        <div className="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div className="h-1/2 flex flex-col justify-center items-center lg:items-start lg:text-left">
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl text-primary-dark-blue pb-5">
              Palm Protocol
            </h1>
            {/* Description */}
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5 mb-7">
              Comprehensive lending and borrowing platform
              Unlock the future of finance with our DeFi lending platform on Zeniq.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
