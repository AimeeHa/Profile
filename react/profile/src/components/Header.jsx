import logo from '../assets/logo.png';
import menuLogo from '../assets/logo-menu.png';
import { useState, useEffect } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export default function Header() {
  const navItems = ['about', 'projects', 'contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotMobile, setIsNotMobile] = useState(window.innerWidth > 640);

  useEffect(() => {
    function updateIsNotMobile() {
      setIsNotMobile(window.innerWidth > 640);
    }
    // update when window is resized
    window.addEventListener('resize', updateIsNotMobile);

    // remove listener when component is unmounted
    return () => {
      window.removeEventListener('resize', updateIsNotMobile);
    };
  }, []);

  // Mapping nav items
  const navItemsMapping = navItems.map((item) => (
    <li
      key={item}
      onClick={(e) => {
        e.preventDefault(); //TODO: without -> there's # link in url but not scroll smoothly
        handleNavClick(item);
      }}
      className={`px-[4px] h-[32px] flex items-center justify-center border-b-[2px] border-b-solid border-b-transparent ${
        isMenuOpen
          ? 'hover:border-b-solid hover:border-b-[#FFF6EA] hover:border-b-[2px]'
          : 'hover:border-b-solid hover:border-b-[#9F5C59] hover:border-b-[2px]'
      } hover:cursor-pointer`}
    >
      <a href={`/#${item}`}>{item[0].toUpperCase() + item.substring(1)}</a>
    </li>
  ));

  // Scroll to section when nav item is clicked
  const handleNavClick = (item) => {
    const id = item;
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="w-full h-[100px] flex items-center bg-primary text-title font-title py-4 px-4 justify-between
        laptop:px-24 laptop:h-[110px]
        desktop:px-24 desktop:h-[120px]
        tablet:px-12 tablet:h-[110px] tablet:text-[16px]"
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
              {navItemsMapping}
            </ul>
            <div className="w-max nav-items justify-end ">
              <div className="download-btn text-primary bg-[#9F5C59] border-[#9F5C59] tablet:w-[152px] hover:bg-[#FFF6EA] hover:text-[#9F5C59]">
                <div>Download CV</div>
                {/* TODO: attached file and allow download */}
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
                  <ul className="flex flex-col gap-[36px] items-center text-[16px]">
                    {navItemsMapping}
                    <li className="download-btn border-[#FDE4DB] hover:bg-[#FDE4DB] hover:text-[#9F5C59]">
                      <div>Download CV</div>
                      {/* TODO: */}
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
