import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const links = [
  {
    icon: <LinkedInIcon style={{ width: '40px', height: '40px' }} />,
    link: 'https://www.linkedin.com/in/thuong-ha-719308116',
  },
  {
    icon: <GitHubIcon style={{ width: '35px', height: '35px' }} />,
    link: 'https://github.com/AimeeHa',
  },
  {
    icon: <EmailRoundedIcon style={{ width: '35px', height: '35px' }} />,
    link: 'mailto:aimee.ha95@gmail.com',
  },
];

export default function Hero() {
  return (
    <section className="section-root  bg-primary">
      <ul className="flex flex-col gap-6 absolute left-0 top-[40%] z-10 bg-secondary text-title px-[8px] py-[8px] shadow-[rgba(100,100,111,.2)_0_7px_29px_0]">
        {links.map((link, i) => (
          <li
            key={i}
            className="cursor-pointer flex items-center justify-center"
          >
            <a href={link.link}>{link.icon}</a>
          </li>
        ))}
      </ul>

      <div className="w-full flex flex-col gap-[12px] items-center text-title">
        <img src="tbu" alt="PHOTO"></img>
        <div className="text-[36px] font-[800]">THUONG HA (AIMEE)</div>
        <div className="text-[18px] font-[550]">JUNIOR SOFTWARE ENGINEER</div>
      </div>
    </section>
  );
}
