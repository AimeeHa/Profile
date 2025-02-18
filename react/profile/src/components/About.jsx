import styles, { wavingLetters } from '../statics/styles';

export default function About() {
  const skills = [
    'React',
    'Typescript',
    'Python',
    'Next.js',
    'MongoDB',
    'Git',
    'Node.js',
    'Django',
    'Java',
    'HTML/CSS',
    'SQL',
    'Figma',
  ];
  return (
    <>
      <section
        id="about"
        name="about"
        className="section-root laptop:max-h-[920px] flex-col laptop:max-w-[1200px]"
      >
        <h1 className="section-title bg-white text-blue pt-0 after:top-[36px]">
          ABOUT ME
        </h1>
        <article
          className="w-full min-h-[420px] flex flex-col gap-[36px] laptop:gap-[48px]
          justify-center tablet:justify-evenly tablet:flex-row text-[14px] tablet:text-[14px]
          desktop:text-[16px] items-center tablet:items-start"
        >
          <article
            className="h-full tablet:w-1/2 laptop:w-[42%] flex flex-col gap-[24px]
            text-lightblue font-[450] text-justify tablet:whitespace-normal"
          >
            <p>
              Hi! I'm <span className="text-blue font-[600]">Aimee</span>, an
              upcoming Software Dev Engineer Intern at{' '}
              <span className="text-blue font-[600]">Amazon</span> this summer
              2025.
            </p>
            <p>
              Transitioned from a Finance/Accounting background, my coding
              odyssey kicked off with the renowned CS50 courses from Harvard
              University and reached new heights when I achieved the{' '}
              <span className="text-blue font-[600]">
                Meta Front-End & Back-End Developer Professional Certificates
              </span>
              .
            </p>
            <p>
              I'm now pursuing my{' '}
              <span className="text-blue font-[600]">
                Master's Degree in Computer Science with Artificial Intelligence
              </span>{' '}
              at University of York, while seeking new challenges to enhance my
              skills and create meaningful impacts. If you would like to
              connect, feel free to reach out.
            </p>
            <p>Let's embark on this exciting journey together!</p>
          </article>
          <article
            className="h-full tablet:w-1/2 laptop:w-[40%] flex flex-col gap-[36px]
              text-blue font-[500] items-center tablet:items-start tablet:min-h-[400px]"
          >
            <div className="flex flex-col gap-[24px] items-center tablet:items-start w-full">
              <h2 className="text-[18px] font-[600]">My Skills</h2>
              <ul
                className="w-full gap-[24px] tablet:gap-[32px] grid tablet:grid-cols-3
              tablet:grid-rows-4 text-center grid-cols-2 grid-rows-6"
              >
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="px-[12px] py-[8px] rounded-[8px] bg-lightbeige"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`laptop:mb-[20%] ${styles.wavingAfter} self-end`}
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
