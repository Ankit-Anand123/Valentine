import { useState, useEffect } from 'react'
import './Day3.css'

function Day3() {
  const [wrapperState, setWrapperState] = useState('wrapped') // 'wrapped', 'peeling', 'unwrapped'
  const [chocolateSlices, setChocolateSlices] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [eatenSlices, setEatenSlices] = useState([])
  const [currentMessage, setCurrentMessage] = useState(null)
  const [collectedMessages, setCollectedMessages] = useState([])
  const [mishState, setMishState] = useState('waiting') // 'waiting', 'eating', 'walkingAway', 'gone'
  const [showMessagePopup, setShowMessagePopup] = useState(false)

  const chocolateMessages = [
    "You're sweeter than the finest chocolate! 🍫💕",
    "Life with you is like chocolate - always delicious! 😋",
    "I'd share my last piece of chocolate with you... that's true love! 💗",
    "You make my heart melt faster than chocolate in the sun! ☀️🍫",
    "We're mint to be together! 🍬✨",
    "You're the chocolate chips in my cookie of life! 🍪💕",
    "Our love is like dark chocolate: rich, intense, and good for the heart! ❤️",
    "Sweet on you like frosting on a cake! 🎂💗",
    "Chocolate is great, but you're the real treat! 🍭",
    "You add sweetness to every moment of my life! 💝🍫"
  ]

  const handleWrapperClick = () => {
    if (wrapperState === 'wrapped') {
      setWrapperState('peeling')
      setTimeout(() => {
        setWrapperState('unwrapped')
      }, 1000)
    }
  }

  const handleSliceClick = (sliceIndex) => {
    if (eatenSlices.includes(sliceIndex) || wrapperState !== 'unwrapped') return

    // Mish eats the chocolate
    setMishState('eating')
    setEatenSlices([...eatenSlices, sliceIndex])
    
    // Show message popup
    setCurrentMessage(chocolateMessages[sliceIndex])
    setShowMessagePopup(true)

    // After animation, return to waiting and hide popup
    setTimeout(() => {
      setMishState('waiting')
      setShowMessagePopup(false)
      // Add message to collected messages
      setCollectedMessages([...collectedMessages, {
        id: sliceIndex,
        text: chocolateMessages[sliceIndex]
      }])

      // Check if all chocolate is eaten
      if (eatenSlices.length + 1 === chocolateSlices.length) {
        setTimeout(() => {
          setMishState('walkingAway')
          setTimeout(() => {
            setMishState('gone')
          }, 2000)
        }, 500)
      }
    }, 3000)
  }

  const slicesRemaining = chocolateSlices.length - eatenSlices.length

  return (
    <div className="chocolate-day-page">
      {/* Header */}
      <div className="chocolate-header">
        <div className="chocolate-badge">
          <span className="chocolate-emoji-pulse">🍫</span>
        </div>
        <h1 className="chocolate-title">Chocolate Day</h1>
        <p className="chocolate-subtitle">Unwrap the chocolate and feed Mish! 🍫💕</p>
        <p className="chocolate-date">February 9, 2026</p>
      </div>

      {/* Main Content */}
      <div className="chocolate-container">
        {/* Chocolate Bar Section */}
        <div className="chocolate-bar-section">
          <h2 className="section-title">Sweet Chocolate Bar</h2>
          
          {/* Chocolate Wrapper */}
          <div 
            className={`chocolate-wrapper ${wrapperState}`}
            onClick={handleWrapperClick}
            style={{ cursor: wrapperState === 'wrapped' ? 'pointer' : 'default' }}
          >
            {wrapperState === 'wrapped' && (
              <div className="wrapper-front">
                <div className="wrapper-label">
                  <div className="brand-name">Kits ❤️ Mish</div>
                  <div className="chocolate-icon">🍫</div>
                  <div className="wrapper-text">Premium Chocolate</div>
                  <div className="wrapper-instruction">Click to unwrap!</div>
                </div>
              </div>
            )}

            {wrapperState === 'peeling' && (
              <>
                <div className="wrapper-front peeling-left"></div>
                <div className="wrapper-back peeling-right"></div>
                <div className="chocolate-bar revealed"></div>
              </>
            )}

            {wrapperState === 'unwrapped' && (
              <div className="chocolate-bar">
                <div className="chocolate-grid">
                  {chocolateSlices.map((slice) => (
                    <div
                      key={slice}
                      className={`chocolate-slice ${eatenSlices.includes(slice) ? 'eaten' : ''}`}
                      onClick={() => handleSliceClick(slice)}
                      style={{ cursor: eatenSlices.includes(slice) ? 'default' : 'pointer' }}
                    >
                      {!eatenSlices.includes(slice) && (
                        <div className="slice-number">{slice + 1}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <p className="chocolate-hint">
            {wrapperState === 'wrapped' && 'Click to peel the wrapper! ✨'}
            {wrapperState === 'peeling' && 'Unwrapping... 🎁'}
            {wrapperState === 'unwrapped' && slicesRemaining > 0 && `${slicesRemaining} piece${slicesRemaining === 1 ? '' : 's'} left - Click to feed Mish! 💕`}
            {wrapperState === 'unwrapped' && slicesRemaining === 0 && 'All chocolate eaten! Yummy! 😋'}
          </p>
        </div>

        {/* Mish Character */}
        {mishState !== 'gone' && (
          <div className={`mish-character ${mishState}`}>
            <div className="mish-body">
              <div className="mish-head">
                <div className="mish-hair"></div>
                <div className="mish-face">
                  <div className="mish-eyes">
                    <div className="mish-eye left"></div>
                    <div className="mish-eye right"></div>
                  </div>
                  <div className={`mish-mouth ${mishState === 'eating' ? 'eating' : ''}`}></div>
                </div>
              </div>
              <div className="mish-torso"></div>
              <div className="mish-arms">
                <div className="mish-arm left"></div>
                <div className="mish-arm right"></div>
              </div>
            </div>
            
            {/* Speech bubble when eating */}
            {mishState === 'eating' && showMessagePopup && (
              <div className="mish-speech-bubble">
                <p>{currentMessage}</p>
              </div>
            )}
          </div>
        )}

        {/* Collected Messages */}
        {collectedMessages.length > 0 && (
          <div className="collected-messages-section">
            <h2 className="section-title">Kits's Sweet Words for Mish</h2>
            <div className="messages-grid">
              {collectedMessages.map((msg, index) => (
                <div
                  key={msg.id}
                  className="message-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="message-icon">🍫</div>
                  <p className="message-text">{msg.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Goodbye Message */}
        {mishState === 'gone' && (
          <div className="goodbye-message">
            <div className="goodbye-sparkles">
              <span>✨</span>
              <span>💕</span>
              <span>🍫</span>
              <span>✨</span>
            </div>
            <h2 className="goodbye-text">Was that delicious?</h2>
            <p className="goodbye-message-text">
              Thank you for being the sweetest chocolate and the sweetest love! 💕
            </p>
            <p className="goodbye-signature">- Kits, your chocolate-loving sweetheart 🍫💗</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Day3
