import { useState } from 'react'
import './Day6.css'

function Day6() {
  const [hugStage, setHugStage] = useState(0) // 0-7 stages
  const [showMessage, setShowMessage] = useState(false)

  const hugStages = [
    {
      name: 'Standing Apart',
      instruction: 'Click to bring them closer! 💕',
      message: "Sometimes the best hugs start with a little distance... just so we can run into each other's arms! 🏃‍♂️💨",
      distance: 500
    },
    {
      name: 'Walking Closer',
      instruction: 'Getting closer... Keep clicking! 🚶‍♂️🚶‍♀️',
      message: "Every step towards you feels like coming home. My heart beats faster with each step closer! 💓",
      distance: 400
    },
    {
      name: 'Almost There',
      instruction: 'Almost in reach! Click again! 🤗',
      message: "Just a few more steps and I can wrap you in the warmest hug! I can already feel the happiness! ✨",
      distance: 300
    },
    {
      name: 'First Touch',
      instruction: 'Arms reaching out! 🫱🫲',
      message: "The moment our hands touch, everything else fades away. It's just you and me! 💫",
      distance: 200
    },
    {
      name: 'Gentle Hug',
      instruction: 'Aww, a gentle embrace! Click for more! 🤗',
      message: "This is where I belong - in your arms. Your hug is my safe space, my happy place! 💕",
      distance: 100
    },
    {
      name: 'Tight Hug',
      instruction: 'Squeezing tighter! Keep going! 🫂',
      message: "Holding you tight like I never want to let go... because honestly, I don't! You're my everything! 💗",
      distance: 40
    },
    {
      name: 'Spinning Hug',
      instruction: 'Spinning with joy! One more! 🌀💕',
      message: "When I'm with you, the whole world spins! You make me dizzy with happiness! 🌟",
      distance: 20
    },
    {
      name: 'Perfect Embrace',
      instruction: 'Perfect! 💝',
      message: "This is it. The perfect hug. With you, everything is perfect. I love you more than words can say! 💕✨",
      distance: 0
    }
  ]

  const handleClick = () => {
    if (hugStage < hugStages.length - 1) {
      setShowMessage(true)
      setTimeout(() => {
        setHugStage(hugStage + 1)
        setShowMessage(false)
      }, 2000)
    }
  }

  const currentStage = hugStages[hugStage]
  const isComplete = hugStage === hugStages.length - 1

  return (
    <div className="hug-day-page">
      {/* Header */}
      <div className="hug-header">
        <div className="hug-badge">
          <span className="hug-emoji-pulse">🤗</span>
        </div>
        <h1 className="hug-title">Hug Day</h1>
        <p className="hug-subtitle">Bring Kits and Mish together for the perfect hug! 💕</p>
        <p className="hug-date">February 12, 2026</p>
      </div>

      {/* Progress */}
      <div className="hug-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(hugStage / (hugStages.length - 1)) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">Stage {hugStage + 1} of {hugStages.length}: {currentStage.name}</p>
      </div>

      {/* Main Hug Scene */}
      <div className="hug-scene">
        <p className="hug-instruction">{currentStage.instruction}</p>
        
        <div 
          className={`hug-container ${isComplete ? 'complete' : ''}`}
          onClick={!isComplete ? handleClick : undefined}
          style={{ cursor: !isComplete ? 'pointer' : 'default' }}
        >
          {/* Hearts floating around when hugging */}
          {hugStage >= 4 && (
            <div className="floating-hearts">
              {[...Array(10)].map((_, i) => (
                <span 
                  key={i} 
                  className="float-heart"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  💕
                </span>
              ))}
            </div>
          )}

          {/* Kits Character */}
          <div 
            className={`character kits stage-${hugStage}`}
            style={{ 
              transform: `translateX(${currentStage.distance / 2}px)`,
              transition: 'transform 0.8s ease-out'
            }}
          >
            <div className="char-body">
              <div className="char-head">
                <div className="char-face">
                  <div className="eye left">😊</div>
                  <div className="char-smile">😄</div>
                </div>
              </div>
              <div className="char-torso"></div>
              <div className={`char-arms ${hugStage >= 4 ? 'hugging' : ''}`}>
                <div className="arm left"></div>
                <div className="arm right"></div>
              </div>
            </div>
            <p className="char-label">Kits</p>
          </div>

          {/* Mish Character */}
          <div 
            className={`character mish stage-${hugStage}`}
            style={{ 
              transform: `translateX(-${currentStage.distance / 2}px)`,
              transition: 'transform 0.8s ease-out'
            }}
          >
            <div className="char-body">
              <div className="char-head">
                <div className="char-face">
                  <div className="eye right">😊</div>
                  <div className="char-smile">😄</div>
                </div>
              </div>
              <div className="char-torso"></div>
              <div className={`char-arms ${hugStage >= 4 ? 'hugging' : ''}`}>
                <div className="arm left"></div>
                <div className="arm right"></div>
              </div>
            </div>
            <p className="char-label">Mish</p>
          </div>

          {/* Spinning effect */}
          {hugStage === 6 && (
            <div className="spin-overlay">
              <div className="spin-circle"></div>
            </div>
          )}
        </div>

        {/* Message Display */}
        {showMessage && (
          <div className="hug-message-popup">
            <p>{currentStage.message}</p>
          </div>
        )}
      </div>

      {/* Collected Messages */}
      {hugStage > 0 && (
        <div className="collected-hug-messages">
          <h3 className="collected-title">Our Journey to the Perfect Hug 💕</h3>
          <div className="messages-grid">
            {hugStages.slice(0, hugStage + 1).map((stage, index) => (
              <div 
                key={index} 
                className="hug-message-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="message-stage">Stage {index + 1}: {stage.name}</div>
                <p className="message-text">{stage.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Final Celebration */}
      {isComplete && (
        <div className="hug-celebration">
          <div className="celebration-sparkles">
            {[...Array(30)].map((_, i) => (
              <span 
                key={i} 
                className="sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              >
                ✨
              </span>
            ))}
          </div>
          <div className="celebration-content">
            <h2 className="celebration-title">The Perfect Hug! 🤗💕</h2>
            <p className="celebration-message">
              Mish, every hug with you is perfect. Every moment in your arms is home.
              <br />
              <strong>You're my favorite person to hug, today and always! 💗</strong>
            </p>
            <div className="love-signature">- Kits 💕</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Day6
