import projects from '../statics/project-list';
import styles from '../statics/styles';

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        name="projects"
        className="block h-max desktop:h-[calc(100vh-120px)] overflow-x-scroll bg-darkblue
        w-full p-[24px_24px_36px] tablet:p-[36px_36px_48px] laptop:p-[36px_36px_48px]
        desktop:p-[48px_48px_60px] "
      >
        <h1
          className="section-title w-[calc(100vw-48px)] laptop:w-[calc(100vw-72px)]
        desktop:w-[calc(100vw-96px)] text-white bg-darkblue after:top-[36px] mb-[24px]
        tablet:mb-[36px] laptop:mb-[36px] desktop:mb-[96px] p-0"
        >
          PROJECTS
        </h1>
        <ul
          name="projects-list"
          className="min-w-min bg-darkblue gap-[24px] laptop:gap-[36px]
          desktop:gap-[48px] p-0 relative flex justify-center items-center tablet:gap-[36px]"
        >
          {projects.map((project, i) => (
            <li
              key={i}
              className="group relative h-[500px] w-[320px] tablet:w-[420px] tablet:h-[560px]
              laptop:w-[440px] laptop:h-[580px] desktop:w-[480px] desktop:h-[620px]
              flex flex-col items-center justify-between pt-[8px] hover:pt-0 bg-white rounded-[8px]
              transition ease-in-out duration-300 cursor-pointer hover:bg-[rgba(250,229,223,.2)]
              hover:scale-[1.02] hover:shadow-[0px_1px_12px_-1px_rgba(255,255,255,.2)]"
            >
              <img
                src={project.img}
                alt={project.name}
                className={`${styles.groupTransition} group-hover:opacity-5 text-blue
                w-full h-[320px] tablet:h-[420px] laptop:h-[440px] desktop:h-[480px]
                rounded-[8px]`}
              />
              <article
                className={`${styles.groupTransition} group-hover:opacity-0
                w-full flex flex-col justify-center items-center gap-[8px] flex-grow`}
              >
                <h2 className="font-[600] text-[18px] text-orange drop-shadow-[3px_3px_3px_#f5cac2]">
                  {project.name}
                </h2>
                <p className="font-[500] text-[14px] text-lightblue text-center">
                  {project.summary}
                </p>
              </article>

              {/* show full details when hover */}
              <div
                className={`absolute top-0 left-0 opacity-0 text-primary
                group-hover:opacity-100 ${styles.groupTransition}
                flex flex-col justify-center items-center h-full w-full p-[24px] gap-[24px]`}
              >
                <h2 className="font-[600] text-[18px]">{project.name}</h2>
                <p>{project.description}</p>
                <p>
                  Tech Stacks:{' '}
                  {project.tech.map((item, i) => {
                    return <span key={i}>{item} </span>;
                  })}
                </p>
                <a
                  href={project.link}
                  className={`hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,.45)] ${styles.orangeBtn}`}
                >
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
