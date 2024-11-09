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
  }, []);

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
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <ResourcesCardHolder resources={filteredResources} />
    </div>
  );
};

export default ResourcesSection;
