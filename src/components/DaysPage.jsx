import Day1 from './days/Day1'
import Day2 from './days/Day2'
import Day3 from './days/Day3'
import Day4 from './days/Day4'
import Day5 from './days/Day5'
import Day6 from './days/Day6'
import Day7 from './days/Day7'
import Day8 from './days/Day8'

const daysData = [
  {
    day: 1,
    date: 'Feb 7',
    emoji: '🌹',
    title: 'Rose Day',
    color: '#ff4d6d',
    interactiveItems: [
      { emoji: '🌹', label: 'Red Rose', message: "A dozen roses couldn't compare to the way you make my heart bloom! Every petal reminds me of a reason I love you. You're my garden of happiness, and I'm totally rose-ing to the occasion of being yours forever! 🌹💕" },
      { emoji: '💐', label: 'Bouquet', message: "They say to stop and smell the roses, but I'd rather stop and admire you! You're more beautiful than any bouquet, and unlike flowers, my love for you will never wilt. You're absolutely blooming wonderful! 🌸✨" },
      { emoji: '🥀', label: 'Pink Rose', message: "Red roses are red, violets are blue, but nothing in this garden compares to you! You're the rose that makes my whole world colorful. I'm not just giving you a rose, I'm giving you my heart - handle with care! 💗🌹" }
    ],
    messages: [
      "A rose for my rose 🌹💕",
      "You're more beautiful than a garden full of roses!",
      "Red roses are red, violets are blue, no flower compares to you!",
      "Fun fact: I'd choose a day with you over a bouquet of roses any day!",
      "They say roses are romantic, but have you looked in a mirror lately? 😍",
      "I'm not rose-ing to the occasion, I'm blooming for you! 🌸",
      "Our love is like a rose: beautiful, timeless, and occasionally prickly (but in a cute way)! 🥀",
      "Roses are red, my face is too, that only happens when I think of you! 😊"
    ]
  },
  {
    day: 2,
    date: 'Feb 8',
    emoji: '💍',
    title: 'Propose Day',
    color: '#ffb3c1',
    interactiveItems: [
      { emoji: '💍', label: 'Ring', message: "I don't need a ring to propose how much you mean to me! But if I could, I'd give you the universe wrapped in a bow. You + Me = Forever isn't just math, it's destiny! Will you continue being the best thing that's ever happened to me? 💍✨" },
      { emoji: '💝', label: 'Love Letter', message: "Dear Mish, I propose we make every day as sweet as today! You've stolen a pizza my heart (sorry, had to!), and I wouldn't want it back. I'm no photographer, but I can definitely picture us together forever! Yours truly, Kits 💕📸" },
      { emoji: '🎁', label: 'Gift Box', message: "Inside this box is my proposal: Let's stay this cute forever! Are you a parking ticket? Because you've got FINE written all over you, and I'm willing to pay that price every single day. Deal? 🥰🎫" }
    ],
    messages: [
      "Will you continue being the best thing that's ever happened to me? 💍",
      "I propose we make every day as sweet as today!",
      "My proposal: You + Me = Forever 💕",
      "I don't need a ring to know you're the one!",
      "Proposing that we stay this cute forever... Deal? 🥰",
      "I'm not trying to be cheesy, but you've stolen a pizza my heart! 🍕💝",
      "Are you a parking ticket? Because you've got FINE written all over you! 🎫",
      "I'm no photographer, but I can picture us together! 📸💕"
    ]
  },
  {
    day: 3,
    date: 'Feb 9',
    emoji: '🍫',
    title: 'Chocolate Day',
    color: '#8b4513',
    interactiveItems: [
      { emoji: '🍫', label: 'Chocolate Bar', message: "You're sweeter than the finest Swiss chocolate! Life with you is like a box of chocolates - sweet, surprising, and I never want it to end. You make my heart melt faster than chocolate in the sun, and we're definitely mint to be together! 🍬☀️💕" },
      { emoji: '🍬', label: 'Candy', message: "Chocolate is great, but you're the real treat! I'd share my last piece of chocolate with you, and that's true love right there. You're the chocolate chips in my cookie of life - essential, sweet, and making everything better! 🍪✨" },
      { emoji: '🎂', label: 'Cake', message: "Our relationship is like dark chocolate: rich, intense, and good for the heart! ❤️ You add sweetness to every moment, just like frosting on a cake. Life would be plain vanilla without you - thank goodness you're here to add all the flavor! 🎂💗" }
    ],
    messages: [
      "You're sweeter than any chocolate 🍫💗",
      "Life with you is like a box of chocolates - sweet, surprising, and I never want it to end!",
      "Chocolate is great, but you're the real treat!",
      "I'd share my last piece of chocolate with you... and that's true love! 😋",
      "You make my heart melt faster than chocolate in the sun! ☀️🍫",
      "We're mint to be together! 🍬",
      "You're the chocolate chips in my cookie! 🍪",
      "Our relationship is like dark chocolate: rich, intense, and good for the heart! ❤️"
    ]
  },
  {
    day: 4,
    date: 'Feb 10',
    emoji: '🧸',
    title: 'Teddy Day',
    color: '#d2691e',
    interactiveItems: [
      { emoji: '🧸', label: 'Teddy Bear', message: "Sending virtual hugs like a teddy bear! 🧸💕 You're more cuddly than the softest teddy bear, and every day with you feels like a warm embrace. I can't bear to be without you - you're un-bear-ably cute and bear-y special to me! 🐻💗" },
      { emoji: '🤗', label: 'Hug', message: "I'd be lost without my favorite cuddle buddy! You're like that perfect teddy bear - comforting, adorable, and always there when I need you. Life would be un-bear-able without you in it! 🐻✨" },
      { emoji: '💤', label: 'Cozy Time', message: "Every moment with you is like snuggling with the coziest teddy bear on a rainy day. You bring warmth, comfort, and joy to my life. You're not just bear-y special, you're absolutely everything! Sweet dreams are made of you! 💕😴" }
    ],
    messages: [
      "Sending virtual hugs like a teddy bear! 🧸💕",
      "You're more cuddly than the softest teddy bear!",
      "I'd be lost without my favorite cuddle buddy!",
      "Every day with you feels like a warm teddy bear hug! 🤗",
      "You're bear-y special to me! 🐻💗",
      "I can't bear to be without you! 🐻",
      "You're un-bear-ably cute! 🧸",
      "Life would be un-bear-able without you! 💕"
    ]
  },
  {
    day: 5,
    date: 'Feb 11',
    emoji: '🤝',
    title: 'Promise Day',
    color: '#3ddc97',
    interactiveItems: [
      { emoji: '🤝', label: 'Handshake', message: "I promise to always make you smile 😊💕 This isn't just a handshake, it's a pact sealed with love. I promise to laugh at your jokes (even the bad ones!), to be your biggest fan, and to love you more every single day! Orange you glad we found each other? 🍊" },
      { emoji: '📜', label: 'Contract', message: "My promise contract states: To be your partner in crime, your personal comedian, and your constant supporter! I'm not lion when I say I'll always be there for you 🦁. This promise is unbreakable, non-negotiable, and forever binding! 💕✨" },
      { emoji: '💚', label: 'Promise Heart', message: "Promise to never let a day go by without reminding you how amazing you are! ✨ I promise to be your butter half 🧈💕, your daily dose of happiness, and the person who loves you unconditionally. This heart represents every promise I'm making to you today and always! 💚" }
    ],
    messages: [
      "I promise to always make you smile 😊💕",
      "I promise to laugh at your jokes (even the bad ones)!",
      "My promise: To love you more every single day!",
      "I promise to be your biggest fan, your partner in crime, and your personal comedian! 🎭",
      "Promise to never let a day go by without reminding you how amazing you are! ✨",
      "I'm not lion when I say I'll always be there for you! 🦁",
      "Orange you glad we found each other? 🍊",
      "I promise to be your butter half! 🧈💕"
    ]
  },
  {
    day: 6,
    date: 'Feb 12',
    emoji: '🤗',
    title: 'Hug Day',
    color: '#ff6b9d',
    interactiveItems: [
      { emoji: '🤗', label: 'Big Hug', message: "Sending the biggest virtual hug! 🤗💕 Your hugs are my favorite place to be - they're like a warm blanket on a cold day, a safe haven in a storm. I'm totally wrapped up in you 🎁, and I wouldn't want it any other way. Hugs from you = instant happiness! 💝" },
      { emoji: '🫂', label: 'Group Hug', message: "Distance can't stop me from sending you all the hugs! 💝 In the equation of life, your hugs are the solution to everything 🧮💕. You've got me all tangled up in love, and honestly, I'm not complaining one bit! 😊" },
      { emoji: '💞', label: 'Heart Hug', message: "A hug from you is worth a thousand words! Your embrace makes everything better - bad days disappear, worries fade away, and happiness multiplies. Hugs and kisses, but mostly hugs because I'm a hugger! 🤗 You're the comfort I never knew I needed! 💕✨" }
    ],
    messages: [
      "Sending the biggest virtual hug! 🤗💕",
      "Your hugs are my favorite place to be!",
      "A hug from you = instant happiness!",
      "Distance can't stop me from sending you all the hugs! 💝",
      "In the equation of life, your hugs are the solution to everything! 🧮💕",
      "I'm totally wrapped up in you! 🎁",
      "You've got me all tangled up in love! 💕",
      "Hugs and kisses, but mostly hugs because I'm a hugger! 🤗"
    ]
  },
  {
    day: 7,
    date: 'Feb 13',
    emoji: '💋',
    title: 'Kiss Day',
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
  },
  {
    day: 8,
    date: 'Feb 14',
    emoji: '❤️',
    title: "Valentine's Day",
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
]

function DaysPage({ selectedDay, unlockedDay }) {
  const currentDay = daysData[selectedDay]

  const dayComponents = [Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8]
  const CurrentDayComponent = dayComponents[selectedDay]

  return (
    <section className="page active">
      <div className="card hero-card slide-up">
        <div className="card-head">
          <div className="left">
            <div className="day-dot">📅</div>
            <div className="meta">
              <h3>Valentine Week — Day by Day 🗝️</h3>
              <span>Because Mish deserves a fresh surprise each day!</span>
            </div>
          </div>
        </div>
        <div className="card-body">
          {unlockedDay === -1 ? (
            <div className="not-yet-message">
              <div className="countdown-emoji">⏰</div>
              <h2>Not Yet, Mish! 😊</h2>
              <p className="fade-in">
                Valentine Week starts on <strong>February 7, 2026</strong> (Rose Day)! 🌹
              </p>
              <p className="fade-in-delay">
                The excitement is building, and Kits can barely contain it! Come back on Feb 7th to unlock the first day of our special week together! 💕
              </p>
              <div className="days-countdown">
                <div className="countdown-box">
                  <span className="countdown-number">4</span>
                  <span className="countdown-label">days to go!</span>
                </div>
              </div>
            </div>
          ) : (
            <>
          <CurrentDayComponent />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default DaysPage
