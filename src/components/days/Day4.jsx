import { useState, useEffect } from 'react'
import './Day4.css'

function Day4() {
  const [teddyState, setTeddyState] = useState('idle') // 'idle', 'hugging', 'celebrating', 'walkingAway', 'gone'
  const [selectedSticker, setSelectedSticker] = useState(null)
  const [readStickers, setReadStickers] = useState([])
  const [collectedMessages, setCollectedMessages] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)

  const stickerMessages = [
    {
      id: 1,
      position: { top: '15%', left: '15%' },
      emoji: '💕',
      message: "You're more cuddly than the softest teddy bear! 🧸💕"
    },
    {
      id: 2,
      position: { top: '20%', right: '10%' },
      emoji: '🎀',
      message: "I can't bear to be without you - you're un-bear-ably cute! 🐻💗"
    },
    {
      id: 3,
      position: { top: '45%', left: '10%' },
      emoji: '⭐',
      message: "Every day with you feels like a warm teddy bear hug! 🤗✨"
    },
    {
      id: 4,
      position: { top: '50%', right: '5%' },
      emoji: '🌸',
      message: "You're bear-y special to me - my favorite cuddle buddy! 🐻💕"
    },
    {
      id: 5,
      position: { top: '75%', left: '35%' },
      emoji: '💝',
      message: "Life would be un-bear-able without you in it! You're my everything! 💖"
    }
  ]

  const handleTeddyClick = () => {
    if (teddyState === 'idle' || teddyState === 'hugging') {
      setTeddyState('hugging')
      setTimeout(() => {
        setTeddyState('idle')
      }, 2000)
    }
  }

  const handleStickerClick = (sticker) => {
    if (readStickers.includes(sticker.id)) return
    
    setSelectedSticker(sticker)
  }

  const closeSticker = () => {
    if (selectedSticker && !readStickers.includes(selectedSticker.id)) {
      const newReadStickers = [...readStickers, selectedSticker.id]
      setReadStickers(newReadStickers)
      
      setCollectedMessages([...collectedMessages, {
        id: selectedSticker.id,
        emoji: selectedSticker.emoji,
        text: selectedSticker.message
      }])

      // Check if all stickers are read
      if (newReadStickers.length === stickerMessages.length) {
        setTimeout(() => {
          setTeddyState('celebrating')
          setShowConfetti(true)
          
          setTimeout(() => {
            setShowConfetti(false)
            setTeddyState('walkingAway')
            setTimeout(() => {
              setTeddyState('gone')
            }, 2500)
          }, 3000)
        }, 500)
      }
    }
    setSelectedSticker(null)
  }

  return (
    <div className="teddy-day-page">
      {/* Confetti */}
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: ['#ff6b9d', '#ffb3c1', '#d2691e', '#ffd700', '#ff8fa3'][i % 5]
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="teddy-header">
        <div className="teddy-badge">
          <span className="teddy-emoji-pulse">🧸</span>
        </div>
        <h1 className="teddy-title">Teddy Day</h1>
        <p className="teddy-subtitle">Give yourself a hug and click the stickers! 🧸💕</p>
        <p className="teddy-date">February 10, 2026</p>
      </div>

      {/* Main Content */}
      <div className="teddy-container">
        {/* Teddy Bear Section */}
        {teddyState !== 'gone' && (
          <div className="teddy-bear-section">
            <h2 className="section-title">Your Teddy Bear</h2>
                        <p className="teddy-hint">
              {teddyState === 'idle' && `Click Teddy for a hug! ${stickerMessages.length - readStickers.length} sticker${stickerMessages.length - readStickers.length === 1 ? '' : 's'} left to discover! ✨`}
              {teddyState === 'hugging' && 'Hugging! 🤗💕'}
              {teddyState === 'celebrating' && 'All stickers found! Teddy is so happy! 🎉'}
              {teddyState === 'walkingAway' && 'Goodbye for now! 👋'}
            </p>
            <div 
              className={`teddy-bear ${teddyState}`}
              onClick={handleTeddyClick}
              style={{ cursor: teddyState === 'idle' ? 'pointer' : 'default' }}
            >
              {/* Teddy Head */}
              <div className="teddy-head">
                <div className="teddy-ear left"></div>
                <div className="teddy-ear right"></div>
                <div className="teddy-face">
                  <div className="teddy-eyes">
                    <div className="teddy-eye left"></div>
                    <div className="teddy-eye right"></div>
                  </div>
                  <div className="teddy-snout">
                    <div className="teddy-nose"></div>
                    <div className="teddy-mouth"></div>
                  </div>
                </div>
              </div>

              {/* Teddy Body */}
              <div className="teddy-body-main">
                <div className="teddy-chest-heart">💝</div>
                
                {/* Stickers on teddy */}
                {stickerMessages.map((sticker) => (
                  <div
                    key={sticker.id}
                    className={`teddy-sticker ${readStickers.includes(sticker.id) ? 'read' : ''}`}
                    style={{
                      top: sticker.position.top,
                      left: sticker.position.left,
                      right: sticker.position.right
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleStickerClick(sticker)
                    }}
                  >
                    {readStickers.includes(sticker.id) ? '✓' : sticker.emoji}
                  </div>
                ))}
              </div>

              {/* Teddy Arms */}
              <div className="teddy-arms">
                <div className="teddy-arm left"></div>
                <div className="teddy-arm right"></div>
              </div>

              {/* Teddy Legs */}
              <div className="teddy-legs">
                <div className="teddy-leg left"></div>
                <div className="teddy-leg right"></div>
              </div>
            </div>
          </div>
        )}

        {/* Collected Messages */}
        {collectedMessages.length > 0 && (
          <div className="collected-messages-section">
            <h2 className="section-title">Teddy's Sweet Messages</h2>
            <div className="messages-grid">
              {collectedMessages.map((msg, index) => (
                <div
                  key={msg.id}
                  className="message-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="message-icon">{msg.emoji}</div>
                  <p className="message-text">{msg.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Goodbye Message */}
        {teddyState === 'gone' && (
          <div className="goodbye-message">
            <div className="goodbye-sparkles">
              <span>✨</span>
              <span>🧸</span>
              <span>💕</span>
              <span>✨</span>
            </div>
            <h2 className="goodbye-text">Bear Hugs Forever!</h2>
            <p className="goodbye-message-text">
              Thank you for all the cuddles and love! You're un-bear-ably wonderful! 🧸💗
            </p>
            <p className="goodbye-signature">- Your Teddy Bear, forever cuddle buddy 🐻💕</p>
          </div>
        )}
      </div>

      {/* Sticker Modal */}
      {selectedSticker && (
        <div className="sticker-modal-overlay" onClick={closeSticker}>
          <div className="sticker-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeSticker}>✕</button>
            <div className="sticker-card">
              <div className="sticker-icon">{selectedSticker.emoji}</div>
              <p className="sticker-message">{selectedSticker.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Day4
