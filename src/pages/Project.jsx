import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <div className="max-w-3xl mx-auto p-8 font-medium">
      <h2 className="text-2xl font-semibold mb-4 text-white ">Projects</h2>
      <div className="grid grid-cols-2">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
