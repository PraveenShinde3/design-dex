"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import DesignResource from "@/service/designResources.services";

const designResource = new DesignResource();

const ResourcesCardHolder = () => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchResources = await designResource.getAllResources();
        const storedResources = JSON.parse(
          localStorage.getItem("resources") || "[]"
        );
        if (
          JSON.stringify(storedResources) !== JSON.stringify(fetchResources)
        ) {
          localStorage.setItem("resources", JSON.stringify(fetchResources));
          setResources(fetchResources);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    const storedResources = JSON.parse(localStorage.getItem("resources"));
    if (storedResources) {
      setResources(storedResources);
    }
    fetchData();
  }, []);
  return (
    <div>
      {resources.length > 0 ? (
        <div className="px-[2rem] py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {resources.map((resource) => (
            <Card key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ResourcesCardHolder;
