// ProjectCard.js

import { FaGithub, FaLink, FaReact } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-90 md:rounded-none md:rounded-s-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="flex">
            <a href="#" className="">
              <FaGithub size={20} />
            </a>
            <a href="#" className="ml-4">
              <FaLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
