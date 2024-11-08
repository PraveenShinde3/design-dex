import React from "react";
const Hero = () => {
  return (
    <div className="py-10 sm:py-20 mx-auto w-10/12 lg:w-1/2 flex flex-col justify-center items-center">
      <p
        style={{ animationDelay: "0.7s" }}
        className="bg-[#f7f6f6] inline-flex items-center gap-2 no-underline text-[#221d1d] text-xs font-medium leading-[105%] tracking-[-0.00563rem] opacity-0 transform transition-all duration-[0.1s] ease-[ease] animate-fade-up px-3 py-2 rounded-[6.1875rem]"
      >
        Redefine Your Design Exploration 🎉
      </p>
      <p className="pb-2 text-center font-display [font-kerning:none] mt-8 text-[3.2rem] sm:text-[4rem] font-bold leading-[98%] tracking-[-1.5px] lg:font-bold lg:leading-[96%] lg:tracking-[-2.6px] duration-700 animate-fade-up fade-in slide-in-from-top-6 fill-mode-both">
        {`Elevate Your Designs`.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {word.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block opacity-0 animate-reveal-text"
                style={{
                  animationDelay: `${
                    (wordIndex * word.length + index) * 0.008
                  }s`,
                }}
              >
                {char === " " ? "\u00A0" : char} {/* Handle spaces */}
              </span>
            ))}
          </span>
        ))}
        <br />

        {`with Our Curated Collection`.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {word.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block opacity-0 animate-reveal-text"
                style={{
                  animationDelay: `${
                    (wordIndex * word.length + index + 10) * 0.006
                  }s`,
                }} // Delay for second line
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        ))}
      </p>

      <p
        style={{ animationDelay: "1s" }}
        className="pt-4 text-[18px] text-center mx-auto text-[#6A6A6A] max-w-[460px] font-medium  transition-all opacity-0 transform duration-[0.1s] ease-[ease] animate-fade-up"
      >
        Unlock a world of design possibilities with our curated collection of
        resources, tools, and inspiration.
      </p>
    </div>
  );
};

export default Hero;
