export default function Projects() {
  const projects = ['Project 1', 'Project 2', 'Project 3'];
  return (
    <>
      <section
        id="projects"
        name="projects"
        className="section-root grid grid-cols-3 gap-6 bg-green-50"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="h-[120px] flex items-center justify-center border-solid border-[1px] border-[#9F5C59]"
          >
            {project}
          </div>
        ))}
      </section>
    </>
  );
}
