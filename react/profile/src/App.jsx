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

  return (
    <main className="w-full flex items-center justify-center flex-col">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {
        // back to top button
        isVisible && (
          <div
            className="group bg-orange text-white fixed right-[24px] bottom-[24px] laptop:right-[48px] laptop:bottom-[48px] desktop:right-[48px] desktop:bottom-[48px] tablet:right-[48px] tablet:bottom-[48px] flex items-center justify-center rounded-[20px] p-[8px] cursor-pointer shadow-[0px_1px_12px_-2px_#2e3179c9]"
            onClick={(e) => {
              e.preventDefault();
              handleBackToTop();
            }}
          >
            <ArrowUpwardRoundedIcon className="group-hover:animate-scrollTop" />
          </div>
        )
      }
    </main>
  );
}

export default App;
