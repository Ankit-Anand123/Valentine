import { useState } from 'react'
import './Day8.css'

function Day8() {
  const [selectedItem, setSelectedItem] = useState(null)

  const dayData = {
    emoji: '❤️',
    title: "Valentine's Day",
    date: 'Feb 14',
    color: '#ff0066',
    interactiveItems: [
      { emoji: '❤️', label: 'Heart', message: "Happy Valentine's Day to my favorite person! ❤️ You make every day feel like Valentine's Day, and my heart belongs to you today and every day! You're not just my Valentine, you're my everything! Thank you for being you - amazing, kind, and absolutely perfect! 🌟💕" },
      { emoji: '💐', label: 'Flowers', message: "You're the reason I believe in love! 💝 We're a perfect match - like coffee and mornings ☕, like stars and night sky, like love and happiness. You've got the key to my heart 🔑❤️, and I wouldn't have it any other way. Cheers to love, laughter, and happily ever after! 🥂💕" },
      { emoji: '🫒', label: 'Olive', message: "Olive you so much! (Get it? Olive = I love) 🫒💚 This might be cheesy, but you're the cheese to my macaroni, the peanut butter to my jelly, the perfect half of my whole. Thank you for making life so incredibly sweet. Today and always, you're my greatest Valentine! 💖✨" }
    ],
    messages: [
      "Happy Valentine's Day to my favorite person! ❤️",
      "You make every day feel like Valentine's Day! 💕",
      "Thank you for being you - amazing, kind, and absolutely perfect!",
      "My heart belongs to you today and every day! 💗",
      "You're not just my Valentine, you're my everything! 🌟",
      "Cheers to love, laughter, and happily ever after! 🥂💕",
      "You're the reason I believe in love! 💝",
      "We're a perfect match - like coffee and mornings! ☕",
      "You've got the key to my heart! 🔑❤️",
      "Olive you so much! (Get it? Olive = I love) 🫒💚"
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
            This is it - the grand finale! Every day led to this moment. You're my Valentine today, tomorrow, and forever! ❤️💫
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

export default Day8
