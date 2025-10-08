import logo from '../assets/logo-AH.png';
import menulogo from '../assets/logo2.png';
import CV from '../assets/CV.pdf';
import { useState, useEffect } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import styles from '../statics/styles';

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
      className={`px-[4px] flex items-center justify-center hover:text-orange
      hover:cursor-pointer relative transition ease-in-out duration-300 ${
        isNotMobile
          ? 'after:hover:bg-orange after:hover:absolute after:hover:top-[24px] after:hover:w-[calc(100%-16px)] after:hover:h-[3px] after:hover:rounded-[8px] after:hover:transition after:hover:ease-in-out after:hover:duration-300'
          : 'h-[100%] w-[100%] border-t-[1px] border-t-solid border-t-grey'
      }`}
    >
      <a href={`/#${item}`}>{item[0].toUpperCase() + item.substring(1)}</a>
    </li>
  ));

  // Download button
  const downloadBtn = (
    <div
      className={`group relative inline-block w-[160px]
        leading-[18px] p-0 rounded-[500px] bg-primary
        transition ease-linear delay-100 border-[2px] border-blue border-solid
      hover:bg-orange hover:border-orange hover:cursor-pointer
        hover:shadow-[0px_1px_10px_-1px_rgba(48,49,121,.45)]
        hover:transition hover:ease-linear hover:delay-100 ${
          isNotMobile ? 'h-full' : 'h-[35px]'
        }`}
    >
      <a href={CV} download="AimeeHa-CV.pdf">
        <span
          className={`flex items-center justify-center bg-blue text-primary
          absolute h-[28px] w-[28px] desktop:h-[33px] desktop:w-[33px] top-1/2
          translate-y-[-50%] left-[1px] rounded-[50%] group-hover:left-[calc(100%-29px)]
          desktop:group-hover:left-[calc(100%-34px)]
        group-hover:bg-primary group-hover:text-orange ${styles.groupTransition}`}
        >
          <DownloadRoundedIcon />
        </span>
        <span
          className={`${styles.downloadTextSpan} right-[12px] text-blue
          group-hover:opacity-0 ${styles.groupTransition}`}
        >
          Download CV
        </span>
        <span
          className={`${styles.downloadTextSpan} left-[50px] opacity-0 text-primary
          group-hover:opacity-100 ${styles.groupTransition}`}
        >
          Click to start
        </span>
      </a>
    </div>
  );

  // Add shadow to navbar on scroll
  window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 0) {
      navbar.classList.add('nav-shadow'); // Add the shadow utility class
    } else {
      navbar.classList.remove('nav-shadow'); // Remove the shadow utility class
    }
  });

  return (
    <>
      <nav
        id="navbar"
        className="w-full flex items-center justify-center sticky top-0 z-50 bg-primary"
      >
        <div
          className="max-w-[1200px] flex items-center h-[60px] text-blue
        font-[500] py-4 px-4 justify-between laptop:px-24 desktop:h-[70px]
        tablet:px-12 tablet:h-[65px] tablet:text-[16px] w-full"
        >
          <div className="flex items-center max-w-1/4 w-[160px]">
            <img
              src={logo}
              alt="Aimee Ha"
              className="h-[40px] laptop:h-[45px] desktop:h-[50px]"
            />
          </div>
          {isNotMobile ? (
            // Nav bar on other devices
            <>
              <ul
                className="w-1/2 flex flex-row h-full items-center hover:cursor-pointer
              justify-evenly pb-[4px]"
              >
                {navItemsMapping}
              </ul>
              <div
                className="w-max flex flex-row h-full items-end hover:cursor-pointer
            justify-end "
              >
                {downloadBtn}
              </div>
            </>
          ) : (
            // Hamburger menu on mobile
            <>
              <div className="flex flex-col w-1/2">
                {isMenuOpen ? (
                  <>
                    <div
                      className="flex justify-end"
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                      }}
                    >
                      <CloseRoundedIcon
                        className="text-menu hover:cursor-pointer"
                        style={{ height: '30px', width: '30px' }}
                      />
                    </div>
                    <div
                      className="h-[30vh] w-screen z-20 absolute top-[60px] right-0 flex flex-col
                  items-center gap-[36px] bg-primary text-blue shadow-[0_5px_5px_0_rgba(0,0,0,.1)]"
                    >
                      <ul
                        className="h-[100%] w-screen grid grid-rows-4 grid-cols-1 items-center
                    justify-center text-[16px]"
                      >
                        {navItemsMapping}
                        <li
                          className="h-[100%] w-[100%] border-t-[1px] border-t-solid border-t-grey
                      flex items-center justify-center"
                        >
                          {downloadBtn}
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <div
                    className="flex justify-end"
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
        </div>
      </nav>
    </>
  );
}
