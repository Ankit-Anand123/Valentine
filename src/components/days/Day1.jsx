import "./Day1.css";
import { useEffect, useMemo, useState } from "react";

function Day1() {
  const [petalState, setPetalState] = useState({});
  const [floatingRoses, setFloatingRoses] = useState([]);
  const [showAllMessages, setShowAllMessages] = useState(false);

  const petalMessages = useMemo(
    () => [
      {
        id: 1,
        ring: 1,
        angle: 0,
        message: "You make my heart bloom! 🌹",
        pun: "I'm not rose-ing to the occasion, I'm blooming for you!",
      },
      {
        id: 2,
        ring: 1,
        angle: 120,
        message: "Every petal reminds me of a reason I love you 💕",
        pun: "Red roses are red, violets are blue, but nothing in this world compares to you!",
      },
      {
        id: 3,
        ring: 2,
        angle: 60,
        message: "You're my garden of happiness! 🌸",
        pun: "Our love is like a rose garden - beautiful, timeless, and worth every thorn!",
      },
      {
        id: 4,
        ring: 2,
        angle: 180,
        message: "You're absolutely blooming wonderful! ✨",
        pun: "They say stop and smell the roses, but I'd rather stop and admire you!",
      },
      {
        id: 5,
        ring: 3,
        angle: 30,
        message: "My love for you will never wilt 🌹💕",
        pun: "A dozen roses couldn't compare to the way you make my heart skip!",
      },
      {
        id: 6,
        ring: 3,
        angle: 150,
        message: "You're the rose of my life! 💗",
        pun: "I'm thorn between loving you and loving you even more!",
      },
      {
        id: 7,
        ring: 4,
        angle: 90,
        message: "Handle with care – you hold my heart! 💝",
        pun: "Roses are red, my face is too, that only happens when I think of you!",
      },
      {
        id: 8,
        ring: 4,
        angle: 270,
        message: "You're more beautiful than any bouquet! 🌺",
        pun: "I'd choose a day with you over a garden full of roses any day!",
      },
    ],
    []
  );

  useEffect(() => {
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

      return { ...prev, [petalId]: "open" };
    });
  };

  useEffect(() => {
    if (!showAllMessages && allPetalsOpen) {
      const t = window.setTimeout(() => setShowAllMessages(true), 800);
      return () => window.clearTimeout(t);
    }
  }, [allPetalsOpen, showAllMessages]);

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

      {/* Rose */}
      <div className="rose-container">
        <div className="rose-main">
          {/* The beautiful CSS art rose */}
          <div className="rose-art">
            {/* Render petals in 4 rings */}
            {[1, 2, 3, 4].map((ringNum) => {
              const petalsInRing = ringNum === 1 ? 3 : ringNum === 2 ? 4 : ringNum === 3 ? 5 : 6;
              const ringRadius = ringNum === 1 ? 75 : ringNum === 2 ? 125 : ringNum === 3 ? 170 : 205;
              const petalSize = ringNum === 1 ? 85 : ringNum === 2 ? 105 : ringNum === 3 ? 120 : 130;
              const spinOffset = ringNum * 12;
              
              return (
                <div
                  key={ringNum}
                  className={`rose-ring ring-${ringNum}`}
                  style={{ '--ring-tilt': `${ringNum * 3}deg` }}
                >
                  {Array.from({ length: petalsInRing }).map((_, i) => (
                    <div
                      key={i}
                      className="rose-art-petal"
                      style={{
                        '--a': `${(360 / petalsInRing) * i}deg`,
                        '--s': `${spinOffset}deg`,
                        '--ring-radius': `${ringRadius}px`,
                        '--petal-size': `${petalSize}px`,
                        '--sc': ringNum === 1 ? 0.9 : ringNum === 4 ? 1.08 : 1,
                        '--i': i,
                      }}
                    />
                  ))}
                </div>
              );
            })}

            {/* Center bud */}
            <div className="rose-bud" />

            {/* Lighting veil */}
            <div className="rose-veil" />

            {/* Clickable hotspots for messages */}
            {petalMessages.map((petal) => {
              const open = isOpen(petal.id);
              const closing = isClosing(petal.id);
              
              // Position hotspots around the rose
              const positions = {
                1: { left: '50%', top: '15%', size: 'inner' },
                2: { left: '75%', top: '28%', size: 'inner' },
                3: { left: '25%', top: '28%', size: 'middle' },
                4: { left: '82%', top: '50%', size: 'middle' },
                5: { left: '18%', top: '50%', size: 'outer' },
                6: { left: '70%', top: '75%', size: 'outer' },
                7: { left: '30%', top: '75%', size: 'outer' },
                8: { left: '50%', top: '82%', size: 'outer' },
              };
              
              const pos = positions[petal.id];
              
              return (
                <div
                  key={petal.id}
                  className={`rose-petal-hotspot hotspot-${pos.size} ${open ? 'petal-open' : ''} ${
                    closing ? 'petal-closing' : ''
                  }`}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => handlePetalClick(petal.id)}
                  role="button"
                  aria-label={`Open message ${petal.id}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handlePetalClick(petal.id);
                    }
                  }}
                >
                  <span className="hotspot-halo" />

                  {(open || closing) && (
                    <div className={`petal-message-popup ${closing ? 'popup-closing' : ''}`}>
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

          {/* Stem */}
          <div className="rose-stem">
            <div className="leaf leaf-left">🍃</div>
            <div className="leaf leaf-right">🍃</div>
          </div>

          {/* Center icon */}
          <div className="rose-center">
            <div className="rose-core" />
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