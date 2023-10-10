import projects from '../statics/project-list';

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        name="projects"
        className="block w-full px-[24px] py-[36px] laptop:px-[36px] laptop:py-[48px]
        desktop:px-[48px] desktop:py-[54px] overflow-x-scroll bg-darkblue"
      >
        <h1
          className="section-title w-[calc(100vw-48px)] laptop:w-[calc(100vw-72px)]
        desktop:w-[calc(100vw-96px)] text-white bg-darkblue after:top-[36px] mb-[24px]
        tablet:mb-[36px] laptop:mb-[36px] desktop:mb-[48px] p-0"
        >
          PROJECTS
        </h1>
        <ul
          name="projects-list"
          className="min-w-min h-full section-root bg-darkblue p-0 gap-[24px] laptop:gap-[36px]
          desktop:gap-[48px] "
        >
          {projects.map((project, i) => (
            <li
              key={i}
              className="h-[500px] w-[320px] flex flex-col items-center justify-evenly bg-white
              text-blue hover:text-white border-solid border-[1px] border-white rounded-[8px]
              hover:bg-orange hover:border-orange hover:translate-y-[-2px]
              hover:shadow-[0px_1px_12px_-1px_rgba(255,255,255,.6)]
              transition ease-in-out duration-300 cursor-pointer"
            >
              <img src={project.image} alt={project.name} />
              <h2>{project.name}</h2>
              {/* TODO: show full details only on click */}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
