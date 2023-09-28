import logo from '../assets/logo-blue2.png';
import menulogo from '../assets/logo2.png';
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
        let element = document.getElementById(item);
        if (element) {
          e.preventDefault(); //TODO: without -> there's # link in url but not scroll smoothly
          setIsMenuOpen(false);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
      className={`px-[4px] flex items-center justify-center hover:text-orange hover:cursor-pointer ${
        isNotMobile
          ? 'border-b-[2px] border-b-solid border-b-transparent hover:border-b-solid hover:border-b-orange hover:border-b-[2px]'
          : 'h-[100%] w-[100%] border-t-[1px] border-t-solid border-t-grey'
      }`}
    >
      <a href={`/#${item}`}>{item[0].toUpperCase() + item.substring(1)}</a>
    </li>
  ));

  return (
    <>
      <nav
        className="w-full h-[100px] flex items-center bg-primary text-blue font-title py-4 px-4 justify-between
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
              <div className="download-btn">
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
              {isMenuOpen ? (
                <>
                  <div
                    className="flex justify-end pr-[12px]"
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <CloseRoundedIcon
                      className="text-menu hover:cursor-pointer"
                      style={{ height: '30px', width: '30px' }}
                    />
                  </div>
                  <div className="nav-menu-mobile">
                    <ul className="h-[100%] w-screen grid grid-rows-4 grid-cols-1 items-center justify-center text-[16px]">
                      {navItemsMapping}
                      <li className="h-[100%] w-[100%] border-t-[1px] border-t-solid border-t-grey flex items-center justify-center">
                        <div className="download-btn">
                          <div>Download CV</div>
                          <DownloadRoundedIcon />
                          {/* TODO: */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div
                  className="flex justify-end pr-[12px]"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <MenuRoundedIcon
                    style={{ height: '32px', width: '36px' }}
                    className="bg-menu rounded-[6px] text-menu cursor-pointer"
                  />
                </div>
              )}
            </div>
          </>
        )}
      </nav>
    </>
  );
}
