import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import useContentful from "../hooks/useContentful";

export default function Project() {
  const { getProjects } = useContentful();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProjects();
        setProjects(response?.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // console.log(projects);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8 font-medium">
      <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
      <div className="grid grid-cols-1">
        {projects.map((project) => (
          <div key={project?.sys?.id} className="max-w-6xl">
            <ProjectCard
              title={project?.fields?.name}
              description={project?.fields?.description}
              image={project?.fields?.image?.fields?.file?.url}
              github={project?.fields?.gitHub}
              live={project?.fields?.liveLink}
              technologies={project?.fields.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
