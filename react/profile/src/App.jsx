// import { useEffect, useState } from 'react';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';

function App() {
  return (
    <main className="w-full flex items-center justify-center flex-col">
      <Header />
      <Landing />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
