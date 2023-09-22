import { useEffect, useState } from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

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
      <Projects />
      <Contact />
      <Footer />
      {
        // back to top button
        isVisible && (
          <div
            className="bg-menu text-menu fixed right-[48px] bottom-[48px] flex items-center justify-center rounded-[20px] p-[8px] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleBackToTop();
            }}
          >
            {/* Back to top */}
            <ArrowUpwardRoundedIcon />
          </div>
        )
      }
    </main>
  );
}

export default App;
