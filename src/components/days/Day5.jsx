    import { useState } from 'react'
    import './Day5.css'

    function Day5() {
    const [selectedScroll, setSelectedScroll] = useState(null)
    const [readScrolls, setReadScrolls] = useState([])
    const [jarState, setJarState] = useState('full') // 'full', 'empty', 'celebrating'

    const promiseScrolls = [
        {
        id: 1,
        position: { top: '5%', left: '5%', rotation: -15 },
        color: '#ffb6c1',
        promise: "I promise to always make you laugh, even when you're trying to be mad at me! 😄💕"
        },
        {
        id: 2,
        position: { top: '5%', left: '70%', rotation: 20 },
        color: '#ffd7e5',
        promise: "I promise to be your personal chef, waiter, and dishwasher (especially when I mess up the kitchen)! 🍳❤️"
        },
        {
        id: 3,
        position: { top: '30%', left: '3%', rotation: 10 },
        color: '#ffe4e1',
        promise: "I promise to always choose you - in every universe, every timeline, every life! 🌌💗"
        },
        {
        id: 4,
        position: { top: '30%', left: '72%', rotation: -25 },
        color: '#fff0f5',
        promise: "I promise to give you forehead kisses every single day, no matter what! 😘✨"
        },
        {
        id: 5,
        position: { top: '55%', left: '5%', rotation: 15 },
        color: '#ffb6d9',
        promise: "I promise to listen to all your stories, even the ones you've told me three times already! 👂💕"
        },
        {
        id: 6,
        position: { top: '55%', left: '70%', rotation: -10 },
        color: '#ffc8dd',
        promise: "I promise to be your biggest cheerleader, your safe space, and your adventure buddy! 🎉❤️"
        },
        {
        id: 7,
        position: { top: '78%', left: '3%', rotation: 5 },
        color: '#ffd4e5',
        promise: "I promise to hold your hand through every storm and dance with you in every sunshine! ☀️🌧️💗"
        },
        {
        id: 8,
        position: { top: '78%', left: '72%', rotation: -20 },
        color: '#ffe0f0',
        promise: "I promise to love you more with each passing day - infinity has nothing on us! ♾️💕"
        }
    ]

    const handleScrollClick = (scrollId) => {
        if (readScrolls.includes(scrollId)) return
        setSelectedScroll(scrollId)
    }

    const closeScroll = () => {
        if (selectedScroll && !readScrolls.includes(selectedScroll)) {
        const newReadScrolls = [...readScrolls, selectedScroll]
        setReadScrolls(newReadScrolls)
        
        // Check if all scrolls are read
        if (newReadScrolls.length === promiseScrolls.length) {
            setTimeout(() => {
            setJarState('empty')
            setTimeout(() => {
                setJarState('celebrating')
            }, 500)
            }, 300)
        }
        }
        setSelectedScroll(null)
    }

    const scrollsRemaining = promiseScrolls.length - readScrolls.length

    return (
        <div className="promise-day-page">
        {/* Header */}
        <div className="promise-header">
            <div className="promise-badge">
            <span className="promise-emoji-pulse">🏺</span>
            </div>
            <h1 className="promise-title">Promise Day</h1>
            <p className="promise-subtitle">Open each scroll to discover my promises to you! 📜💕</p>
            <p className="promise-date">February 11, 2026</p>
        </div>

        {/* Main Content */}
        <div className="promise-content">
            {jarState !== 'celebrating' && (
            <div className="jar-section">
                <p className="jar-hint">
                {scrollsRemaining > 0 
                    ? `Click the scrolls to read them! ${scrollsRemaining} promise${scrollsRemaining === 1 ? '' : 's'} waiting... 📜✨`
                    : jarState === 'full' 
                    ? 'All promises revealed! 💝'
                    : 'The jar is empty... but your heart is full! 💗'
                }
                </p>

                <div className={`promise-jar ${jarState}`}>
                {/* Jar body */}
                <div className="jar-body">
                    <div className="jar-shine"></div>
                    <div className="jar-label">
                    <span className="label-text">Promises</span>
                    <span className="label-subtitle">for Mish</span>
                    </div>
                    
                    {/* Scrolls inside jar */}
                    <div className="scrolls-container">
                    {promiseScrolls.map((scroll) => {
                        const isRead = readScrolls.includes(scroll.id)
                        const isSelected = selectedScroll === scroll.id
                        
                        if (isRead && jarState === 'empty') return null
                        
                        return (
                        <div
                            key={scroll.id}
                            className={`scroll ${isRead ? 'read' : ''} ${isSelected ? 'selected' : ''}`}
                            style={{
                            top: scroll.position.top,
                            left: scroll.position.left,
                            right: scroll.position.right,
                            transform: `rotate(${scroll.position.rotation}deg)`,
                            backgroundColor: scroll.color,
                            cursor: isRead ? 'default' : 'pointer',
                            opacity: isRead ? 0.3 : 1
                            }}
                            onClick={() => handleScrollClick(scroll.id)}
                        >
                            <div className="scroll-ribbon"></div>
                            <div className="scroll-seal">💕</div>
                        </div>
                        )
                    })}
                    </div>
                </div>

                {/* Jar lid */}
                <div className="jar-lid">
                    <div className="lid-top"></div>
                    <div className="lid-band"></div>
                </div>
                </div>
            </div>
            )}

            {/* Scroll Modal */}
            {selectedScroll && (
            <div className="scroll-modal-overlay" onClick={closeScroll}>
                <div className="scroll-modal" onClick={(e) => e.stopPropagation()}>
                <div className="unfurled-scroll">
                    <div className="scroll-rod scroll-rod-top"></div>
                    <div className="scroll-paper">
                    <div className="scroll-decoration">✨ 💕 ✨</div>
                    <p className="scroll-promise">
                        {promiseScrolls.find(s => s.id === selectedScroll)?.promise}
                    </p>
                    <div className="scroll-signature">- Kits</div>
                    </div>
                    <div className="scroll-rod scroll-rod-bottom"></div>
                </div>
                <button className="close-scroll-btn" onClick={closeScroll}>
                    Keep This Promise 💝
                </button>
                </div>
            </div>
            )}

            {/* Collected Promises */}
            {readScrolls.length > 0 && jarState !== 'celebrating' && (
            <div className="collected-promises">
                <h3 className="collected-title">Promises I've Made to You 💕</h3>
                <div className="promises-grid">
                {readScrolls.map((scrollId, index) => {
                    const scroll = promiseScrolls.find(s => s.id === scrollId)
                    return (
                    <div 
                        key={scrollId} 
                        className="promise-card"
                        style={{ 
                        animationDelay: `${index * 0.1}s`,
                        borderColor: scroll.color
                        }}
                    >
                        <div className="promise-card-icon">📜</div>
                        <p className="promise-card-text">{scroll.promise}</p>
                    </div>
                    )
                })}
                </div>
            </div>
            )}

            {/* Final Message */}
            {jarState === 'celebrating' && (
            <div className="celebration-message">
                <div className="celebration-sparkles">
                {[...Array(20)].map((_, i) => (
                    <span 
                    key={i} 
                    className="sparkle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                    >
                    ✨
                    </span>
                ))}
                </div>
                <div className="celebration-content">
                <h2 className="celebration-title">All Promises Revealed! 💝</h2>
                <div className="final-promise-box">
                    <p className="final-promise-text">
                    Mish, these aren't just words written on scrolls.
                    <br />
                    They're promises I'll keep every single day.
                    <br />
                    <strong>Because loving you isn't a promise I make - it's who I am.</strong>
                    </p>
                    <div className="promise-seal-big">
                    <span className="seal-text">Sealed with Love</span>
                    <span className="seal-icon">💕</span>
                    <span className="seal-signature">- Kits</span>
                    </div>
                </div>
                </div>
            </div>
            )}
        </div>
        </div>
    )
    }

    export default Day5
