import "./Day1.css";
import { useEffect, useMemo, useState } from "react";

function Day1() {
  // petalState: { [id]: 'open' | 'closing' }
  const [petalState, setPetalState] = useState({});
  const [floatingRoses, setFloatingRoses] = useState([]);
  const [showAllMessages, setShowAllMessages] = useState(false);

  const petalMessages = useMemo(
    () => [
      {
        id: 1,
        layer: "front",
        position: "left-bottom",
        message: "You make my heart bloom! 🌹",
        pun: "I'm not rose-ing to the occasion, I'm blooming for you!",
      },
      {
        id: 2,
        layer: "front",
        position: "right-bottom",
        message: "Every petal reminds me of a reason I love you 💕",
        pun: "Red roses are red, violets are blue, but nothing in this world compares to you!",
      },
      {
        id: 3,
        layer: "middle",
        position: "left",
        message: "You're my garden of happiness! 🌸",
        pun: "Our love is like a rose garden - beautiful, timeless, and worth every thorn!",
      },
      {
        id: 4,
        layer: "middle",
        position: "right",
        message: "You're absolutely blooming wonderful! ✨",
        pun: "They say stop and smell the roses, but I'd rather stop and admire you!",
      },
      {
        id: 5,
        layer: "middle",
        position: "top-left",
        message: "My love for you will never wilt 🌹💕",
        pun: "A dozen roses couldn't compare to the way you make my heart skip!",
      },
      {
        id: 6,
        layer: "middle",
        position: "top-right",
        message: "You're the rose of my life! 💗",
        pun: "I'm thorn between loving you and loving you even more!",
      },
      {
        id: 7,
        layer: "back",
        position: "center-left",
        message: "Handle with care – you hold my heart! 💝",
        pun: "Roses are red, my face is too, that only happens when I think of you!",
      },
      {
        id: 8,
        layer: "back",
        position: "center-right",
        message: "You're more beautiful than any bouquet! 🌺",
        pun: "I'd choose a day with you over a garden full of roses any day!",
      },
    ],
    []
  );

  useEffect(() => {
    // Floating roses background
    const roses = [];
    for (let i = 0; i < 15; i++) {
      roses.push({
        id: i,
        emoji: ["🌹", "🌺", "🌸", "💐", "🥀"][Math.floor(Math.random() * 5)],
        left: Math.random() * 100,
        animationDuration: 25 + Math.random() * 20,
        animationDelay: Math.random() * 10,
        size: 15 + Math.random() * 25,
      });
    }
    setFloatingRoses(roses);
  }, []);

  const isOpen = (id) => petalState[id] === "open";
  const isClosing = (id) => petalState[id] === "closing";

  const openedCount = Object.values(petalState).filter((v) => v === "open").length;
  const allPetalsOpen = openedCount === petalMessages.length;

  const handlePetalClick = (petalId) => {
    setPetalState((prev) => {
      const cur = prev[petalId];

      // open -> closing
      if (cur === "open") {
        const next = { ...prev, [petalId]: "closing" };
        window.setTimeout(() => {
          setPetalState((p) => {
            const copy = { ...p };
            delete copy[petalId];
            return copy;
          });
        }, 600);
        return next;
      }

      // closed (or closing) -> open
      return { ...prev, [petalId]: "open" };
    });
  };

  useEffect(() => {
    if (!showAllMessages && allPetalsOpen) {
      const t = window.setTimeout(() => setShowAllMessages(true), 800);
      return () => window.clearTimeout(t);
    }
  }, [allPetalsOpen, showAllMessages]);

  // Position mapping for side-view petals
  const getPetalPosition = (position) => {
    const positions = {
      "left-bottom": { x: -60, y: 35, rotation: -25 },
      "right-bottom": { x: 60, y: 35, rotation: 25 },
      "left": { x: -75, y: 0, rotation: -15 },
      "right": { x: 75, y: 0, rotation: 15 },
      "top-left": { x: -45, y: -45, rotation: -35 },
      "top-right": { x: 45, y: -45, rotation: 35 },
      "center-left": { x: -30, y: -10, rotation: -8 },
      "center-right": { x: 30, y: -10, rotation: 8 },
    };
    return positions[position] || { x: 0, y: 0, rotation: 0 };
  };

  return (
    <div className="rose-day-page">
      {/* Floating roses background */}
      <div className="floating-roses-bg">
        {floatingRoses.map((rose) => (
          <div
            key={rose.id}
            className="floating-rose-item"
            style={{
              left: `${rose.left}%`,
              animationDuration: `${rose.animationDuration}s`,
              animationDelay: `${rose.animationDelay}s`,
              fontSize: `${rose.size}px`,
            }}
          >
            {rose.emoji}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="rose-header">
        <div className="rose-badge">
          <span className="rose-emoji-pulse">🌹</span>
        </div>
        <h1 className="rose-title">Rose Day</h1>
        <p className="rose-subtitle">Click each petal to unveil a message from my heart 💕</p>
        <p className="rose-date">February 7, 2026</p>
      </div>

      {/* Side-view Rose */}
      <div className="rose-container">
        <div className="rose-main-side">
          {/* Stem */}
          <div className="rose-stem-side">
            {/* Leaves on stem */}
            <div className="rose-leaf rose-leaf-1">
              <div className="leaf-shape">🍃</div>
            </div>
            <div className="rose-leaf rose-leaf-2">
              <div className="leaf-shape">🍃</div>
            </div>
          </div>

          {/* Rose bloom container */}
          <div className="rose-bloom-side">
            {/* Background petals (layer: back) */}
            <div className="petal-layer petal-layer-back">
              {petalMessages
                .filter((p) => p.layer === "back")
                .map((petal) => {
                  const open = isOpen(petal.id);
                  const closing = isClosing(petal.id);
                  const pos = getPetalPosition(petal.position);

                  return (
                    <div
                      key={petal.id}
                      className={`rose-petal-side ${open ? "petal-open" : ""} ${
                        closing ? "petal-closing" : ""
                      }`}
                      style={{
                        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
                        "--rot": `${pos.rotation}deg`,
                      }}
                      onClick={() => handlePetalClick(petal.id)}
                      role="button"
                      aria-label={`Open message ${petal.id}`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handlePetalClick(petal.id);
                      }}
                    >
                      <div className="petal-visual">
                        <span className="hotspot-halo" />
                      </div>

                      {(open || closing) && (
                        <div className={`petal-message-popup ${closing ? "popup-closing" : ""}`}>
                          <div className="popup-content">
                            <p className="popup-message">{petal.message}</p>
                            <p className="popup-pun">{petal.pun}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Middle petals (layer: middle) */}
            <div className="petal-layer petal-layer-middle">
              {petalMessages
                .filter((p) => p.layer === "middle")
                .map((petal) => {
                  const open = isOpen(petal.id);
                  const closing = isClosing(petal.id);
                  const pos = getPetalPosition(petal.position);

                  return (
                    <div
                      key={petal.id}
                      className={`rose-petal-side ${open ? "petal-open" : ""} ${
                        closing ? "petal-closing" : ""
                      }`}
                      style={{
                        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
                        "--rot": `${pos.rotation}deg`,
                      }}
                      onClick={() => handlePetalClick(petal.id)}
                      role="button"
                      aria-label={`Open message ${petal.id}`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handlePetalClick(petal.id);
                      }}
                    >
                      <div className="petal-visual">
                        <span className="hotspot-halo" />
                      </div>

                      {(open || closing) && (
                        <div className={`petal-message-popup ${closing ? "popup-closing" : ""}`}>
                          <div className="popup-content">
                            <p className="popup-message">{petal.message}</p>
                            <p className="popup-pun">{petal.pun}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Front petals (layer: front) */}
            <div className="petal-layer petal-layer-front">
              {petalMessages
                .filter((p) => p.layer === "front")
                .map((petal) => {
                  const open = isOpen(petal.id);
                  const closing = isClosing(petal.id);
                  const pos = getPetalPosition(petal.position);

                  return (
                    <div
                      key={petal.id}
                      className={`rose-petal-side ${open ? "petal-open" : ""} ${
                        closing ? "petal-closing" : ""
                      }`}
                      style={{
                        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
                        "--rot": `${pos.rotation}deg`,
                      }}
                      onClick={() => handlePetalClick(petal.id)}
                      role="button"
                      aria-label={`Open message ${petal.id}`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handlePetalClick(petal.id);
                      }}
                    >
                      <div className="petal-visual">
                        <span className="hotspot-halo" />
                      </div>

                      {(open || closing) && (
                        <div className={`petal-message-popup ${closing ? "popup-closing" : ""}`}>
                          <div className="popup-content">
                            <p className="popup-message">{petal.message}</p>
                            <p className="popup-pun">{petal.pun}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Center bud */}
            <div className="rose-center-bud" />
          </div>
        </div>

        {/* Progress indicator */}
        <div className="rose-progress">
          <p className="progress-text">
            {openedCount === 0 && "Start clicking the petals! 👆"}
            {openedCount > 0 && openedCount < petalMessages.length &&
              `${openedCount} of ${petalMessages.length} petals unveiled 🌹`}
            {allPetalsOpen && "All petals revealed! You've unlocked my heart! 💖"}
          </p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(openedCount / petalMessages.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Success section */}
      {showAllMessages && (
        <div className="all-petals-message">
          <div className="success-animation">
            <div className="success-confetti">🎉</div>
            <div className="success-confetti">🌹</div>
            <div className="success-confetti">💕</div>
            <div className="success-confetti">✨</div>
            <div className="success-confetti">💐</div>
            <div className="success-confetti">🌺</div>
          </div>
          <h2 className="success-title">You've Unlocked My Whole Heart! 💝</h2>
          <p className="success-text">
            Just like these petals, my love for you unfolds more and more each day.
            Every petal is a promise, every message is a piece of my soul dedicated to you.
          </p>
          <div className="success-quote">
            <p>
              "A rose by any other name would smell as sweet, but you, my love, are sweeter still."
            </p>
            <p className="quote-author">- Your devoted Kits 🌹</p>
          </div>
        </div>
      )}

      {/* Bottom puns */}
      <div className="rose-bottom-puns">
        <div className="rose-pun-card">
          <span className="pun-emoji">🌹</span>
          <p>Every rose has its thorn, but you're all petals – soft, beautiful, and perfect!</p>
        </div>
        <div className="rose-pun-card">
          <span className="pun-emoji">💐</span>
          <p>I'd stop and smell the roses, but I'd rather spend that time with you!</p>
        </div>
        <div className="rose-pun-card">
          <span className="pun-emoji">🌺</span>
          <p>You're not just a rose in my garden, you're the entire garden in my heart!</p>
        </div>
      </div>
    </div>
  );
}

export default Day1;