import styles, { wavingLetters } from '../statics/styles';

export default function About() {
  const skills = [
    'React',
    'Typescript',
    'HTML',
    'CSS',
    'Python',
    'Django',
    'Javascript',
    'NodeJS',
    'SQL',
    'Git',
    'Figma',
  ];
  return (
    <>
      <section
        id="about"
        name="about"
        className="section-root flex-col py-[36px]"
      >
        <h1 className="section-title bg-white text-blue pt-0 after:top-[36px]">
          ABOUT ME
        </h1>
        <article
          className="w-full min-h-[420px] flex flex-col gap-[36px]
          justify-center tablet:justify-evenly laptop:justify-evenly desktop:justify-evenly
          tablet:flex-row laptop:flex-row desktop:flex-row
          text-[14px] tablet:text-[16px] laptop:text-[16px] desktop:text-[16px]
          items-center tablet:items-start laptop:items-start desktop:items-start"
        >
          <article
            className="h-full tablet:w-1/2 laptop:w-[42%] desktop:w-[42%] flex flex-col
          gap-[24px] text-lightblue font-[450] text-center tablet:text-left laptop:text-left
          desktop:text-left balance tablet:whitespace-normal laptop:whitespace-normal
          desktop:whitespace-normal"
          >
            <p>
              Hi! I'm <span className="text-blue font-[600]">Aimee</span>, a
              former Management Accountant with a passion for Software
              Engineering, especially{' '}
              <span className="text-blue font-[600]">Web Development</span>.
            </p>
            <p>
              My coding odyssey kicked off with the renowned CS50's Introduction
              to Computer Science course from Harvard University and reached new
              heights when I achieved the Meta Front-End & Back-End Developer
              Professional Certificates.
              {/* <br />
              What catalysed this transformation? It all began with Python and a
              simple tic-tac-toe game, which ignited my passion for development. */}
            </p>
            <p>
              I'm now eagerly seeking fresh challenges to apply my skills,
              expand my knowledge, and make a meaningful impact. If you have an
              opportunity that aligns with my experience, please don't hesitate
              to reach out.
            </p>
            <p>Let's embark on this exciting journey together!</p>
          </article>
          <article
            className="h-full tablet:w-1/2 laptop:w-[40%] desktop:w-[40%]
              flex flex-col gap-[36px] laptop:justify-between desktop:justify-between
              text-blue font-[500] items-center tablet:items-start laptop:items-start
              desktop:items-start tablet:min-h-[400px] tablet:justify-between"
          >
            <div
              className="flex flex-col gap-[24px] items-center tablet:items-start laptop:items-start
              desktop:items-start"
            >
              <h2 className="text-[18px] font-[600]">My Skills</h2>
              <ul
                className="w-full flex flex-wrap gap-[12px] tablet:gap-[24px]
              laptop:gap-[24px] desktop:gap-[24px]"
              >
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="px-[12px] py-[6px] rounded-[8px] bg-lightbeige"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`laptop:mb-[20%] desktop:mb-[20%] ${styles.wavingAfter}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              {wavingLetters("Let's Talk")}
            </button>
          </article>
        </article>
      </section>
    </>
  );
}
