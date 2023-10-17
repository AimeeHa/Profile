import logo from '../assets/logo-blue2.png';
import menulogo from '../assets/logo2.png';
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
      className={`px-[4px] flex items-center justify-center hover:text-orange hover:cursor-pointer
      relative transition ease-in-out duration-300 ${
        isNotMobile
          ? 'after:hover:bg-orange after:hover:absolute after:hover:top-[24px] after:hover:w-[calc(100%-16px)] after:hover:h-[3px] after:hover:rounded-[8px] after:hover:transition after:hover:ease-in-out after:hover:duration-300'
          : 'h-[100%] w-[100%] border-t-[1px] border-t-solid border-t-grey'
      }`}
    >
      <a href={`/#${item}`}>{item[0].toUpperCase() + item.substring(1)}</a>
    </li>
  ));

  const downloadBtn = (
    <div
      className="group relative inline-block h-[38px] w-[160px]
        leading-[18px] p-0 rounded-[500px] bg-primary
        transition ease-in-out border-[2px] border-blue border-solid
      hover:bg-orange hover:border-orange hover:cursor-pointer"
    >
      <span
        className={`flex items-center justify-center bg-blue text-primary
          absolute h-[32px] w-[32px] top-[1px] left-[1px] rounded-[50%]
          group-hover:left-[calc(100%-34px)]
        group-hover:bg-primary group-hover:text-orange ${styles.groupTransition}`}
      >
        <a href="../assets/MyCV.pdf" download="AimeeHa-CV.pdf">
          <DownloadRoundedIcon />
        </a>
        {/* TODO: attached file and allow download */}
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
    </div>
  );

  return (
    <>
      <nav
        className="w-full h-[100px] flex items-center bg-primary text-blue font-[500]
        py-4 px-4 justify-between laptop:px-24 laptop:h-[110px]
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
            <ul
              className="w-1/2 flex flex-row h-[75%] items-end hover:cursor-pointer justify-evenly
            pb-[4px]"
            >
              {navItemsMapping}
            </ul>
            <div className="w-max flex flex-row h-[75%] items-end hover:cursor-pointer justify-end ">
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
                  <div
                    className="h-1/3 w-screen z-20 absolute top-[100px] right-0 flex flex-col
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
