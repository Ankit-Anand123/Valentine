import { useState, useEffect, useRef } from 'react'
import './Day7.css'

function Day7() {
  const [kissCounts, setKissCounts] = useState({})
  const [recentMessage, setRecentMessage] = useState(null)
  const [floatingKisses, setFloatingKisses] = useState([])
  const [achievements, setAchievements] = useState([])
  const [totalKissesAnimated, setTotalKissesAnimated] = useState(0)
  const [particles, setParticles] = useState([])
  const [counterSparkles, setCounterSparkles] = useState([])

  const kissTypes = [
    {
      id: 'forehead',
      emoji: '😘',
      name: 'Forehead Kiss',
      color: '#c51162',
      messages: [
        "A gentle forehead kiss - you're my safe place, my comfort, my home 🏡💕",
        "This kiss says 'I'll protect you always' - you mean everything to me! 💖",
        "Forehead kisses are for the ones we cherish most... that's you, Mish! 💫"
      ]
    },
    {
      id: 'cheek',
      emoji: '😊',
      name: 'Cheek Kiss',
      color: '#ff1744',
      messages: [
        "A sweet cheek kiss - you make me smile brighter than the sun! ☀️💕",
        "Your cheeks are so kissable! Everything about you is adorable! 🥰",
        "Cheek kisses for the cutest person in the world - my Mish! 💖"
      ]
    },
    {
      id: 'butterfly',
      emoji: '🦋',
      name: 'Butterfly Kiss',
      color: '#f50057',
      messages: [
        "Butterfly kisses with our eyelashes - gentle and magical, just like us! 🦋✨",
        "The softest, sweetest way to say 'I love you'... butterfly kisses! 💕",
        "Our butterfly kisses create magic that lasts forever! 🌟"
      ]
    },
    {
      id: 'eskimo',
      emoji: '❄️',
      name: 'Eskimo Kiss',
      color: '#ad1457',
      messages: [
        "Rubbing noses - it's playful, it's us, it's perfect! 🥰❄️",
        "Eskimo kisses because you warm my heart even in the coldest times! 💙",
        "Our silly little nose rubs that mean the world to me! 💕"
      ]
    },
    {
      id: 'hand',
      emoji: '🤝',
      name: 'Hand Kiss',
      color: '#880e4f',
      messages: [
        "A gentle kiss on your hand - you deserve to be treated like royalty! 👑💕",
        "Hand kisses for my queen! You're elegant, beautiful, and everything! 💖",
        "Every part of you deserves all my love and kisses! ✨"
      ]
    },
    {
      id: 'lips',
      emoji: '💋',
      name:'Lips Kiss',
      color: '#d81b60',
      messages: [
        "The sweetest kiss for the sweetest person - I love you more than words! 💋💕",
        "Every kiss with you feels like the first time - magical and perfect! ✨",
        "My favorite place in the world is right here, kissing you! 💖",
        "You're kiss-tastic! Absolutely kiss-merizing! I'm so kiss-met we found each other! 😘"
      ]
    }
  ]

  const milestones = [
    { total: 10, message: "10 kisses! We're just getting started! 💕", emoji: "🌟" },
    { total: 25, message: "25 kisses! You're absolutely kiss-able! 💋", emoji: "✨" },
    { total: 50, message: "50 kisses! Half a hundred smooches for my favorite person! 😘", emoji: "🎉" },
    { total: 75, message: "75 kisses! I could kiss you a million times and never get tired! 💖", emoji: "💫" },
    { total: 100, message: "100 KISSES! You're officially the most kissed person in my heart! 💋💕", emoji: "🎊" },
    { total: 150, message: "150 kisses! Every single one filled with love for you! 💝", emoji: "🌈" },
    { total: 200, message: "200 kisses! You deserve infinity kisses and more! ♾️💕", emoji: "💖" }
  ]

  // Initialize background particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: ['💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 5)],
      left: Math.random() * 100,
      delay: Math.random() * 20
    }))
    setParticles(initialParticles)
  }, [])

  // Initialize orbiting sparkles around counter
  useEffect(() => {
    const sparkles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      emoji: '✨',
      delay: i * 1
    }))
    setCounterSparkles(sparkles)
  }, [])

  // Animate total kisses counter
  useEffect(() => {
    const total = getTotalKisses()
    if (total !== totalKissesAnimated) {
      const increment = total > totalKissesAnimated ? 1 : -1
      const timer = setTimeout(() => {
        setTotalKissesAnimated(prev => {
          const next = prev + increment
          return increment > 0 ? Math.min(next, total) : Math.max(next, total)
        })
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [kissCounts, totalKissesAnimated])

  const addKiss = (kissType) => {
    const newCounts = { ...kissCounts }
    newCounts[kissType.id] = (newCounts[kissType.id] || 0) + 1
    setKissCounts(newCounts)

    // Show random message
    const messages = kissType.messages
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    setRecentMessage({ text: randomMessage, color: kissType.color })
    setTimeout(() => setRecentMessage(null), 4000)

    // Add explosion of floating kiss animations
    const numberOfKisses = Math.floor(Math.random() * 4) + 3 // 3-6 kisses
    for (let i = 0; i < numberOfKisses; i++) {
      setTimeout(() => {
        const kissId = Date.now() + i
        setFloatingKisses(prev => [...prev, { 
          id: kissId, 
          emoji: kissType.emoji, 
          x: Math.random() * 80 + 10 
        }])
        setTimeout(() => {
          setFloatingKisses(prev => prev.filter(k => k.id !== kissId))
        }, 4000)
      }, i * 120)
    }

    // Check milestones
    const totalKisses = Object.values(newCounts).reduce((a, b) => a + b, 0)
    const milestone = milestones.find(m => m.total === totalKisses)
    if (milestone && !achievements.find(a => a.total === milestone.total)) {
      setAchievements(prev => [...prev, milestone])
      setTimeout(() => {
        setAchievements(prev => prev.filter(a => a.total !== milestone.total))
      }, 7000)
    }
  }

  const getTotalKisses = () => {
    return Object.values(kissCounts).reduce((a, b) => a + b, 0)
  }

  return (
    <div className="kiss-day-page">
      {/* Background Particles */}
      <div className="particle-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`
            }}
          >
            {particle.emoji}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="kiss-header">
        <div className="kiss-badge">
          <span className="kiss-emoji-pulse">💋</span>
        </div>
        <h1 className="kiss-title">Kiss Day</h1>
        <p className="kiss-subtitle">Collect all the kisses! Each one comes with love 💕</p>
        <p className="kiss-subtitle" style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.9 }}>
          🎯 Unlock special milestones as you collect more kisses!
        </p>
        <p className="kiss-date">February 13, 2026</p>
      </div>

      {/* Total Counter - Cinematic */}
      <div className="total-kiss-counter">
        <div className="total-display">
          {/* Orbiting sparkles */}
          {counterSparkles.map(sparkle => (
            <span
              key={sparkle.id}
              className="counter-sparkle"
              style={{
                color: ['#ffd700', '#ff1744', '#f50057', '#c51162'][sparkle.id % 4],
                animationDelay: `${sparkle.delay}s`
              }}
            >
              {sparkle.emoji}
            </span>
          ))}
          
          <span className="total-number">{totalKissesAnimated}</span>
          <span className="total-label">Total Kisses</span>
        </div>
      </div>

      {/* Kiss Collection Grid */}
      <div className="kiss-collection">
        {kissTypes.map((kissType, index) => (
          <div 
            key={kissType.id} 
            className="kiss-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div 
              className="kiss-button"
              onClick={() => addKiss(kissType)}
              style={{ 
                '--kiss-color': kissType.color,
              }}
            >
              <span className="kiss-type-emoji">{kissType.emoji}</span>
              <div className="kiss-info">
                <h3 className="kiss-name" style={{ color: kissType.color }}>
                  {kissType.name}
                </h3>
                <div 
                  className="kiss-count"
                  style={{ '--kiss-color': kissType.color }}
                >
                  {kissCounts[kissType.id] || 0} kisses
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Message */}
      {recentMessage && (
        <div className="kiss-message-popup" style={{ borderColor: recentMessage.color }}>
          <p>{recentMessage.text}</p>
        </div>
      )}

      {/* Floating Kiss Animations */}
      <div className="floating-kiss-container">
        {floatingKisses.map(kiss => (
          <div 
            key={kiss.id} 
            className="floating-kiss"
            style={{ left: `${kiss.x}%` }}
          >
            {kiss.emoji}
          </div>
        ))}
      </div>

      {/* Achievement Popup */}
      {achievements.map(achievement => (
        <div key={achievement.total} className="achievement-popup">
          <span className="achievement-emoji">{achievement.emoji}</span>
          <p className="achievement-text">{achievement.message}</p>
        </div>
      ))}

      {/* Kiss Stats */}
      {getTotalKisses() > 0 && (
        <div className="kiss-stats">
          <h3 className="stats-title">Your Kiss Collection</h3>
          <div className="stats-grid">
            {kissTypes.map(kissType => {
              const count = kissCounts[kissType.id] || 0
              if (count === 0) return null
              return (
                <div 
                  key={kissType.id} 
                  className="stat-item"
                  style={{ '--kiss-color': kissType.color }}
                >
                  <span className="stat-emoji">{kissType.emoji}</span>
                  <span className="stat-name">{kissType.name}</span>
                  <span 
                    className="stat-count" 
                    style={{ color: kissType.color }}
                  >
                    ×{count}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Final Message */}
      {getTotalKisses() >= 100 && (
        <div className="kiss-celebration">
          <div className="celebration-sparkles">
            {[...Array(50)].map((_, i) => {
              const angle = (i / 50) * 360
              const radius = 150 + Math.random() * 100
              const x = Math.cos(angle * Math.PI / 180) * radius
              const y = Math.sin(angle * Math.PI / 180) * radius
              
              return (
                <span 
                  key={i} 
                  className="sparkle"
                  style={{
                    left: '50%',
                    top: '50%',
                    '--x': `${x}px`,
                    '--y': `${y}px`,
                    animationDelay: `${(i / 50) * 6}s`
                  }}
                >
                  💋
                </span>
              )
            })}
          </div>
          <div className="celebration-content">
            <h2 className="celebration-title">Kiss Master! 💋✨</h2>
            <p className="celebration-message">
              Mish, every kiss is a promise. A promise to love you, cherish you, and be there for you always.
              <br />
              <br />
              <strong>You're my favorite person to kiss, today and forever! 💕</strong>
            </p>
            <div className="love-signature">— Kits 💋</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Day7