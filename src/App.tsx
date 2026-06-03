import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Library from './pages/Library'
import Quiz from './pages/Quiz'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">

        {/* Contenu principal de l'écran */}
        <main className="flex-1 max-w-md w-full mx-auto pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/library" element={<Library />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        {/* Barre de navigation mobile (Bottom Nav) - Design PWA */}
        <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 py-3 px-6 shadow-xl">
          <div className="max-w-md mx-auto flex justify-between items-center text-xs">
            <Link to="/" className="flex flex-col items-center gap-1 hover:text-blue-400 transition">
              <span>🏠</span>
              <span>Accueil</span>
            </Link>
            <Link to="/library" className="flex flex-col items-center gap-1 hover:text-blue-400 transition">
              <span>📚</span>
              <span>Fiches</span>
            </Link>
            <Link to="/quiz" className="flex flex-col items-center gap-1 hover:text-blue-400 transition">
              <span>🎯</span>
              <span>Quiz</span>
            </Link>
            <Link to="/analytics" className="flex flex-col items-center gap-1 hover:text-blue-400 transition">
              <span>📊</span>
              <span>Suivi</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center gap-1 hover:text-blue-400 transition">
              <span>👤</span>
              <span>Profil</span>
            </Link>
          </div>
        </nav>

      </div>
    </Router>
  )
}

export default App