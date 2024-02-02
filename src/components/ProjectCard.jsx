import { FaGithub, FaLink } from "react-icons/fa";
const ProjectCard = ({
  title,
  description,
  image,
  github,
  live,
  technologies,
}) => {
  return (
    <div className="mb-8">
      <div className="items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg md:h-auto md:w-90 md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <a
            href={live ? live : github}
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white underline">
              {title}
            </h5>
          </a>

          <p className="mb-3 font-normal overflow-hidden overflow-ellipsis">
            {description}
          </p>
          <div className="flex flex-wrap mb-2">
            {technologies ? (
              // eslint-disable-next-line react/prop-types
              technologies?.map((tech, index) => (
                <div key={index}>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tech}
                  </span>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="flex">
            {github ? (
              <a
                href={github}
                className="mr-4"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub size={20} />
              </a>
            ) : (
              <></>
            )}
            {live ? (
              <a href={live} target="_blank" rel="noreferrer noopener">
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
