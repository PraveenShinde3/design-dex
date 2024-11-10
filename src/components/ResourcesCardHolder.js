"use client";
import Card from "./Card";
import DesignResource from "@/service/designResources.services";

const designResource = new DesignResource();

const ResourcesCardHolder = ({ resources }) => {
  return (
    <div>
      {resources.length > 0 ? (
        <div className="sm:px-[2rem] py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 ">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              className="animate-fade opacity-0 transform transition-all duration-200 ease-in-out"
            >
              <Card resource={resource} />
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ResourcesCardHolder;
