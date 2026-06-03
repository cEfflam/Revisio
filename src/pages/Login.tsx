import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Appel magique au SDK Supabase pour connecter l'utilisateur
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      // Connexion réussie -> on redirige vers l'accueil
      navigate('/')
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Appel au SDK Supabase pour inscrire un nouvel utilisateur
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      alert('Inscription réussie ! Vérifie tes e-mails pour valider ton compte.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 bg-slate-950 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-blue-500">
          ReviSIO 🎓
        </h2>
        <p className="text-sm text-slate-400">
          Connecte-toi pour suivre tes révisions du BTS SIO
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <form className="space-y-4">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Adresse e-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="major@bts-sio.fr"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Mot de passe
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleLogin}
              disabled={loading}
              className="flex-1 justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 active:scale-[0.98] disabled:opacity-50 transition"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
            <button
              onClick={handleSignUp}
              disabled={loading}
              className="flex-1 justify-center rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700 active:scale-[0.98] disabled:opacity-50 transition"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}