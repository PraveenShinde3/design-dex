"use client";
import { useState, useEffect } from "react";
import { TagsFilterBar } from "./TagsFilterBar";
import ResourcesCardHolder from "./ResourcesCardHolder";
import DesignResource from "@/service/designResources.services.js";

const designResource = new DesignResource();

const ResourcesSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [categoryCount, setCategoryCount] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchCategories = await designResource.getCategories();
        const fetchResources = await designResource.getAllResources();

        const storedCategories = JSON.parse(
          localStorage.getItem("categories") || "[]"
        );
        const storedResources = JSON.parse(
          localStorage.getItem("resources") || "[]"
        );

        if (
          JSON.stringify(storedCategories) !== JSON.stringify(fetchCategories)
        ) {
          localStorage.setItem("categories", JSON.stringify(fetchCategories));
          setCategories(fetchCategories);
        }
        if (
          JSON.stringify(storedResources) !== JSON.stringify(fetchResources)
        ) {
          localStorage.setItem("resources", JSON.stringify(fetchResources));
          setResources(fetchResources);
          setFilteredResources(fetchResources);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Load from localStorage initially
    const storedCategories = JSON.parse(localStorage.getItem("categories"));
    if (storedCategories) {
      setCategories(storedCategories);
    }
    const storedResources = JSON.parse(localStorage.getItem("resources"));
    if (storedResources) {
      setResources(storedResources);
      setFilteredResources(storedResources);
    }

    fetchData();
  }, []); // Fetch data only once on component mount

  useEffect(() => {
    if (categories.length > 0 && resources.length > 0) {
      const initialCount = categories.map((category) => ({
        category_id: category.id,
        category_name: category.tag_name,
        count: 0,
      }));

      // Calculate individual counts per category
      const updatedCount = initialCount.map((category) => {
        const count = resources.filter(
          (item) => item.category_id.id === category.category_id
        ).length;
        if (category.category_name === "All") {
          return { ...category, count: resources.length };
        }
        return { ...category, count };
      });
      console.log(updatedCount);

      setCategoryCount(updatedCount);
    }
  }, [categories, resources]); // Run this effect only when `categories` or `resources` change

  useEffect(() => {
    if (selectedCategoryId === 1) {
      setFilteredResources(resources); // Show all tags if "All" is selected
    } else {
      const filtered = resources.filter(
        (resource) => resource.category_id.id === selectedCategoryId
      );
      console.log(filtered);
      setFilteredResources(filtered);
    }
  }, [selectedCategoryId, resources]);

  return (
    <div>
      <TagsFilterBar
        categories={categoryCount}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <ResourcesCardHolder resources={filteredResources} />
    </div>
  );
};

export default ResourcesSection;
