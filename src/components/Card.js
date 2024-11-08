import Link from "next/link";
import React from "react";
import { TiArrowUp } from "react-icons/ti";

const Card = ({ resource }) => {
  return (
    <Link href={resource.link} target="_blank">
      <div className="hover:scale-[1.02] transition-all ease-in-out duration-300">
        <div className="rounded-lg bg-[#f7f6f6] h-fit pl-4 pt-4">
          <img
            className="object-cover w-full h-full rounded-tl-md"
            src={resource.cover_img}
            alt={resource.title}
          />
        </div>
        <div className="py-2 flex justify-between items-center ">
          <div className="flex gap-2 items-center ">
            <img
              src={resource.logo_img}
              alt={resource.title}
              className="w-[20px] h-auto max-h-[20px]"
            />
            <p className="text-xs font-medium">{resource.name}</p>
          </div>
          <div>
            <TiArrowUp className=" rotate-45" size="1.2rem" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
