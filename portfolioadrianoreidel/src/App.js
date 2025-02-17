import React, { useState, useEffect } from 'react';
import './App.css';
import images from './images';

function App() {
  const pages = [
    images.livrobranco,       
    images.livrosobre,        
    images.livrosobre2,       
    images.livroexperiencias, 
    images.livroprojetos,     
    images.livrocontato,      
  ];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = pages[currentPageIndex];

  const handleNextPage = () => {
    setCurrentPageIndex((prevIndex) => 
      prevIndex >= pages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex <= 0 ? pages.length - 1 : prevIndex - 1
    );
  };

  const goToPage = (index) => {
    setCurrentPageIndex(index);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      {isMobile ? (
          <>
          <div className="buttons-mobile">
                <button className="button-links"
                  style={{
                    backgroundImage: `url(${images.linkedin})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open('https://www.linkedin.com/in/adrianoreidel', '_blank', 'noopener,noreferrer')}
                >
                </button>
                <button className="button-links"
                  style={{
                    backgroundImage: `url(${images.github})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open('https://github.com/AdrianoReidel', '_blank', 'noopener,noreferrer')}
                >
                </button>
                <button className="button-links"
                  style={{
                    backgroundImage: `url(${images.email})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.location.href = 'mailto:adrianojosereidel@hotmail.com'}
                >
                </button>
              </div>
            <div className="image-row">
              <img
                src={images.craftingtable}
                alt="craftingtablefundo"
                className="portfolio-image-crafting"
              />
            </div>
            
            <div className="image-row">
              <img
                src={currentPage}
                alt="livro-pagina"
                className="portfolio-image-livro"
              />
            </div>
            <div className="buttons-mobile">
                <button className="button-arrows"
                  style={{
                    backgroundImage: `url(${images.setaesquerda})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={handlePrevPage}
                />
                <button className="button-arrows"
                  style={{
                    backgroundImage: `url(${images.pincel})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    goToPage(0);
                  }}
                />
                <button className="button-arrows"
                  style={{
                    backgroundImage: `url(${images.setadireita})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={handleNextPage}
                />
              </div>
            <div className="image-row">
              <div className="button-column">
                <button className="button-options"
                  style={{
                    backgroundImage: `url(${images.sobre})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => goToPage(1)}
                />

                <button className="button-options"
                  style={{
                    backgroundImage: `url(${images.experiencias})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => goToPage(3)}
                />
              </div>

              <div className="button-column">
                <button className="button-options"
                  style={{
                    backgroundImage: `url(${images.projetos})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => goToPage(4)}
                />
                <button className="button-options"
                  style={{
                    backgroundImage: `url(${images.contato})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => goToPage(5)}
                />
              
              </div>
            </div>

          </>
        ) : (
          <>
            <div className="image-row">
              <img
                src={images.craftingtable}
                alt="craftingtablefundo"
                className="portfolio-image-crafting"
              />

              <div className="button-column">
                <button className="button-options"
                  style={{
                    backgroundImage: `url(${images.sobre})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => goToPage(1)}
                />

                <button className="button-options"
                  style={{
                    backgroundImage: `url(${images.experiencias})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => goToPage(3)}
                />
                <button className="button-options"
                  style={{
                    backgroundImage: `url(${images.projetos})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => goToPage(4)}
                />
                <button className="button-options"
                  style={{
                    backgroundImage: `url(${images.contato})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => goToPage(5)}
                />
                <button className="button-links"
                  style={{
                    backgroundImage: `url(${images.linkedin})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open('https://www.linkedin.com/in/adrianoreidel', '_blank', 'noopener,noreferrer')}
                >
                </button>

                <button className="button-links"
                  style={{
                    backgroundImage: `url(${images.github})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open('https://github.com/AdrianoReidel', '_blank', 'noopener,noreferrer')}
                >
                </button>

                <button className="button-links"
                  style={{
                    backgroundImage: `url(${images.email})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.location.href = 'mailto:adrianojosereidel@hotmail.com'}
                >
                </button>
              </div>
              <img
                src={currentPage}
                alt="livro-pagina"
                className="portfolio-image-livro"
              />

              <div className="button-column">
                <button className="button-arrows"
                  style={{
                    backgroundImage: `url(${images.setadireita})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={handleNextPage}
                />
                <button className="button-arrows"
                  style={{
                    backgroundImage: `url(${images.setaesquerda})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={handlePrevPage}
                />
                <button className="button-arrows"
                  style={{
                    backgroundImage: `url(${images.pincel})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    goToPage(0);
                  }}
                />
              </div>
            </div>
          </>
        )}
    </div>
  );
}

export default App;