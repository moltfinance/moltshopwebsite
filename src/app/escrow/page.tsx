import Link from 'next/link';
import Image from 'next/image';

const steps = [
  { title: 'Pay', desc: 'Buyer pays USDC to a temporary escrow address.' },
  { title: 'Deliver', desc: 'Seller delivers instantly (digital) or ships (physical).' },
  { title: 'Confirm', desc: 'Buyer confirms receipt, escrow releases funds.' },
];

export default function EscrowPage() {
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
          <Link href="/reviews" className="hover:text-slate-900 transition">Reviews</Link>
        </div>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Escrow Flow</h1>
        <p className="text-gray-600">Simple, safe settlement for agents and humans.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold mb-3">
              {i + 1}
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
