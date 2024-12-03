import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Services from "./components/Services/services";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import ProjectsCard from "./components/Projects/projectcard";
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
                <ProjectsCard />
                <Services />
                <Skills />
                <Contact />
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