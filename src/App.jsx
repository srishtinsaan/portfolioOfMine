import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Container from "./components/Container";
import Footer from "./components/Footer";
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Tools from './components/Tools';
import Resume from './components/Resume';
import PageUpButton from './components/PageUpButton';


const PageWrapper = ({children}) => (
  <motion.div
    initial={{ opacity: 0, y: 0, filter: 'blur(3px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)'  }}
    // exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.5, ease: 'easeInOut', ease: 'easeInOut' }}
    className="w-full">
    {children}
  </motion.div> 
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Container />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
          <Route path="tools" element={<PageWrapper><Tools /></PageWrapper>} />
          <Route path="resume" element={<PageWrapper><Resume /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {

  const calculateheight = ScrollProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer);
  },[])
 

  

  

  return (
    <>
      {/* Scroll Progress Bar */}
      <span style={{ width: `${calculateheight}%` , transition: 'widthlinear'}} 
      className="fixed top-0 left-0 h-[2px] sm:h-[3px] md:h-[2px] w-full bg-white z-[9999] shadow-[0_0_10px_rgba(255,255,255,0.6)] pointer-events-none"/>

      <BrowserRouter>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div key="Loader" initial={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 2}}
            className='w-full h-screen flex items-center justify-center'>
              <Loader />
            </motion.div>
          ) : (<motion.div key="main"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration:0.4}}
            className="w-full min-h-screen text-white flex flex-col items-center gap-20 px-4 sm:px-8 lg:px-16"
          >
            <AppRoutes />
            <PageUpButton/>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
    </>
  );
};

export default App;
