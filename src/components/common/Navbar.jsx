import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Início", path: "/" },
  { name: "Ver oficinas", path: "/oficinas" },
  { name: "Pitaco", path: "/pitaco" },
  { name: "Equipe", path: "/equipe" },
];

export default function FlawlessPillNavbar({ currentPath = "/" }) {
  const [clientPath, setClientPath] = useState(currentPath);

  // Esconde a Navbar flutuante inteira se o usuário estiver na tela de playlist (o player foca total no vídeo).
  if (clientPath.startsWith("/playlist")) {
    return null;
  }

  // Descobre qual botão da Navbar deve ficar "ativo" (roxo) lendo a URL que o usuário está acessando agora.
  const getActiveTabFromPath = (path) => {
    const normalizedPath =
      path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;

    const currentItem = navItems.find((item) => {
      if (item.path === "/") {
        return normalizedPath === "/";
      }
      return (
        normalizedPath === item.path ||
        normalizedPath.startsWith(item.path + "/")
      );
    });

    return currentItem ? currentItem.name : "Início";
  };

  const [activeTab, setActiveTab] = useState(() =>
    getActiveTabFromPath(currentPath),
  );
  const [hoveredTab, setHoveredTab] = useState(null);

  const isPitaco = clientPath.startsWith("/pitaco");
  const styles = getStyles(isPitaco);

  useEffect(() => {
    const syncURL = () => {
      const newPath = window.location.pathname;
      setClientPath(newPath);
      setActiveTab(getActiveTabFromPath(newPath));
    };

    document.addEventListener("astro:page-load", syncURL);
    window.addEventListener("popstate", syncURL);

    syncURL();

    return () => {
      document.removeEventListener("astro:page-load", syncURL);
      window.removeEventListener("popstate", syncURL);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
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
          .nav-link {
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>

      <div style={styles.headerContainer} className="header-container-mobile">
        <div style={styles.navWrapper} className="nav-scroll-mobile">
          <nav
            aria-label="Navegação principal"
            style={styles.nav}
            onMouseLeave={() => setHoveredTab(null)}
          >
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

            <ul role="list" style={styles.buttonsContainer}>
              {/* Varre os botões e acende a luz no exato em que estamos acessando ou dando hover */}
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                const isHovered = hoveredTab === item.name;

                return (
                  <li key={item.name} style={{ display: "flex" }}>
                    <a
                      href={item.path}
                      aria-current={isActive ? "page" : undefined}
                      onMouseEnter={() => setHoveredTab(item.name)}
                      onFocus={() => setHoveredTab(item.name)}
                      onBlur={() => setHoveredTab(null)}
                      style={styles.tab}
                      className="tab-mobile nav-link"
                    >
                      <span
                        style={{
                          ...styles.text,
                          color: isActive
                            ? isPitaco
                              ? "#0d041a"
                              : "var(--text-main)"
                            : "var(--text-muted)",
                          textShadow:
                            isActive && isPitaco
                              ? "none"
                              : "0 1px 2px rgba(0,0,0,0.3)",
                        }}
                      >
                        {item.name}
                      </span>

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
                    </a>
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

const getStyles = (isPitaco) => ({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    padding: "36px 0",
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
    background: isPitaco
      ? "linear-gradient(to bottom, rgba(20, 30, 60, 0.85), rgba(10, 15, 30, 0.95))"
      : "linear-gradient(to bottom, rgba(40, 15, 60, 0.75), rgba(20, 5, 30, 0.85))",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow:
      "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
  },

  navBgInner: {
    position: "absolute",
    inset: "2px",
    borderRadius: "999px",
    background: isPitaco ? "rgba(10, 15, 30, 0.6)" : "rgba(20, 5, 30, 0.5)",
    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)",
  },

  buttonsContainer: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    gap: "7px",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  tab: {
    position: "relative",
    padding: "8px 24px",
    cursor: "pointer",
    border: "none",
    background: "transparent",
    fontSize: "16px",
    fontWeight: "600",
    outline: "none",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "relative",
    zIndex: 5,
    transition: "color 0.3s ease",
    pointerEvents: "none",
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
  },

  activePill: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    borderRadius: "999px",
    background: isPitaco
      ? "linear-gradient(to bottom, #8bed65, #7adb53)"
      : "linear-gradient(to bottom, var(--purple-light), var(--purple-primary))",
    boxShadow: isPitaco
      ? "0 2px 8px rgba(122, 219, 83, 0.4), inset 0 2px 2px rgba(255,255,255,0.5)"
      : "0 2px 4px rgba(0,0,0,0.4), inset 0 2px 2px rgba(255,255,255,0.4)",
    pointerEvents: "none",
  },
  singleHoverPill: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    borderRadius: "999px",
    background: isPitaco
      ? "linear-gradient(to bottom, rgba(40, 58, 134, 0.9), rgba(20, 30, 80, 0.9))"
      : "linear-gradient(to bottom, rgba(102, 44, 146, 0.8), rgba(60, 20, 90, 0.8))",
    boxShadow:
      "inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 2px 4px rgba(0,0,0,0.5)",
    pointerEvents: "none",
  },
  fullHoverPill: {
    position: "absolute",
    inset: "6px",
    zIndex: 2,
    borderRadius: "999px",
    background: isPitaco
      ? "linear-gradient(to bottom, rgba(40, 58, 134, 0.25), rgba(40, 58, 134, 0.05))"
      : "linear-gradient(to bottom, rgba(102, 44, 146, 0.15), rgba(102, 44, 146, 0.05))",
    pointerEvents: "none",
  },
});
