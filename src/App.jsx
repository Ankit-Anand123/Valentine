import { useState, useEffect } from 'react'
import './styles.css'
import HomePage from './components/HomePage'
import DaysPage from './components/DaysPage'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedDay, setSelectedDay] = useState(0)  // Track which day to show
  const [unlockedDay, setUnlockedDay] = useState(-1)  // Start with no days unlocked
  const [acceptedValentine, setAcceptedValentine] = useState(false)
  const [showLockedModal, setShowLockedModal] = useState(false)
  const [clickedDay, setClickedDay] = useState(null)

  const daysInfo = [
    { name: 'Rose Day', emoji: '🌹', date: new Date(2026, 1, 7), message: "Hold on, sweetheart! 🌹 The roses are still blooming in the garden of my heart! You wouldn't want a wilted rose, would you? Let them grow into their full beauty - just like our love!" },
    { name: 'Propose Day', emoji: '💍', date: new Date(2026, 1, 8), message: "Not yet, my love! 💍 I'm still rehearsing the perfect words to ask you the question of a lifetime! You deserve a proposal that's absolutely flawless - and my heart is still practicing!" },
    { name: 'Chocolate Day', emoji: '🍫', date: new Date(2026, 1, 9), message: "Patience, cutie pie! 🍫 The chocolate is still melting in the oven of love! You don't want half-melted chocolate, do you? The sweetest things take time... just like us!" },
    { name: 'Teddy Day', emoji: '🧸', date: new Date(2026, 1, 10), message: "Not so fast, darling! 🧸 The teddy bears are still being stuffed with extra cuddles and love! Each stitch is made with thoughts of you - wait for the fluffiest bear ever!" },
    { name: 'Promise Day', emoji: '🤝', date: new Date(2026, 1, 11), message: "Easy there, my everything! 🤝 I'm still writing down all my promises in the book of forever! A vow this sacred deserves time - I'm penning each word with my soul!" },
    { name: 'Hug Day', emoji: '🤗', date: new Date(2026, 1, 12), message: "Hold tight, love! 🤗 I'm still charging up my arms for the warmest, longest hug you've ever received! This embrace needs to convey a thousand words of love - let me prepare!" },
    { name: 'Kiss Day', emoji: '💋', date: new Date(2026, 1, 13), message: "Slow down there, beautiful! 💋 I'm still making sure my lips remember every love song ever written! The perfect kiss is worth waiting for - and trust me, this will be magical!" },
    { name: "Valentine's Day", emoji: '❤️', date: new Date(2026, 1, 14), message: "Almost there, my heart! ❤️ The grand finale is being decorated with stars and moonlight! This is THE day - the crescendo of our love story! Something absolutely extraordinary awaits!" }
  ]

  useEffect(() => {
    // Check which day should be unlocked based on current date
    const checkDate = () => {
      const today = new Date()
      const feb7 = new Date(2026, 1, 7)  // Rose Day
      const feb8 = new Date(2026, 1, 8)  // Propose Day
      const feb9 = new Date(2026, 1, 9)  // Chocolate Day
      const feb10 = new Date(2026, 1, 10) // Teddy Day
      const feb11 = new Date(2026, 1, 11) // Promise Day
      const feb12 = new Date(2026, 1, 12) // Hug Day
      const feb13 = new Date(2026, 1, 13) // Kiss Day
      const feb14 = new Date(2026, 1, 14) // Valentine's Day

      if (today >= feb14) setUnlockedDay(7)
      else if (today >= feb13) setUnlockedDay(6)
      else if (today >= feb12) setUnlockedDay(5)
      else if (today >= feb11) setUnlockedDay(4)
      else if (today >= feb10) setUnlockedDay(3)
      else if (today >= feb9) setUnlockedDay(2)
      else if (today >= feb8) setUnlockedDay(1)
      else if (today >= feb7) setUnlockedDay(0)
      else setUnlockedDay(-1)  // No days unlocked yet
    }
    checkDate()
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  const handleAcceptValentine = () => {
    setAcceptedValentine(true)
  }

  const handleDayClick = (dayIndex) => {
    if (!acceptedValentine || dayIndex > unlockedDay) {
      setClickedDay(dayIndex)
      setShowLockedModal(true)
    } else {
      setSelectedDay(dayIndex)
      navigateTo('days')
    }
  }

  const getDaysRemaining = (dayIndex) => {
    const today = new Date()
    const targetDate = daysInfo[dayIndex].date
    const diffTime = targetDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="app">
      <FloatingHearts />
      
      <header className="header">
        <div className="wrap">
          <div className="topbar">
            <div className="brand">
              <div className="logo" aria-hidden="true"></div>
              <div className="title">
                <h1>Kits ❤️ Mish — Valentine Week</h1>
                <p>One week. Seven days. Unlimited "Mish-smiles."</p>
              </div>
            </div>

            <nav className="nav">
              <button 
                className={`pill ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => navigateTo('home')}
              >
                Home
              </button>
              {daysInfo.map((day, index) => (
                <button
                  key={index}
                  className={`pill ${currentPage === 'days' && currentPage === `day${index + 1}` ? 'active' : ''}`}
                  onClick={() => handleDayClick(index)}
                >
                  {day.emoji} {day.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        {currentPage === 'home' && (
          <HomePage 
            onAccept={handleAcceptValentine} 
            accepted={acceptedValentine}
          />
        )}
        {currentPage === 'days' && (
          <DaysPage selectedDay={selectedDay} unlockedDay={unlockedDay} />
        )}
      </main>

      <footer>
        Made by Kits for Mish 💗 (with unnecessary levels of cuteness and too many puns)
      </footer>

      {showLockedModal && clickedDay !== null && (
        <div className="modal-overlay-locked">
          <div className="big-message-modal">
            <button className="close-btn" onClick={() => setShowLockedModal(false)}>✕</button>
            <div className="modal-emoji">{!acceptedValentine ? '🔒' : daysInfo[clickedDay].emoji}</div>
            <h3 className="modal-title">
              {!acceptedValentine ? 'Patience, My Love! ⏰' : `${daysInfo[clickedDay].name} ${daysInfo[clickedDay].emoji}`}
            </h3>
            <p className="modal-message">
              {!acceptedValentine ? (
                <>
                  Whoa there, eager beaver! 😊 You need to answer the big question on the Home page first before unlocking Valentine Week! 
                  <br/><br/>
                  <strong>Step 1:</strong> Say YES to being my Valentine 💕
                  <br/>
                  <strong>Step 2:</strong> Wait for the actual day to arrive 📅
                  <br/>
                  <strong>Step 3:</strong> Enjoy the sweetness! 🍫
                </>
              ) : (
                <>
                  {daysInfo[clickedDay].message}
                  <br/><br/>
                  <strong style={{color: 'var(--accent)', fontSize: '1.2em'}}>
                    {getDaysRemaining(clickedDay)} {getDaysRemaining(clickedDay) === 1 ? 'day' : 'days'} left until {daysInfo[clickedDay].name}!
                  </strong>
                  <br/><br/>
                  <em>Mark your calendar for {daysInfo[clickedDay].date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} 💗</em>
                </>
              )}
            </p>
            <button className="modal-close-btn" onClick={() => setShowLockedModal(false)}>
              Got It! 😊
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
