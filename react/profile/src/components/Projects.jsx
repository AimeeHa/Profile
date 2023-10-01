export default function Projects() {
  const projects = [
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4',
    'Project 5',
    'Project 6',
  ];
  return (
    <>
      <section
        id="projects"
        name="projects"
        className="section-root overflow-x-scroll bg-darkblue" //laptop:grid-cols-3 laptop:gap-9 desktop:grid-cols-3 desktop:gap-10
      >
        <ul
          name="projects-list"
          className="min-w-min h-full section-root bg-darkblue px-0 gap-[24px] laptop:gap-[36px] desktop:gap-[48px] "
        >
          {projects.map((project, i) => (
            <li
              key={i}
              className="h-[500px] w-[320px] flex items-center justify-center bg-white border-solid border-[1px] border-white rounded-[16px] hover:bg-orange hover:border-orange hover:translate-y-[-2px] hover:shadow-[0px_1px_12px_-2px_rgba(255,255,255,.8)] cursor-pointer text-white"
            >
              {project}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
