import logo from '../assets/logo-blue2.png';
import menulogo from '../assets/logo2.png';
import { useState, useEffect } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

export default function Header(props) {
  const navItems = ['about', 'projects', 'contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isNotMobile = props.isNotMobile;

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
      className={`px-[4px] flex items-center justify-center hover:text-orange hover:cursor-pointer relative transition ease-in-out duration-300 ${
        isNotMobile
          ? 'after:hover:bg-orange after:hover:absolute after:hover:top-[24px] after:hover:w-[calc(100%-16px)] after:hover:h-[3px] after:hover:rounded-[8px]'
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
            <ul className="w-1/2 flex flex-row h-[75%] items-end hover:cursor-pointer justify-evenly">
              {navItemsMapping}
            </ul>
            <div className="w-max flex flex-row h-[75%] items-end hover:cursor-pointer justify-end ">
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
                  <div className="h-1/3 w-screen z-20 absolute top-[100px] right-0 flex flex-col items-center gap-[36px] bg-primary text-blue shadow-[0_5px_5px_0_rgba(0,0,0,.1)]">
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
