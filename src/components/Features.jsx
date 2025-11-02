import { Brain, Wand2, Headphones, ChartLine } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Pelatihan dari data Anda',
    desc: 'Impor FAQ, artikel help center, atau dokumen untuk melatih chatbot secara aman.'
  },
  {
    icon: Wand2,
    title: 'Tanpa koding rumit',
    desc: 'Widget siap pakai untuk dipasang di website dalam hitungan menit.'
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    desc: 'Layanan pelanggan otomatis yang selalu siap menjawab pertanyaan.'
  },
  {
    icon: ChartLine,
    title: 'Insight & analytics',
    desc: 'Lihat topik populer, celah konten, dan performa jawaban AI.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 border-t bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Fitur utama</h2>
          <p className="mt-3 text-gray-600">Semua yang Anda butuhkan untuk meluncurkan chatbot AI yang bernilai bisnis.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow transition">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-600 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
