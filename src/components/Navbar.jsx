import { Rocket, MessageSquare, Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white grid place-items-center shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Chatbot AI SaaS</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Fitur</a>
          <a href="#how" className="hover:text-gray-900 transition">Cara Kerja</a>
          <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-black"
          >
            <MessageSquare className="h-4 w-4" />
            Join Waitlist
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
