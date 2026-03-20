import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoCeub from "../assets/logo-ceub.png";

const tabs = ["Início", "Ver oficinas", "Pitaco", "Equipe"];

export default function FlawlessPillNavbar() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <>
      <style>
        {`
          /* Oculta logo e espaçador no mobile */
          @media (max-width: 768px) {
            .logo-container-mobile {
              display: none !important;
            }
            .header-container-mobile {
              padding: 10px 5px !important;
            }
            .tab-mobile {
              padding: 8px 14px !important; 
              font-size: 16px !important;
            }
          }
          @media (max-width: 380px) {
             .nav-scroll-mobile {
                max-width: 95vw;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
             }
             .nav-scroll-mobile::-webkit-scrollbar {
               display: none;
             }
          }
        `}
      </style>

      <div style={styles.logoContainer} className="logo-container-mobile">
        <a href="/" style={styles.logoLink} aria-label="Página inicial do site">
          <img src={logoCeub.src} alt="Logo CEUB" style={styles.logoImage} />
        </a>
      </div>

      <div style={styles.headerContainer} className="header-container-mobile">
        <div style={styles.navWrapper} className="nav-scroll-mobile">
          {/* aria-label contextualiza a navegação para leitores de tela */}
          <nav
            aria-label="Navegação principal"
            style={styles.nav}
            onMouseLeave={() => setHoveredTab(null)}
          >
            {/* BACKGROUNDS: Separados dos botões para evitar bloqueio de cliques */}
            <div style={styles.backgroundsContainer} aria-hidden="true">
              <div style={styles.navBgOuter}></div>
              <div style={styles.navBgInner}></div>

              <AnimatePresence>
                {hoveredTab === null && (
                  <motion.div
                    layoutId="hover-pill-anim"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    style={styles.fullHoverPill}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* BOTÕES INTERATIVOS: Z-index elevado para capturar eventos de mouse/teclado */}
            <ul role="list" style={styles.buttonsContainer}>
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                const isHovered = hoveredTab === tab;

                return (
                  <li key={tab} style={{ display: "flex" }}>
                    <button
                      // aria-current indica a página atual para leitores de tela
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setActiveTab(tab)}
                      onMouseEnter={() => setHoveredTab(tab)}
                      // onFocus/onBlur garantem que a navegação por tecla TAB exiba o hover
                      onFocus={() => setHoveredTab(tab)}
                      onBlur={() => setHoveredTab(null)}
                      style={styles.tab}
                      className="tab-mobile"
                    >
                      <span
                        style={{
                          ...styles.text,
                          color: isActive ? "#ffffff" : "#dcb8eb",
                        }}
                      >
                        {tab}
                      </span>

                      {/* Pílula de Hover: Passa sempre por trás da ativa (zIndex: 1) */}
                      {isHovered && (
                        <motion.div
                          layoutId="hover-pill-anim"
                          transition={{
                            type: "spring",
                            bounce: 0.15,
                            duration: 0.4,
                          }}
                          style={styles.singleHoverPill}
                        />
                      )}

                      {/* Pílula Ativa: Fica em destaque (zIndex: 2) */}
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.5,
                          }}
                          style={styles.activePill}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

const styles = {
  // Container exclusivo da logo do CEUB (absolute = rola com a página)
  logoContainer: {
    position: "absolute",
    top: "20px",
    left: "40px",
    zIndex: 1010,
    pointerEvents: "auto",
  },

  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: "20px 0",
    pointerEvents: "none",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    width: "95px", // Alterar o tamanho da logo aqui
  },
  logoImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },

  spacer: {
    width: "95px", // Deve ser igual à largura da logoLink
    pointerEvents: "none",
  },

  navWrapper: {
    display: "flex",
    justifyContent: "center",
    pointerEvents: "auto",
  },

  nav: {
    position: "relative",
    padding: "6px",
    borderRadius: "999px",
  },

  backgroundsContainer: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    borderRadius: "999px",
    pointerEvents: "none",
  },
  navBgOuter: {
    position: "absolute",
    inset: 0,
    borderRadius: "999px",
    background:
      "linear-gradient(to bottom, rgba(40, 15, 60, 0.75), rgba(20, 5, 30, 0.85))",
    backdropFilter: "blur(12px)", // Efeito Glassmorphism
    WebkitBackdropFilter: "blur(12px)",
    boxShadow:
      "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
  },
  navBgInner: {
    position: "absolute",
    inset: "2px",
    borderRadius: "999px",
    background: "rgba(20, 5, 30, 0.5)",
    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)",
  },

  buttonsContainer: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    gap: "7px",
    margin: 0,
    padding: 0,
    listStyle: "none", // Limpa os estilos padrão da tag <ul>
  },
  tab: {
    position: "relative",
    padding: "8px 24px",
    cursor: "pointer",
    border: "none",
    background: "transparent",
    fontSize: "16px",
    fontWeight: "500",
    outline: "none",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "relative",
    zIndex: 5, // Mantém o texto sobrepondo as pílulas animadas
    transition: "color 0.3s ease",
    pointerEvents: "none",
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
  },

  // EFEITOS E CORES DAS PÍLULAS ANIMADAS
  activePill: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    borderRadius: "999px",
    background: "linear-gradient(to bottom, #8640be, #662c92)",
    boxShadow:
      "0 2px 4px rgba(0,0,0,0.4), inset 0 2px 2px rgba(255,255,255,0.4)",
    pointerEvents: "none",
  },
  singleHoverPill: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    borderRadius: "999px",
    background:
      "linear-gradient(to bottom, rgba(102, 44, 146, 0.8), rgba(60, 20, 90, 0.8))",
    boxShadow:
      "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 2px 4px rgba(0,0,0,0.5)",
    pointerEvents: "none",
  },
  fullHoverPill: {
    position: "absolute",
    inset: "6px",
    zIndex: 2,
    borderRadius: "999px",
    background:
      "linear-gradient(to bottom, rgba(102, 44, 146, 0.15), rgba(102, 44, 146, 0.05))",
    pointerEvents: "none",
  },
};
