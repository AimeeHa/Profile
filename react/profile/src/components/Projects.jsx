import projects from '../statics/project-list';
import styles from '../statics/styles';

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        name="projects"
        className="block h-max desktop:h-[calc(100vh-120px)] overflow-x-scroll bg-darkblue
        w-full p-[24px_24px_36px] tablet:p-[36px_36px_48px] laptop:p-[42px_42px_54px]
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
          className="min-w-min bg-darkblue gap-[24px] laptop:gap-[42px]
          desktop:gap-[48px] p-0 relative flex justify-center items-center tablet:gap-[36px]"
        >
          {projects.map((project, i) => (
            <li
              key={i}
              className="group relative h-[500px] w-[320px] tablet:w-[420px] tablet:h-[560px]
              laptop:w-[440px] laptop:h-[580px] desktop:w-[480px] desktop:h-[620px]
              flex flex-col items-center justify-between pt-[8px] hover:pt-0 bg-white rounded-[8px]
              transition ease-in-out duration-300 cursor-pointer hover:bg-[rgba(230,231,240,0.35)]
              hover:scale-[1.02] hover:shadow-[0px_1px_12px_-1px_rgba(255,255,255,.25)]
              hover:border-solid hover:border-[1px] hover:border-lightbeige hover:border-opacity-20"
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
                w-full flex flex-col justify-center items-center gap-[4px] flex-grow`}
              >
                <h2 className="font-[600] text-[18px] text-orange">
                  {project.name}
                </h2>
                <p className="font-[500] text-[14px] text-lightblue text-center">
                  {project.summary}
                </p>
              </article>

              {/* show full details when hover */}
              <article
                className={`absolute top-0 left-0 opacity-0 text-primary
                group-hover:opacity-100 ${styles.groupTransition}
                flex flex-col items-center h-full w-full px-[24px] py-[32px]`}
              >
                <h2 className="font-[800] text-[20px] text-[#ff9b8b] h-[52px]">
                  {project.name}
                </h2>

                <div
                  className="flex flex-col gap-[4px] flex-grow w-full mb-[12px]
                tablet:mb-0 laptop:mb-0 desktop:mb-0 overflow-auto"
                >
                  <h3
                    className="self-start font-[600] text-[15px] tablet:text-[16px]
                  laptop:text-[16px] desktop:text-[17px]"
                  >
                    Project Overview
                  </h3>
                  <ul className="text-[14px] desktop:text-[15px] flex flex-col gap-[4px] opacity-90">
                    {project.description.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ul>

                  <h3
                    className="mt-[20px] self-start font-[600] text-[15px] tablet:text-[16px]
                  laptop:text-[16px] desktop:text-[17px]"
                  >
                    Tech Stacks
                  </h3>
                  <p className="text-[14px] desktop:text-[15px] opacity-90">
                    {project.tech.map((item, i) => {
                      return (
                        <span key={i}>
                          {item}
                          {i < project.tech.length - 1 ? ', ' : '.'}
                        </span>
                      );
                    })}
                  </p>
                </div>

                <a
                  href={project.link}
                  className={`hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,.45)] ${styles.orangeBtn}`}
                >
                  View
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
