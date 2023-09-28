export default function Projects() {
  const projects = ['Project 1', 'Project 2', 'Project 3'];
  return (
    <>
      <section
        id="projects"
        name="projects"
        className="section-root grid grid-cols-1 gap-6 bg-darkblue laptop:grid-cols-3 laptop:gap-9 desktop:grid-cols-3 desktop:gap-10"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="h-[50%] flex items-center justify-center bg-beige border-solid border-[1px] border-lightbeige rounded-[36px] hover:bg-orange hover:border-orange cursor-pointer text-white"
          >
            {project}
          </div>
        ))}
      </section>
    </>
  );
}
