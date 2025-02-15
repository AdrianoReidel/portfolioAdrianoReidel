import React, { useState } from 'react';
import './App.css';
import images from './images';

function App() {
  const [livroAtual, setLivroAtual] = useState(images.livrobranco);

  const trocarImagem = (novaImagem) => {
    setLivroAtual(novaImagem);
  };

   const handleNextPage = () => {
    if (livroAtual === images.livrosobre) {
      setLivroAtual(images.livrosobre2);
    } else if (livroAtual === images.livroexperiencias) {
      setLivroAtual(images.livroexperiencias2);
    } else if (livroAtual === images.livroprojetos) {
      setLivroAtual(images.livroprojetos2);
    } else if (livroAtual === images.livrocontato) {
      setLivroAtual(images.livrocontato2);
    }
  };

  const handlePrevPage = () => {
    if (livroAtual === images.livrosobre2) {
      setLivroAtual(images.livrosobre);
    } else if (livroAtual === images.livroexperiencias2) {
      setLivroAtual(images.livroexperiencias);
    } else if (livroAtual === images.livroprojetos2) {
      setLivroAtual(images.livroprojetos);
    } else if (livroAtual === images.livrocontato2) {
      setLivroAtual(images.livrocontato);
    }
  };

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

        <div className="button-column">
          <button
            style={{
              backgroundImage: `url(${images.sobre})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '200px',
              height: '40px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => trocarImagem(images.livrosobre)}
          />
          <button
            style={{
              backgroundImage: `url(${images.experiencias})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '200px',
              height: '40px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => trocarImagem(images.livroexperiencias)}
          />
          <button
            style={{
              backgroundImage: `url(${images.projetos})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '200px',
              height: '40px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => trocarImagem(images.livroprojetos)}
          />
          <button
            style={{
              backgroundImage: `url(${images.contato})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '200px',
              height: '40px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => trocarImagem(images.livrocontato)}
          />
          <button
            style={{
              backgroundImage: `url(${images.linkedin})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '63px',
              height: '45px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://www.linkedin.com/in/adrianoreidel', '_blank', 'noopener,noreferrer')}
          >
          </button>

          <button
            style={{
              backgroundImage: `url(${images.github})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '63px',
              height: '45px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://github.com/AdrianoReidel', '_blank', 'noopener,noreferrer')}
          >
          </button>

          <button
            style={{
              backgroundImage: `url(${images.email})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '63px',
              height: '45px',
              border: 'none',
              cursor: 'pointer',
            }}
            
            onClick={() => window.location.href = 'mailto:adrianojosereidel@hotmail.com'}
          >
          </button>

        </div>

        <img
          src={livroAtual}
          alt="livrobranco"
          className="portfolio-image-livro"
        />

        <div className="button-column">
          <button
            style={{
              backgroundImage: `url(${images.setadireita})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '50px',
              height: '50px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={handleNextPage}
          />
          <button
            style={{
              backgroundImage: `url(${images.setaesquerda})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '50px',
              height: '50px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={handlePrevPage}
          />
          <button
            style={{
              backgroundImage: `url(${images.pincel})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '50px',
              height: '50px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => trocarImagem(images.livrobranco)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
