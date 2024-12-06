import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectsCard from "./components/Projects/Projectcard";
import ProjectDetail from "./components/ProjectDetail/Projectdetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Page d'accueil */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <ProjectsCard />
                <Services />
                <Skills />
                {/* <Contact /> */}
                <Footer />
              </>
            }
          />
          {/* Détails d'un projet */}
          <Route
            path="/projects/:id"
            element={<ProjectDetail />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;