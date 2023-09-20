import logo from '../assets/logo.png';
import menuLogo from '../assets/logo-menu.png';
import { useState, useEffect } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export default function Header() {
  const navItems = ['About', 'Projects', 'Contact'];
  const [isNotMobile, setIsNotMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setIsNotMobile(true);
    }
  }, []);

  return (
    <>
      <nav
        className="w-full h-[100px] flex items-center bg-primary text-title font-title py-4 px-4 justify-between
        laptop:px-24 laptop:h-[110px]
        desktop:px-24 desktop:h-[120px]
        tablet:px-12 tablet:h-[110px]"
      >
        <div className="flex items-center max-w-1/4 min-w-max">
          <img
            src={logo}
            alt="Aimee Ha"
            className="h-[100px] laptop:h-[110px] desktop:h-[120px]"
          />
        </div>
        {isNotMobile ? (
          // Nav bar on other devices
          <>
            <ul className="w-1/2 nav-items justify-evenly">
              {navItems.map((item) => (
                <li key={item} id={item}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-max nav-items justify-end ">
              <div className="download-btn  text-primary bg-[#9F5C59]  border-[#9F5C59]">
                <div>Download CV</div>
                <div>
                  <DownloadRoundedIcon />
                </div>
              </div>
            </div>
          </>
        ) : (
          // Hamburger menu on mobile
          <>
            <div className="flex flex-col w-1/2">
              <div
                className="flex justify-end pr-[12px]"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <MenuRoundedIcon
                  style={{ height: '32px', width: '36px' }}
                  className="bg-menu rounded-[6px] text-menu"
                />
              </div>
              {isMenuOpen && (
                <div className="nav-menu-mobile">
                  <img src={menuLogo} alt="Aimee Ha" className="h-[100px]" />
                  <div
                    className="flex justify-end pr-[24px]"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <CloseRoundedIcon className="text-menu absolute right-[24px] top-[32px] hover:cursor-pointer" />
                  </div>
                  <ul className="flex flex-col gap-[36px] items-center">
                    {navItems.map((item) => (
                      <li key={item} id={item}>
                        {item}
                      </li>
                    ))}
                    <li className="download-btn border-[#FDE4DB]">
                      <div>Download CV</div>
                      <div>
                        <DownloadRoundedIcon />
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </nav>
    </>
  );
}
