import React from "react";

const Hero = () => {
  return (
    <div className="py-10 sm:py-20 mx-auto w-10/12 sm:w-1/2 flex flex-col justify-center items-center">
      <p className="bg-[#f7f6f6] inline-flex items-center gap-2 no-underline text-[#221d1d] text-xs font-medium leading-[105%] tracking-[-0.00563rem] transition-all duration-[0.1s] ease-[ease] px-3 py-2 rounded-[6.1875rem]">
        Redefine Your Design Exploration 🎉
      </p>
      <p className="text-center font-display [font-kerning:none] mt-8 text-[3.2rem] sm:text-[4rem] font-bold leading-[98%] tracking-[-1.5px]  lg:font-bold lg:leading-[96%] lg:tracking-[-2.6px] duration-700 animate-fade-up fade-in slide-in-from-top-6 fill-mode-both">
        Elevate Your Designs <br></br>with Our Curated Collection
      </p>
      <p className="pt-2 mx-auto font-medium text-[#6A6A6A] mt-5 max-w-[460px] text-center text-xl text-secondary lg:text-[18px] lg:leading-[140%] lg:tracking-[-0.3px] delay-300 duration-700 animate-in fade-in slide-in-from-top-6 fill-mode-both">
        Unlock a world of design possibilities with our curated collection of
        resources, tools, and inspiration.
      </p>
    </div>
  );
};

export default Hero;
