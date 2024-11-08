"use client";

import React, { useEffect, useState } from "react";
import DesignResource from "@/service/designResources.services.js";

const designResource = new DesignResource();

export const TagsFilterBar = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchCategories = await designResource.getCategories();
        const storedCategories = JSON.parse(
          localStorage.getItem("categories") || "[]"
        );
        if (
          JSON.stringify(storedCategories) !== JSON.stringify(fetchCategories)
        ) {
          localStorage.setItem("categories", JSON.stringify(fetchCategories));
          setCategories(fetchCategories);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    const storedCategories = JSON.parse(localStorage.getItem("categories"));
    if (storedCategories) {
      setCategories(storedCategories);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{ animationDelay: "1s" }}
      className="flex gap-2 justify-center overflow-auto scrollbar-hidden opacity-0 transform transition-all animate-fade"
    >
      {categories.length > 0 ? (
        categories.map((category) => (
          <button
            className={` hover:bg-zinc-200 cursor-pointer inline-flex items-center gap-2 no-underline  hover:text-black text-xs font-medium leading-[105%] tracking-[-0.00563rem] transition-all duration-[0.2s] ease-in-out px-3 py-2 rounded-[6.1875rem] ${
              selectedCategoryId === category.id
                ? "text-black bg-zinc-200"
                : "text-zinc-600 bg-[#f7f6f6]"
            }`}
            key={category.id}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            {category.tag_name}
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
