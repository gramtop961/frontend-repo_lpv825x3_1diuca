import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [useCase, setUseCase] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/waitlist/count`).then(async (r) => {
      const data = await r.json()
      if (typeof data.count === 'number') setCount(data.count)
    }).catch(() => {})
  }, [])

  const ctaText = useMemo(() => {
    if (count == null) return 'Gabung Waitlist'
    return `Gabung ${new Intl.NumberFormat('id-ID').format(count)}+ yang menunggu`
  }, [count])

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: name || undefined, use_case: useCase || undefined, source: 'landing' }),
      })
      if (!res.ok) throw new Error('Gagal mendaftar. Coba lagi ya.')
      setSuccess(true)
      setEmail('')
      setName('')
      setUseCase('')
      // refresh count quietly
      try {
        const r = await fetch(`${API_BASE}/waitlist/count`)
        const d = await r.json()
        if (typeof d.count === 'number') setCount(d.count)
      } catch {}
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600 bg-white shadow-sm">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
            Validasi ide lebih cepat dengan AI
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Chatbot AI untuk Bisnis Anda, tanpa repot setup
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Ubah FAQ, dokumen, dan data dukungan menjadi chatbot AI yang siap melayani 24/7. Integrasi mudah ke website Anda.
          </p>

          <form onSubmit={onSubmit} id="waitlist" className="mt-8 bg-white/70 backdrop-blur rounded-xl border p-4 sm:p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama (opsional)"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email kerja Anda"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              placeholder="Ceritakan singkat use case Anda (opsional)"
              className="mt-3 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
            <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center items-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? 'Mendaftar...' : ctaText}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-sm text-gray-600">
                Tidak ada spam. Kami hanya kirim update penting.
              </p>
            </div>
            {success && (
              <div className="mt-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                Terima kasih! Anda sudah masuk daftar tunggu.
              </div>
            )}
            {error && (
              <div className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                {error}
              </div>
            )}
          </form>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl border bg-white/60 backdrop-blur shadow-sm grid place-items-center">
            <div className="p-6 text-center">
              <div className="text-7xl">🤖</div>
              <h3 className="mt-4 text-xl font-semibold">Demo Chatbot</h3>
              <p className="mt-2 text-gray-600 max-w-sm mx-auto">
                Preview antarmuka sederhana chatbot yang siap ditanam ke website Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
