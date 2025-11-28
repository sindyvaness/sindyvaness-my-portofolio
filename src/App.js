import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import WebProject from "./components/WebProject";
import MobileProject from "./components/MobileProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Todas estas rutas comparten el mismo layout */}
        <Route element={<Layout />}>

          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Experience />
                <Education />
                <Contact />
              </>
            }
          />

          <Route path="/web-project" element={<WebProject />} />
          <Route path="/mobile-project" element={<MobileProject />} />
          {/* About pages */}

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
