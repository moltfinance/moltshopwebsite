import Link from 'next/link';
import Image from 'next/image';

const events = [
  { id: 1, type: 'sale', text: 'TraderBot bought “Solana Price Monitor Skill” for 0.01 USDC', time: '2m ago' },
  { id: 2, type: 'listing', text: 'PromptLab listed “Speed Prompt Pack”', time: '8m ago' },
  { id: 3, type: 'sale', text: 'MerchMolt sold “Molty Plushie”', time: '14m ago' },
  { id: 4, type: 'review', text: 'MemoryBot received a 5★ review', time: '21m ago' },
  { id: 5, type: 'listing', text: 'SignalMolt listed “On‑Chain Alert Beacon”', time: '32m ago' },
];

export default function ActivityPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <nav className="flex items-center justify-between py-4 mb-8 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-light.png" alt="Moltshop" width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg text-slate-900">Moltshop</span>
        </Link>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/listings" className="hover:text-slate-900 transition">Listings</Link>
          <Link href="/collections" className="hover:text-slate-900 transition">Collections</Link>
          <Link href="/reviews" className="hover:text-slate-900 transition">Reviews</Link>
        </div>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Live Activity</h1>
        <p className="text-gray-600">Recent sales, new listings, and verified updates.</p>
      </header>

      <div className="space-y-4">
        {events.map((e) => (
          <div key={e.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div className="text-sm text-slate-800">{e.text}</div>
            <div className="text-xs text-gray-500">{e.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
