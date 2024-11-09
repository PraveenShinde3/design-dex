"use client";

import { useRef, useState, useEffect } from "react";
export const TagsFilterBar = ({
  categories,
  setSelectedCategoryId,
  selectedCategoryId,
}) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (textRef.current) {
        setIsOverflowing(
          textRef.current.scrollWidth > textRef.current.clientWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{ animationDelay: "1s" }}
      className={`sticky top-0 z-10 bg-white py-4 flex gap-2 overflow-auto scrollbar-hidden opacity-0 transform transition-all animate-fade ${
        isOverflowing ? "justify-start" : "justify-center"
      }`}
      ref={textRef}
    >
      {categories.length > 0 ? (
        categories.map((category) => (
          <button
            className={` hover:bg-zinc-200 whitespace-nowrap cursor-pointer inline-flex items-center gap-2 no-underline hover:text-black text-xs font-medium leading-[105%] tracking-[-0.00563rem] transition-all duration-[0.2s] ease-in-out px-3 py-2 rounded-[6.1875rem] ${
              selectedCategoryId === category.id
                ? "text-black bg-zinc-200"
                : "text-zinc-600 bg-[#f7f6f6]"
            }`}
            key={category.id}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            {category.tag_name} . 12
          </button>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <div className="animate-spin border-t-2 border-zinc-900 border-solid w-6 h-6 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

