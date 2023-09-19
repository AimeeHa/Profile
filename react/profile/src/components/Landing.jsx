import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Landing() {
  return (
    <div className="section-root  bg-secondary ">
      <ul className="flex flex-col gap-6 absolute left-[12px] top-1/2 z-10">
        <li>
          <a
            href="https://www.linkedin.com/in/thuong-ha-719308116"
            className="hover:cursor-pointer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/AimeeHa" className="hover:cursor-pointer">
            <GitHubIcon />
          </a>
        </li>
      </ul>

      <div className="w-full flex flex-col gap-6 items-center">
        <img src="tbu" alt="PHOTO"></img>
        <div>Thuong Ha (Aimee)</div>
        <div>Junior Software Engineer</div>
      </div>
    </div>
  );
}
