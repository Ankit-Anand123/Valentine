import { useState } from 'react'
import './Day8.css'

function Day8() {
  const [capsuleOpen, setCapsuleOpen] = useState(false)
  const [celebrating, setCelebrating] = useState(false)
  const [showFinalMessage, setShowFinalMessage] = useState(false)

  const weekJourney = [
    {
      day: 'Day 1',
      title: 'Rose Day',
      emoji: '🌹',
      color: '#ff1493',
      memory: 'Every rose I gave you bloomed with love...'
    },
    {
      day: 'Day 2',
      title: 'Propose Day',
      emoji: '💍',
      color: '#ffd700',
      memory: 'The day I asked you to be mine forever!'
    },
    {
      day: 'Day 3',
      title: 'Chocolate Day',
      emoji: '🍫',
      color: '#8b4513',
      memory: 'Sweet moments, sweeter with you...'
    },
    {
      day: 'Day 4',
      title: 'Teddy Day',
      emoji: '🧸',
      color: '#cd853f',
      memory: 'Cuddly hugs and warm embraces...'
    },
    {
      day: 'Day 5',
      title: 'Promise Day',
      emoji: '🤞',
      color: '#9370db',
      memory: 'Promises made, forever kept...'
    },
    {
      day: 'Day 6',
      title: 'Hug Day',
      emoji: '🤗',
      color: '#ff6b9d',
      memory: 'Your arms are my home...'
    },
    {
      day: 'Day 7',
      title: 'Kiss Day',
      emoji: '💋',
      color: '#ff1744',
      memory: 'Every kiss tells our love story...'
    }
  ]

  const handleOpenCapsule = () => {
    setCapsuleOpen(true)
  }

  const handleCelebrate = () => {
    setCelebrating(true)
    setTimeout(() => {
      setShowFinalMessage(true)
    }, 2000)
  }

  return (
    <div className="valentine-finale-page">
      {/* Animated Background */}
      <div className="dark-background">
        <div className="stars">
          {[...Array(100)].map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              ✨
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="valentine-header">
        <h1 className="valentine-title">Happy Valentine's Day! 💕</h1>
        <p className="valentine-date">February 14, 2026</p>
        <p className="valentine-subtitle">Our Love Capsule - 7 Days of Love</p>
      </div>

      {/* Love Capsule */}
      <div className="capsule-container">
        <div className={`love-capsule ${capsuleOpen ? 'opened' : ''}`} onClick={!capsuleOpen ? handleOpenCapsule : undefined}>
          {!capsuleOpen && <p className="capsule-hint">Click to open the capsule 💊💕</p>}
          
          {/* Capsule Shell - Top Half */}
          <div className="capsule-top"></div>
          
          {/* Capsule Shell - Bottom Half */}
          <div className="capsule-bottom"></div>
          
          {/* Capsule Contents */}
          {capsuleOpen && (
            <div className="capsule-contents">
              <h2 className="contents-title">Our Journey Through Love Week 💝</h2>
              <div className="memories-grid">
                {weekJourney.map((day, index) => (
                  <div 
                    key={index} 
                    className="memory-item"
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      borderColor: day.color
                    }}
                  >
                    <div className="memory-emoji" style={{ color: day.color }}>
                      {day.emoji}
                    </div>
                    <div className="memory-title">{day.title}</div>
                    <div className="memory-text">{day.memory}</div>
                  </div>
                ))}
              </div>

              {/* Celebrate Button */}
              {!celebrating && (
                <button className="celebrate-btn" onClick={handleCelebrate}>
                  Let's Celebrate! 🎉
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Light Show Celebration */}
      {celebrating && (
        <div className="light-show">
          {/* Fireworks */}
          <div className="fireworks-container">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="firework"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>

          {/* Laser Beams */}
          <div className="laser-beams">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="laser-beam"
                style={{
                  left: `${i * 7}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>

          {/* Floating Hearts */}
          <div className="celebration-hearts">
            {[...Array(50)].map((_, i) => (
              <span
                key={i}
                className="heart-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  fontSize: `${Math.random() * 30 + 15}px`
                }}
              >
                💕
              </span>
            ))}
          </div>

          {/* Sparkle Effect */}
          <div className="sparkle-overlay">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="sparkle-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              >
                ✨
              </div>
            ))}
          </div>

          {/* Final Grand Message */}
          {showFinalMessage && (
            <div className="final-message">
              <div className="message-glow"></div>
              <div className="message-content">
                <h1 className="message-title">My Dearest Mish 💖</h1>
                <div className="message-body">
                  <p className="message-para">
                    Seven days, seven celebrations, but only one truth—
                  </p>
                  <p className="message-highlight">
                    I am endlessly, hopelessly, completely in love with you.
                  </p>
                  <p className="message-para">
                    Every rose was for you. Every promise, for us. Every hug brought me home. 
                    Every kiss sealed our forever.
                  </p>
                  <p className="message-para">
                    You are my sunrise and my moonlight, my laughter and my peace, 
                    my today and all my tomorrows.
                  </p>
                  <p className="message-highlight-big">
                    You are my everything, Mish. 💕
                  </p>
                  <p className="message-para">
                    Happy Valentine's Day, my love. Thank you for being mine.
                  </p>
                  <div className="message-signature">
                    <p>Forever yours,</p>
                    <h2>Kits 💝</h2>
                    <p className="message-date">February 14, 2026</p>
                  </div>
                </div>
                <div className="message-hearts">
                  <span>💕</span> <span>💖</span> <span>💗</span> <span>💝</span> <span>💕</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Day8
