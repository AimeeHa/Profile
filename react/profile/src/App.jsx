import { useEffect, useState } from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNotMobile, setIsNotMobile] = useState(window.innerWidth > 640);

  // back to top button handler
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 130) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // update isNotMobile state when window is resized
  useEffect(() => {
    function updateIsNotMobile() {
      setIsNotMobile(window.innerWidth > 679);
    }
    // update when window is resized
    window.addEventListener('resize', updateIsNotMobile);

    // remove listener when component is unmounted
    return () => {
      window.removeEventListener('resize', updateIsNotMobile);
    };
  }, []);

  return (
    <main className="w-full flex items-center justify-center flex-col">
      <Header isNotMobile={isNotMobile} />
      <Hero isNotMobile={isNotMobile} />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {
        // back to top button
        isVisible && (
          <button
            className="group bg-orange text-white fixed right-[24px] bottom-[24px]
            laptop:right-[48px] laptop:bottom-[48px] desktop:right-[48px] desktop:bottom-[48px]
            tablet:right-[48px] tablet:bottom-[48px] flex items-center justify-center
            rounded-[50%] p-[8px] cursor-pointer shadow-[0px_1px_12px_-2px_#2e3179c9]"
            onClick={(e) => {
              e.preventDefault();
              handleBackToTop();
            }}
          >
            <ArrowUpwardRoundedIcon className="group-hover:animate-scrollTop" />
          </button>
        )
      }
    </main>
  );
}

export default App;
