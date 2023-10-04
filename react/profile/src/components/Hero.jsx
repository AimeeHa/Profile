import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import hero from '../assets/hero.png';
import hero2 from '../assets/hero2.png';

const links = [
  {
    icon: <LinkedInIcon style={{ width: '40px', height: '40px' }} />,
    link: 'https://www.linkedin.com/in/thuong-ha-719308116',
  },
  {
    icon: (
      <GitHubIcon
        style={{
          width: '35px',
          height: '40px',
        }}
      />
    ),
    link: 'https://github.com/AimeeHa',
  },
  {
    icon: <EmailRoundedIcon style={{ width: '35px', height: '35px' }} />,
    link: 'mailto:aimee.ha95@gmail.com',
  },
];

export default function Hero(props) {
  const heroImg = props.isNotMobile ? hero : hero2;

  return (
    <section className="section-root pb-0">
      <ul className="flex flex-col gap-[12px] tablet:gap-[24px] laptop:gap-[24px] desktop:gap-[24px] absolute left-0 top-1/2 translate-y-[-50%] z-10 bg-orange text-white px-[4px] py-[4px] tablet:px-[8px] tablet:py-[8px] laptop:px-[8px] laptop:py-[8px] desktop::px-[8px] desktop::py-[8px] rounded-[0px_8px_8px_0px] shadow-[0px_1px_12px_-2px_#2e3179c9]">
        {links.map((link, i) => (
          <li
            key={i}
            className="cursor-pointer flex items-center justify-center rounded-[8px] hover:translate-y-[-2px] hover:shadow-[0px_1px_12px_-1px_rgba(255,255,255,.6)] transition ease-in-out duration-300 "
          >
            <a href={link.link}>{link.icon}</a>
          </li>
        ))}
      </ul>

      <article className="w-full h-full balance flex flex-col-reverse gap-[12px] items-center laptop:flex-row laptop:items-end laptop:gap-[60px] desktop:flex-row desktop:items-end desktop:gap-[60px] justify-center laptop:justify-start desktop:justify-start">
        <img
          src={heroImg}
          alt="PHOTO"
          className="laptop:h-[75vh] desktop:h-[75vh] tablet:h-[50vh] h-fit laptop:pl-[36px] desktop:pl-[36px]"
        ></img>
        <div className="h-full flex flex-col flex-grow items-center justify-center laptop:items-start desktop:items-start text-center laptop:text-left desktop:text-left">
          <p>Hello</p>
          <h1 className="laptop:text-[44px] desktop:text-[44px] text-[28px] text-orange font-[800] ">
            I'M AIMEE
          </h1>
          <h2 className="laptop:text-[22px] desktop:text-[22px] text-[16px] text-blue font-[700] ">
            Coding Enthusiast & Aspiring Web Developer
          </h2>
          <p className="text-lightblue text-[12px] laptop:text-[14px] desktop:text-[14px] font-[450] pt-[6px]">
            On a journey to deliver web solutions that make a meaningful impact.
          </p>
        </div>
      </article>
    </section>
  );
}
