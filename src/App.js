import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Services from "./components/Services/services";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import ProjectsGrid from "./components/Projects/projectcard"; // Renommé pour clarté
import ProjectDetail from "./components/ProjectDetail/projectdetail";

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
                <ProjectsGrid />
                <Services />
                <Skills />
                <Contact />
                <Footer /> {/* Footer uniquement sur l'accueil */}
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