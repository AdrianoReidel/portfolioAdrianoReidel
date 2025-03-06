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

  const tecnologias = [
    { 
      nome: "CSharp", 
      icone: images.csharp, 
      link: "https://dotnet.microsoft.com/pt-br/languages/csharp" 
    },
    { 
      nome: "dotNetCore", 
      icone: images.dotNetCore, 
      link: "https://dotnet.microsoft.com/pt-br/apps/aspnet" 
    },
    { 
      nome: "Postgre", 
      icone: images.postgre, 
      link: "https://www.postgresql.org/" 
    },
    { 
      nome: "JavaScript", 
      icone: images.javascript, 
      link: "https://www.javascript.com/" 
    },
    { 
      nome: "ExtJs", 
      icone: images.extjs, 
      link: "https://www.sencha.com/products/extjs/" 
    },
    { 
      nome: "Sybase", 
      icone: images.sybase, 
      link: "https://www.sap.com/brazil/products/technology-platform/sql-anywhere.html" 
    },
    { 
      nome: "GitHub", 
      icone: images.git, 
      link: "https://github.com/" 
    },
    { 
      nome: "GitLab", 
      icone: images.gitlab, 
      link: "https://gitlab.com/gitlab-com" 
    },
    { 
      nome: "NHibernate", 
      icone: images.nhibernate, 
      link: "https://nhibernate.info/" 
    },
    { 
      nome: "Node.js", 
      icone: images.nodejs, 
      link: "https://nodejs.org" 
    },
    { 
      nome: "Visual Studio",
      icone: images.vs,          
      link: "https://visualstudio.microsoft.com" 
    },
    { 
      nome: "VS Code",      
      icone: images.vscode,      
      link: "https://code.visualstudio.com" 
    },
    { 
      nome: "ReactJs.js", 
      icone: images.nodejs, 
      link: "https://react.dev/" 
    },
    { 
      nome: "HTML", 
      icone: images.htmlicon, 
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" 
    },
    { 
      nome: "CSS", 
      icone: images.cssicon, 
      link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" 
    },
    { 
      nome: "Python", 
      icone: images.python, 
      link: "https://www.python.org/" 
    },
    { 
      nome: "C", 
      icone: images.c, 
      link: "https://devdocs.io/c/" 
    },
    { 
      nome: "Java", 
      icone: images.java, 
      link: "https://www.java.com/pt-BR/" 
    },
  ];

  return (
    <div className="App">
      <img
        src={images.adrianoreidel}
        alt="Adriano Reidel"
        className="portfolio-image-nome"
      />
      <img
        src={images.fullstacksoftwaredeveloper}
        alt="JR Full Stack Software Developer"
        className="portfolio-image-cargo"
      />
      {isMobile ? (
          <>
            <div className="image-row">
              <div className="craftingtable-container">
                <div className="button-grid">
                  {tecnologias.slice(0, 9).map((tec, index) => (
                    <button 
                      key={index} 
                      onClick={() => window.open(tec.link, '_blank', 'noreferrer')}
                    >
                      <img 
                        src={tec.icone} 
                        alt={tec.nome} 
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
                  backgroundImage: `url(${
                    currentPageIndex === 1 || currentPageIndex === 2
                      ? images.sobre2
                      : images.sobre
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => goToPage(1)}
              />

              <button className="button-options"
                style={{
                  backgroundImage: `url(${
                    currentPageIndex === 3
                      ? images.experiencias2
                      : images.experiencias
                  })`,
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
                  backgroundImage: `url(${
                    currentPageIndex === 4
                      ? images.projetos2
                      : images.projetos
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => goToPage(4)}
              />

              <button className="button-options"
                style={{
                  backgroundImage: `url(${
                    currentPageIndex === 5
                      ? images.contato2
                      : images.contato
                  })`,
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
              <div className="craftingtable-container">
                <div className="button-grid">
                  {tecnologias.slice(0, 9).map((tec, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(tec.link, '_blank', 'noreferrer')}
                      title={tec.nome}
                    >
                      <img 
                        src={tec.icone} 
                        alt={tec.nome} 
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="button-column">
              <button className="button-options"
                style={{
                  backgroundImage: `url(${
                    currentPageIndex === 1 || currentPageIndex === 2
                      ? images.sobre2
                      : images.sobre
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => goToPage(1)}
              />

              <button className="button-options"
                style={{
                  backgroundImage: `url(${
                    currentPageIndex === 3
                      ? images.experiencias2
                      : images.experiencias
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => goToPage(3)}
              />

              <button className="button-options"
                style={{
                  backgroundImage: `url(${
                    currentPageIndex === 4
                      ? images.projetos2
                      : images.projetos
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => goToPage(4)}
              />

              <button className="button-options"
                style={{
                  backgroundImage: `url(${
                    currentPageIndex === 5
                      ? images.contato2
                      : images.contato
                  })`,
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