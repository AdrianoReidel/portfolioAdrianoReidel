import React from 'react';
import './App.css';
import images from './images';

function App() {
  return (
    <div className="App">
      <img
        src={images.adrianoreidel}
        alt="Adriano Reidel"
        className="portfolio-image-nome"
      />
      <img
        src={images.jrfullstacksoftwaredeveloper}
        alt="JR Full Stack Software Developer"
        className="portfolio-image-cargo"
      />

      <div className="image-row">
        <img
          src={images.craftingtable}
          alt="craftingtablefundo"
          className="portfolio-image-crafting"
        />
        <img
          src={images.livrobranco}
          alt="livrobranco"
          className="portfolio-image-livro"
        />
      </div>
    </div>
  );
}

export default App;
