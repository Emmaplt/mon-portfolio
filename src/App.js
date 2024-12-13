import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ButtonCV from "./components/ButtonCv/ButtonCv";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectsCard from "./components/Projects/Projectcard";
import ProjectDetail from "./components/ProjectDetail/Projectdetail";

function App() {
  return (
    <Router basename="/mon-portfolio">
      <div className="App">
        <Routes>
          {/* Page d'accueil */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <ButtonCV />
                <ProjectsCard />
                <Services />
                <Skills />
                <Contact />
              </>
            }
          />
          {/* Détails d'un projet */}
          <Route
            path="/projects/:idName"
            element={
              <>
                <ProjectDetail />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;