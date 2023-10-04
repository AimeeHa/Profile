import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import hero from '../assets/hero.png';

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

export default function Hero() {
  return (
    <section className="section-root pb-0">
      <ul className="flex flex-col gap-[12px] tablet:gap-[24px] laptop:gap-[24px] desktop:gap-[24px] absolute left-0 top-[40%] z-10 bg-orange text-white px-[4px] py-[4px] tablet:px-[8px] tablet:py-[8px] laptop:px-[8px] laptop:py-[8px] desktop::px-[8px] desktop::py-[8px] rounded-[0px_8px_8px_0px] shadow-[0px_1px_12px_-2px_#2e3179c9]">
        {links.map((link, i) => (
          <li
            key={i}
            className="cursor-pointer flex items-center justify-center rounded-[8px] hover:translate-y-[-2px] hover:shadow-[0px_1px_12px_-1px_rgba(255,255,255,.6)] transition ease-in-out duration-300 "
          >
            <a href={link.link}>{link.icon}</a>
          </li>
        ))}
      </ul>

      <article className="w-full h-full flex flex-col gap-[12px] items-center ">
        <img src={hero} alt="PHOTO" className="h-full"></img>
        <h1 className="text-[36px] text-orange font-[800] z-1 absolute">
          THUONG HA (AIMEE)
        </h1>
        <h2 className="text-[18px] text-blue font-[550] z-1 absolute">
          JUNIOR SOFTWARE ENGINEER
        </h2>
      </article>
    </section>
  );
}
