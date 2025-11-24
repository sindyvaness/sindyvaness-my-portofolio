import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Contact from './components/Contact';
import MobileProject from './components/MobileProject';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MobileProject></MobileProject>
      {/* <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Education></Education>
      <Contact></Contact> */}
      <Footer></Footer>
    </>
  );
}

export default App;
