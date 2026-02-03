# Developer Mode - Bypass Date Restrictions

## Quick Bypass Methods

### Method 1: Override Initial State (Easiest)
In `src/App.jsx`, change line 13:

**From:**
```javascript
const [unlockedDay, setUnlockedDay] = useState(-1)  // Start with no days unlocked
```

**To:**
```javascript
const [unlockedDay, setUnlockedDay] = useState(7)  // DEV MODE: Unlock all days
```

This unlocks all 8 days immediately (0-7 = Days 1-8).

---

### Method 2: Mock the Date (More Realistic)
In `src/App.jsx`, find the `checkDate` function (around line 20) and change:

**From:**
```javascript
const today = new Date()
```

**To:**
```javascript
// DEV MODE: Mock date to Feb 14, 2026 (Valentine's Day)
const today = new Date(2026, 1, 14)  // Month is 0-indexed, so 1 = February
```

**Other useful dates:**
- `new Date(2026, 1, 7)` - Rose Day (Day 1)
- `new Date(2026, 1, 10)` - Teddy Day (Day 4)
- `new Date(2026, 1, 14)` - Valentine's Day (Day 8)

---

### Method 3: Auto-Accept Valentine
In `src/App.jsx`, change line 14:

**From:**
```javascript
const [acceptedValentine, setAcceptedValentine] = useState(false)
```

**To:**
```javascript
const [acceptedValentine, setAcceptedValentine] = useState(true)  // DEV MODE: Skip question
```

This skips the home page question and goes straight to the days.

---

### Method 4: Combine All (Full Dev Mode)

Replace lines 13-15 in `src/App.jsx` with:

```javascript
// 🚀 DEV MODE ENABLED 🚀
const [currentPage, setCurrentPage] = useState('days')  // Start on days page
const [unlockedDay, setUnlockedDay] = useState(7)      // Unlock all days
const [acceptedValentine, setAcceptedValentine] = useState(true)  // Skip question
```

And in the date check function:

```javascript
const today = new Date(2026, 1, 14)  // Mock Valentine's Day
```

---

## Quick Toggle

Create a dev flag at the top of `App.jsx`:

```javascript
// Toggle this for dev mode
const DEV_MODE = true  // Set to false for production

function App() {
  const [currentPage, setCurrentPage] = useState(DEV_MODE ? 'days' : 'home')
  const [unlockedDay, setUnlockedDay] = useState(DEV_MODE ? 7 : -1)
  const [acceptedValentine, setAcceptedValentine] = useState(DEV_MODE)
  
  // ... rest of code
```

Then in the date check:

```javascript
const today = DEV_MODE ? new Date(2026, 1, 14) : new Date()
```

Now you just toggle `DEV_MODE` between `true` and `false`!

---

## ⚠️ Remember

**Before deploying or sharing with Mish:**
1. Set `DEV_MODE = false` or remove it
2. Reset `unlockedDay` to `-1`
3. Reset `acceptedValentine` to `false`
4. Reset `currentPage` to `'home'`
5. Use real `new Date()` instead of mocked dates

---

## Browser Console Method (No Code Changes)

Open browser console (F12) and type:

```javascript
// Force unlock all days
localStorage.setItem('devMode', 'true')
location.reload()
```

Then add this to the `useEffect` in `App.jsx`:

```javascript
useEffect(() => {
  if (localStorage.getItem('devMode') === 'true') {
    setUnlockedDay(7)
    setAcceptedValentine(true)
    setCurrentPage('days')
  }
  // ... rest of date check code
}, [])
```

To disable:
```javascript
localStorage.removeItem('devMode')
location.reload()
```
