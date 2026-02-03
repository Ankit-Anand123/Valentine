import { useState, useEffect } from 'react'
import './Day2.css'

function Day2() {
  const [boxState, setBoxState] = useState('closed') // 'closed', 'opening', 'open', 'disappearing', 'gone'
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const [showingLetter, setShowingLetter] = useState(false)
  const [placedLetters, setPlacedLetters] = useState([])
  const [floatingHearts, setFloatingHearts] = useState([])
  const [showFinalProposal, setShowFinalProposal] = useState(false)
  const [rereadingLetter, setRereadingLetter] = useState(null)

  const loveLetters = [
    {
      id: 1,
      title: "My Promise",
      preview: "Dear Mish...",
      message: "I promise to make you smile every single day, to be your biggest cheerleader, and to love you more with each passing moment. You + Me = Forever isn't just math, it's destiny! 💕",
      color: "#ff6b9d"
    },
    {
      id: 2,
      title: "Forever Yours",
      preview: "To my love...",
      message: "I propose we make every day as sweet as today! You've stolen a pizza my heart (sorry, had to!), and I wouldn't want it back. I'm no photographer, but I can definitely picture us together forever! 📸💕",
      color: "#ff8fa3"
    },
    {
      id: 3,
      title: "The Question",
      preview: "Will you...",
      message: "Will you continue being the best thing that's ever happened to me? Let's stay this cute forever! Are you a parking ticket? Because you've got FINE written all over you, and I'm willing to pay that price every single day! 🥰",
      color: "#ffb3c1"
    },
    {
      id: 4,
      title: "My Heart",
      preview: "You are...",
      message: "You are my sunshine on cloudy days, my laughter in quiet moments, my everything! I don't need a ring to know you're the one, but I'm still giving you my whole heart wrapped in a bow! 💝",
      color: "#ffc9d6"
    }
  ]

  useEffect(() => {
    // Generate floating hearts
    const hearts = []
    for (let i = 0; i < 20; i++) {
      hearts.push({
        id: i,
        emoji: ['💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 5)],
        left: Math.random() * 100,
        animationDuration: 20 + Math.random() * 15,
        animationDelay: Math.random() * 10,
        size: 12 + Math.random() * 20
      })
    }
    setFloatingHearts(hearts)
  }, [])

  const handleBoxClick = () => {
    if (boxState === 'closed') {
      // Open box and show first letter
      setBoxState('opening')
      setTimeout(() => {
        setBoxState('open')
        setShowingLetter(true)
      }, 800)
    } else if (boxState === 'open' && !showingLetter && currentLetterIndex < loveLetters.length) {
      // Show next letter
      setShowingLetter(true)
    }
  }

  const closeLetter = () => {
    setShowingLetter(false)
    
    // Add current letter to placed letters
    setPlacedLetters([...placedLetters, loveLetters[currentLetterIndex]])
    
    // Move to next letter
    const nextIndex = currentLetterIndex + 1
    setCurrentLetterIndex(nextIndex)
    
    // Check if all letters are read
    if (nextIndex >= loveLetters.length) {
      // All letters read - make box disappear
      setTimeout(() => {
        setBoxState('disappearing')
        setTimeout(() => {
          setBoxState('gone')
          setShowFinalProposal(true)
        }, 800)
      }, 500)
    }
  }

  const lettersRemaining = loveLetters.length - currentLetterIndex

  return (
    <div className="propose-day-page">
      {/* Floating hearts background */}
      <div className="floating-hearts-bg">
        {floatingHearts.map(heart => (
          <div
            key={heart.id}
            className="floating-heart-item"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
              animationDelay: `${heart.animationDelay}s`,
              fontSize: `${heart.size}px`
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="propose-header">
        <div className="propose-badge">
          <span className="propose-emoji-pulse">💍</span>
        </div>
        <h1 className="propose-title">Propose Day</h1>
        <p className="propose-subtitle">Open the box to read my love letters 💕</p>
        <p className="propose-date">February 8, 2026</p>
      </div>

      {/* Main Content */}
      <div className="propose-container">
        {/* Ring Box - only show if not gone */}
        {boxState !== 'gone' && (
          <div className="ring-box-section">
            <h2 className="section-title">The Love Box</h2>
            <div 
              className={`ring-box ${boxState}`}
              onClick={handleBoxClick}
              style={{ cursor: boxState === 'open' && !showingLetter && lettersRemaining > 0 ? 'pointer' : boxState === 'closed' ? 'pointer' : 'default' }}
            >
              <div className="box-top">
                <div className="box-lid"></div>
                <div className="box-ribbon"></div>
              </div>
              <div className="box-bottom">
                <div className="box-interior">
                  {/* Show remaining letters count */}
                  {boxState === 'open' && lettersRemaining > 0 && (
                    <div className="letters-remaining">
                      {lettersRemaining} {lettersRemaining === 1 ? 'letter' : 'letters'} inside
                    </div>
                  )}
                  {boxState === 'open' && lettersRemaining === 0 && (
                    <div className="letters-remaining">Empty ✓</div>
                  )}
                </div>
              </div>
            </div>
            <p className="box-hint">
              {boxState === 'closed' && 'Click to open the box! ✨'}
              {boxState === 'opening' && 'Opening... 💫'}
              {boxState === 'open' && lettersRemaining > 0 && !showingLetter && 'Click again to get the next letter! 💌'}
              {boxState === 'open' && lettersRemaining > 0 && showingLetter && 'Read the letter ✉️'}
              {boxState === 'open' && lettersRemaining === 0 && 'All letters read! 💖'}
              {boxState === 'disappearing' && 'Magic happening... ✨'}
            </p>
          </div>
        )}

        {/* Placed Letters Grid */}
        {placedLetters.length > 0 && (
          <div className="love-letters-section">
            <h2 className="section-title">Your Love Letters</h2>
            <div className="letters-grid">
              {placedLetters.map((letter, index) => (
                <div
                  key={letter.id}
                  className="love-letter placed"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    borderColor: letter.color,
                  }}
                  onClick={() => setRereadingLetter(letter)}
                >
                  <div className="letter-seal">💌</div>
                  <h3 className="letter-title">{letter.title}</h3>
                  <p className="letter-preview">{letter.preview}</p>
                  <div className="letter-stamp">Click to read again</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final Proposal Message */}
        {showFinalProposal && (
          <div className="final-proposal">
            <div className="proposal-sparkles">
              <span>✨</span>
              <span>💫</span>
              <span>⭐</span>
              <span>✨</span>
            </div>
            <h2 className="proposal-text">My Proposal is Simple:</h2>
            <p className="proposal-message">
              Be mine, forever and always! 💍💕
            </p>
            <p className="proposal-signature">- Your Kits, who loves you more than words can say</p>
          </div>
        )}
      </div>

      {/* Letter Popup Modal */}
      {showingLetter && currentLetterIndex < loveLetters.length && (
        <div className="letter-modal-overlay" onClick={closeLetter}>
          <div className="letter-popup-animation">
            <div className="letter-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeLetter}>✕</button>
              <div className="letter-paper">
                <div className="letter-header">
                  <h3>{loveLetters[currentLetterIndex].title}</h3>
                  <div className="letter-decoration">💕</div>
                </div>
                <div className="letter-body">
                  <p>{loveLetters[currentLetterIndex].message}</p>
                </div>
                <div className="letter-footer">
                  <p className="letter-closing">With all my love,</p>
                  <p className="letter-signature-text">Kits 💝</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Re-reading Letter Modal */}
      {rereadingLetter && (
        <div className="letter-modal-overlay" onClick={() => setRereadingLetter(null)}>
          <div className="letter-popup-animation">
            <div className="letter-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setRereadingLetter(null)}>✕</button>
              <div className="letter-paper">
                <div className="letter-header">
                  <h3>{rereadingLetter.title}</h3>
                  <div className="letter-decoration">💕</div>
                </div>
                <div className="letter-body">
                  <p>{rereadingLetter.message}</p>
                </div>
                <div className="letter-footer">
                  <p className="letter-closing">With all my love,</p>
                  <p className="letter-signature-text">Kits 💝</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Day2