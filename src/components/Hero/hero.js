import React from 'react';
import './hero.scss';
import avatar from "../../assets/images/avatar.png";


const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img src={avatar} alt="Avatar Emma" className="hero-avatar" />
      <div className="hero-content">
        <h1>Emma Plaut</h1>
        <h2>Développeuse Web</h2>
        <p>Développeuse web junior passionnée, j'ai entrepris une réorientation professionnelle pour m'immerger dans un domaine qui allie créativité et résolution de problèmes. Curieuse et motivée, je suis toujours à la recherche de nouveaux défis pour développer mes compétences et donner vie à des projets innovants.</p>
        <p>Bienvenue dans mon portfolio, où chaque ligne de code reflète mon engagement et mon envie d'évoluer dans ce domaine passionnant.</p>
      </div>
    </section>
  );
};

export default Hero;