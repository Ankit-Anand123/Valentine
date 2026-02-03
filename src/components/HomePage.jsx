import { useState, useRef, useEffect } from 'react'

function HomePage({ onAccept, accepted }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [noClickCount, setNoClickCount] = useState(0)
  const [floatingMessages, setFloatingMessages] = useState([])
  const areaRef = useRef(null)

  const loveMessages = [
    "You make my heart skip! 💓",
    "Forever yours 💕",
    "You're my sunshine ☀️",
    "Love you to the moon 🌙",
    "My everything 💝",
    "Sweet like sugar 🍬",
    "You complete me 💗",
    "Crazy about you 😍",
    "My happy place 🌈",
    "Perfect together 💞"
  ]

  const noButtonTexts = [
    "NO 🙈",
    "Wait... NO? 🤔",
    "Really? 🥺",
    "Think again! 💭",
    "Pretty please? 🙏",
    "Are you sure? 😢",
    "Last chance! ⚠️",
    "Okay fine... YES! 😍"
  ]

  useEffect(() => {
    // Generate floating messages
    const messages = []
    for (let i = 0; i < 12; i++) {
      messages.push({
        id: i,
        text: loveMessages[i % loveMessages.length],
        left: Math.random() * 100,
        animationDuration: 20 + Math.random() * 15,
        animationDelay: Math.random() * 10,
        fontSize: 12 + Math.random() * 6
      })
    }
    setFloatingMessages(messages)
  }, [])

  const handleNoHover = () => {
    if (areaRef.current && noClickCount < 7) {
      const area = areaRef.current.getBoundingClientRect()
      const maxX = area.width - 120
      const maxY = area.height - 60
      
      setNoPosition({
        x: Math.random() * maxX,
        y: Math.random() * maxY
      })
    }
  }

  const handleNoClick = () => {
    setNoClickCount(prev => {
      const newCount = prev + 1
      if (newCount >= 7) {
        setTimeout(() => onAccept(), 500)
      }
      return newCount
    })
    handleNoHover()
  }

  const handleYesClick = () => {
    onAccept()
  }

  return (
    <section className="home-page">
      {/* Floating love messages */}
      <div className="floating-messages">
        {floatingMessages.map(msg => (
          <div
            key={msg.id}
            className="love-message-float"
            style={{
              left: `${msg.left}%`,
              animationDuration: `${msg.animationDuration}s`,
              animationDelay: `${msg.animationDelay}s`,
              fontSize: `${msg.fontSize}px`
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="home-container">
        <div className="home-header">
          <div className="greeting-badge">
            <span className="wave">👋</span>
            <span className="greeting-text">Hey Mish!</span>
          </div>
          <h1 className="main-title">
            <span className="title-line">Will you be</span>
            <span className="title-highlight">My Valentine?</span>
          </h1>
          <div className="subtitle">
            <p className="subtitle-text">
              From Kits, who's totally calm and not at all nervous...
            </p>
            <p className="subtitle-small">
              (Okay fine, heart rate: 180 bpm 💓)
            </p>
          </div>
        </div>

        {!accepted ? (
          <>
            <div className="love-quotes">
              <div className="quote-item quote-1">
                <div className="quote-icon">💕</div>
                <p>"You're the reason I believe in love"</p>
              </div>
              <div className="quote-item quote-2">
                <div className="quote-icon">✨</div>
                <p>"Every moment with you is magic"</p>
              </div>
              <div className="quote-item quote-3">
                <div className="quote-icon">🌟</div>
                <p>"You make my world brighter"</p>
              </div>
            </div>

            <div className="question-container">
              <div className="question-box">
                <div className="pulsing-hearts">
                  <span className="heart-icon">❤️</span>
                  <span className="heart-icon">💕</span>
                  <span className="heart-icon">💗</span>
                </div>
                
                <div className="buttons-area" ref={areaRef}>
                  <button 
                    className="btn-yes" 
                    onClick={handleYesClick}
                  >
                    <span className="btn-text">YES!</span>
                    <span className="btn-emoji">😍</span>
                  </button>
                  <button 
                    className="btn-no" 
                    onMouseEnter={handleNoHover}
                    onClick={handleNoClick}
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      transform: noPosition.x ? `translate(${noPosition.x}px, -${noPosition.y}px)` : 'none'
                    }}
                  >
                    <span className="btn-text">{noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}</span>
                  </button>
                </div>

                <p className="hint-text">
                  Psst... the NO button is shy. It runs away! 🏃‍♂️💨
                </p>
              </div>
            </div>

            <div className="fun-facts">
              <div className="fact-card">
                <div className="fact-emoji">🎯</div>
                <p>This page was made with 100% pure love (and maybe 2% caffeine)</p>
              </div>
              <div className="fact-card">
                <div className="fact-emoji">🎪</div>
                <p>Clicking NO 7 times unlocks a secret... or does it? 😏</p>
              </div>
            </div>
          </>
        ) : (
          <div className="celebration-container">
            <div className="celebration-animation">
              <div className="confetti">🎉</div>
              <div className="confetti">✨</div>
              <div className="confetti">💕</div>
              <div className="confetti">🎊</div>
              <div className="confetti">💝</div>
              <div className="confetti">🌟</div>
            </div>
            <h2 className="celebration-title">She said YES! 🎉💍</h2>
            <p className="celebration-text">
              My heart just grew three sizes! 💓✨
            </p>
            <p className="celebration-subtext">
              You've just made me the happiest person alive! Now let's make this Valentine Week absolutely unforgettable! 😍
            </p>
            <div className="next-steps">
              <p className="next-instruction">
                ✨ Click on the <strong>day buttons</strong> above to explore our magical Valentine Week journey! 
              </p>
              <p className="next-subtext">
                (Each day unlocks on its actual date, but you can peek at what's coming!) 🌹💕
              </p>
            </div>
            <div className="loading-hearts">
              <span className="loading-heart">❤️</span>
              <span className="loading-heart">💕</span>
              <span className="loading-heart">💗</span>
            </div>
          </div>
        )}

        <div className="bottom-puns">
          <div className="pun-bubble pun-1">
            <p>🌹 If you were a flower, you'd be a damn-delion!</p>
          </div>
          <div className="pun-bubble pun-2">
            <p>🍕 You've stolen a pizza my heart!</p>
          </div>
          <div className="pun-bubble pun-3">
            <p>🎵 You're the melody to my harmony!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
