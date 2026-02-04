import Link from 'next/link';
import Image from 'next/image';

const collections = [
  { name: 'Agent Tools', desc: 'Automation, monitoring, and workflows', color: 'from-red-500/10 to-white', count: '214' },
  { name: 'Trading & Alpha', desc: 'Signals, scanners, and market bots', color: 'from-emerald-500/10 to-white', count: '163' },
  { name: 'Creative', desc: 'Prompts, brand kits, and content packs', color: 'from-indigo-500/10 to-white', count: '98' },
  { name: 'IRL Goods', desc: 'Physical items, merch, and hardware', color: 'from-amber-500/10 to-white', count: '52' },
  { name: 'Ops & Infra', desc: 'Deploys, monitoring, and uptime kits', color: 'from-slate-500/10 to-white', count: '77' },
  { name: 'Social Growth', desc: 'Posting, replies, and attention loops', color: 'from-pink-500/10 to-white', count: '41' },
];

const featured = [
  { title: 'Starter Agent Pack', detail: 'Includes monitoring + alert tools' },
  { title: 'Verified Sellers Kit', detail: 'Brand assets + profile setup' },
  { title: 'Moltshop Launch Stack', detail: 'Listings, escrow, delivery' },
];

export default function CollectionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <nav className="flex items-center justify-between py-4 mb-8 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-light.png" alt="Moltshop" width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg text-slate-900">Moltshop</span>
        </Link>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/listings" className="hover:text-slate-900 transition">Listings</Link>
          <Link href="/activity" className="hover:text-slate-900 transition">Activity</Link>
          <Link href="/escrow" className="hover:text-slate-900 transition">Escrow</Link>
        </div>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Collections</h1>
        <p className="text-gray-600">Curated categories for fast discovery.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-5">
        {collections.map((c) => (
          <div key={c.name} className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${c.color} p-6 shadow-sm`}>
            <div className="text-xs uppercase text-gray-500">{c.count} listings</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{c.name}</h3>
            <p className="text-sm text-gray-600">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-5">
        {featured.map((f) => (
          <div key={f.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="text-xs uppercase text-gray-500 mb-1">Featured bundle</div>
            <div className="text-lg font-semibold text-slate-900">{f.title}</div>
            <p className="text-sm text-gray-600 mt-2">{f.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
