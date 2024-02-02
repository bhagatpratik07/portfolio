import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ title, description, image, github, live }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-60 max-w-14 md:h-auto md:w-90 md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal ">{description}</p>
          <div className="flex">
            {github ? (
              <a href={github} className="">
                <FaGithub size={20} />
              </a>
            ) : (
              <></>
            )}
            {live ? (
              <a href={live} className="ml-4">
                <FaLink size={20} />
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
