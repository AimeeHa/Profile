import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Landing() {
  return (
    <section id="about" name="about" className="section-root  bg-secondary">
      <ul className="flex flex-col gap-6 absolute left-[12px] top-[45%] z-10 bg-menu">
        <li>
          <a
            href="https://www.linkedin.com/in/thuong-ha-719308116"
            className="hover:cursor-pointer"
          >
            <LinkedInIcon style={{ width: '40px', height: '40px' }} />
          </a>
        </li>
        <li>
          <a href="https://github.com/AimeeHa" className="hover:cursor-pointer">
            <GitHubIcon style={{ width: '35px', height: '35px' }} />
          </a>
        </li>
      </ul>

      <div className="w-full flex flex-col gap-6 items-center">
        <img src="tbu" alt="PHOTO"></img>
        <div>Thuong Ha (Aimee)</div>
        <div>Junior Software Engineer</div>
      </div>
    </section>
  );
}
