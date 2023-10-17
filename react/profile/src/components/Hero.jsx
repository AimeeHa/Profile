import links from '../statics/links';
import hero from '../assets/hero.png';
import hero2 from '../assets/hero2.png';
import styles, { wavingLetters } from '../statics/styles';

export default function Hero(props) {
  const heroImg = props.isNotMobile ? hero : hero2;

  return (
    <section className="section-root pb-0">
      <ul
        className="flex flex-col gap-[12px] tablet:gap-[24px] laptop:gap-[24px] desktop:gap-[24px]
      absolute left-0 top-1/2 translate-y-[-50%] z-10 bg-orange text-white px-[4px]
      py-[4px] tablet:px-[8px] tablet:py-[8px] laptop:px-[8px] laptop:py-[8px] desktop::px-[8px]
      desktop::py-[8px] rounded-[0px_8px_8px_0px] shadow-[0px_1px_12px_-2px_#2e3179c9]"
      >
        {links.map((link, i) => (
          <li
            key={i}
            className="cursor-pointer flex items-center justify-center rounded-[8px]
            hover:translate-y-[-2px] hover:scale-[1.2] hover:transition hover:ease-in-out
            hover:duration-300 transition ease-in-out duration-300 "
          >
            <a href={link.link}>{link.icon}</a>
          </li>
        ))}
      </ul>

      <article
        className="w-full h-full balance flex flex-col-reverse gap-[12px] items-center
      laptop:flex-row laptop:items-end laptop:gap-[86px] desktop:gap-[100px] justify-center"
      >
        <article
          className="relative flex justify-center laptop:animate-heroPhotoLarge desktop:animate-heroPhotoLarge
        animate-heroPhotoSmall"
        >
          <img
            src={heroImg}
            alt="PHOTO"
            className="z-10 laptop:min-w-auto desktop:min-w-auto laptop:h-[75vh] desktop:h-[75vh]
            tablet:h-[50vh] h-auto"
          ></img>
          <div
            className="absolute bg-lightbeige rounded-[50%] bottom-[-56px] tablet:bottom-[-84px] animate-gradient
            w-[110%] h-auto aspect-square left-[-5%] tablet:w-[130%] tablet:left-[-15%]"
          ></div>
        </article>
        <article
          className="z-10 laptop:animate-greetingSlide desktop:animate-greetingSlide
        animate-greetingSlideSmall h-full flex flex-col items-center justify-center
        laptop:items-start desktop:items-start text-center laptop:text-left desktop:text-left"
        >
          <p
            className="px-[12px] py-[4px] rounded-[16px] text-[14px] font-[500] relative
          text-beige  border-[1px] border-dashed border-[#f59c8c]"
          >
            Hello!
          </p>
          <h1
            className="laptop:text-[44px] desktop:text-[50px] text-[28px] text-orange
          drop-shadow-[3px_3px_3px_#f5cac2] font-[800] "
          >
            I'M AIMEE
          </h1>
          <h2 className="laptop:text-[22px] desktop:text-[26px] text-[16px] text-blue font-[600] ">
            Coding Enthusiast & Aspiring Web Developer
          </h2>
          <p className="text-lightblue text-[13px] laptop:text-[14px] desktop:text-[16px] font-[450] pt-[6px]">
            On a journey to deliver web solutions that make a meaningful impact.
          </p>
          {props.isNotMobile ? (
            <button
              className={`${styles.orangeBtn} laptop:mt-[24px] desktop:mt-[24px] tablet:mt-[16px]`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              Explore My Projects
            </button>
          ) : (
            <button
              className={`text-[14px] mt-[8px] font-[500] ${styles.wavingAfter}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              {wavingLetters('Explore My Projects')}
            </button>
          )}
        </article>
      </article>
    </section>
  );
}
