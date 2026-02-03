import { useEffect, useState } from 'react'

function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    // Generate random hearts
    const heartElements = []
    for (let i = 0; i < 15; i++) {
      heartElements.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 15 + Math.random() * 15,
        animationDelay: Math.random() * 8,
        size: 10 + Math.random() * 8
      })
    }
    setHearts(heartElements)
  }, [])

  return (
    <div className="hearts">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`
          }}
        />
      ))}
    </div>
  )
}

export default FloatingHearts
