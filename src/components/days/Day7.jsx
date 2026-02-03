import { useState } from 'react'
import './Day7.css'

function Day7() {
  const [selectedItem, setSelectedItem] = useState(null)

  const dayData = {
    emoji: '💋',
    title: 'Kiss Day',
    date: 'Feb 13',
    color: '#ff1744',
    interactiveItems: [
      { emoji: '💋', label: 'Kiss', message: "Sending virtual kisses your way! 💋💕 You're simply kiss-met - it was meant to be! Your smile is more irresistible than any kiss, and every moment with you deserves a celebration 🎉. I'd never miss a chance to tell you how much I care! You're the miss to my kiss! 😘✨" },
      { emoji: '😘', label: 'Blow Kiss', message: "Here's a flying kiss across the miles! 😘 Your kisses (even the imaginary ones) make my heart skip a beat 💓. You make every day feel special, and I can't wait for all the sweet moments ahead. Catch this kiss and keep it forever! 💝" },
      { emoji: '💖', label: 'Love Kiss', message: "Every kiss begins with you! 💖 You make my heart race, my face blush, and my world complete. Here's to us and all the sweet moments we share. You're not just amazing, you're absolutely kiss-tastic! 💋✨ Forever and always! 💕" }
    ],
    messages: [
      "Sending virtual kisses your way! 💋💕",
      "Your smile is more irresistible than any kiss!",
      "Every moment with you deserves a celebration! 🎉",
      "You make my heart skip a beat! 💓",
      "Here's to us and all the sweet moments! 💝",
      "You're simply kiss-met! It was meant to be! 💋",
      "I'd never miss a chance to tell you how much I care! 💕",
      "You're the miss to my kiss! 😘"
    ]
  }

  return (
    <>
      <div className="day-content" style={{ borderTopColor: dayData.color }}>
        <div className="day-header">
          <h2 className="day-title bounce" style={{ color: dayData.color }}>
            {dayData.emoji} {dayData.title}
          </h2>
          <p className="day-date-text">{dayData.date}, 2026</p>
        </div>

        <div className="interactive-items">
          {dayData.interactiveItems.map((item, idx) => (
            <button
              key={idx}
              className={`interactive-btn fade-in-delay-${idx % 3}`}
              onClick={() => setSelectedItem(item)}
              style={{ borderColor: dayData.color }}
            >
              <span className="item-emoji">{item.emoji}</span>
              <span className="item-label">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="all-messages">
          {dayData.messages.map((message, idx) => (
            <div key={idx} className={`message-card fade-in-delay-${idx % 3}`}>
              <p>{message}</p>
            </div>
          ))}
        </div>

        <div className="extra-love">
          <div className="sparkle">✨</div>
          <p className="love-note">
            Every kiss, every hug, every moment with you is pure magic! 💋💝
          </p>
          <div className="sparkle">✨</div>
        </div>
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="big-message-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>✕</button>
            <div className="modal-emoji">{selectedItem.emoji}</div>
            <h3 className="modal-title">{selectedItem.label}</h3>
            <p className="modal-message">{selectedItem.message}</p>
            <button className="modal-close-btn" onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Day7
