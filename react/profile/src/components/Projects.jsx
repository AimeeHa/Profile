export default function Projects() {
  const projects = [
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4',
    'Project 5',
  ];
  return (
    <>
      <h1 className="section-title text-white bg-darkblue after:top-[68px] laptop:after:top-[84px] desktop:after:top-[84px]">
        PROJECTS
      </h1>
      <section
        id="projects"
        name="projects"
        className="block w-full px-[24px] py-[36px] laptop:px-[36px] laptop:py-[48px] desktop:px-[48px] desktop:py-[54px] overflow-x-scroll bg-darkblue"
      >
        <ul
          name="projects-list"
          className="min-w-min h-full section-root bg-darkblue p-0 gap-[24px] laptop:gap-[36px] desktop:gap-[48px] "
        >
          {projects.map((project, i) => (
            <li
              key={i}
              className="h-[500px] w-[320px] flex items-center justify-center bg-white border-solid border-[1px] border-white rounded-[8px] hover:bg-orange hover:border-orange hover:translate-y-[-2px] hover:shadow-[0px_1px_12px_-1px_rgba(255,255,255,.6)] transition ease-in-out duration-300 cursor-pointer text-white"
            >
              {project}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
