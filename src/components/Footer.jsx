export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Chatbot AI SaaS. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-gray-900">Fitur</a>
          <a href="#waitlist" className="hover:text-gray-900">Waitlist</a>
          <a href="#" className="hover:text-gray-900">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  )
}
