import React, { useState, useEffect } from "react";

export default function PlaylistViewer({ videos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeVideo = activeIndex !== null ? videos[activeIndex] : null;

  useEffect(() => {
    // Pega input das setinhas (Cima/Baixo) do teclado para a pessoa navegar na playlist sem usar o mouse
    const handleKeyDown = (e) => {
      if (activeIndex !== null && e.key === "ArrowUp" && activeIndex > 0) {
        e.preventDefault();
        setActiveIndex((prev) => prev - 1);
      } else if (
        activeIndex !== null &&
        e.key === "ArrowDown" &&
        activeIndex < videos.length - 1
      ) {
        e.preventDefault();
        setActiveIndex((prev) => prev + 1);
      } else if (
        activeIndex === null &&
        (e.key === "ArrowDown" || e.key === "ArrowUp")
      ) {
        e.preventDefault();
        setActiveIndex(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, videos.length]);

  return (
    <div className="content-wrapper">
      <section className="video-player-section">
        <div className="video-player-container">
          {activeVideo ? (
            activeVideo.available ? (
              <iframe
                src={activeVideo.url}
                allowFullScreen
                title={activeVideo.title}
              ></iframe>
            ) : (
              <div className="coming-soon-container">
                <img
                  src="/sensei-penguin.png"
                  alt="Em Breve"
                  className="coming-soon-image"
                />
                <div className="coming-soon-text">Em Breve</div>
                <div className="coming-soon-subtitle">
                  Esta aula será disponibilizada em breve
                </div>
              </div>
            )
          ) : (
            <div className="coming-soon-container">
              <img
                src="/sensei-penguin.png"
                alt="Selecione uma aula"
                className="coming-soon-image"
              />
              <div className="coming-soon-text">Aguardando Aula</div>
              <div className="coming-soon-subtitle">
                Selecione uma aula na playlist para começar a assistir
              </div>
            </div>
          )}
        </div>
        <div className="video-info">
          <h2 className="video-title">
            {activeVideo ? activeVideo.title : "Selecione uma aula"}
          </h2>
          <div className="video-meta">
            <div className="meta-item">
              <svg
                className="meta-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{activeVideo ? activeVideo.date || "-" : "-"}</span>
            </div>
            <div className="meta-item">
              <svg
                className="meta-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{activeVideo ? activeVideo.duration || "-" : "-"}</span>
            </div>
          </div>
          <p className="video-description">
            {activeVideo
              ? activeVideo.description
              : "Clique em uma aula na lista ao lado para começar a assistir."}
          </p>
          <div className="video-tags">
            {activeVideo ? (
              activeVideo.tags.map(
                (tag, idx) =>
                  tag && (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ),
              )
            ) : (
              <span className="tag">Oficinas Gravadas | Monitoria de TI - CEUB</span>
            )}
          </div>
        </div>
      </section>

      <aside className="playlist-sidebar">
        <div className="playlist-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Playlist
          <span className="playlist-count">{videos.length}</span>
        </div>
        <div className="playlist-items">
          {videos.map((video, idx) => (
            <div
              key={video.id}
              role="button"
              tabIndex={0}
              className={`playlist-item ${idx === activeIndex ? "active" : ""}`}
              style={!video.available ? { opacity: 0.6 } : {}}
              onClick={() => setActiveIndex(idx)}
              // Deixa rodar pelo "Enter" ou "Espaço" se o usuário usar Tab
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(idx);
                }
              }}
            >
              <div className="playlist-item-number">{video.id}</div>
              <div className="playlist-item-content">
                <div className="playlist-item-title">{video.title}</div>
                <div className="playlist-item-duration">{video.duration}</div>
              </div>
              {!video.available && (
                <span className="coming-soon-badge">Em Breve</span>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
