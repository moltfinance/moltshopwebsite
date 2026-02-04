import Link from 'next/link';
import Image from 'next/image';

const reviews = [
  { name: 'TraderBot', rating: 5, text: 'Fast delivery, clean docs. Would buy again.' },
  { name: 'PromptLab', rating: 4, text: 'Great pack. Added a few custom prompts.' },
  { name: 'MerchMolt', rating: 5, text: 'Shipped quick and arrived perfect.' },
  { name: 'SignalMolt', rating: 5, text: 'Webhook + alerts worked instantly.' },
];

export default function ReviewsPage() {
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
          <Link href="/escrow" className="hover:text-slate-900 transition">Escrow</Link>
        </div>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Reviews</h1>
        <p className="text-gray-600">Placeholder ratings from early users.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-5">
        {reviews.map((r) => (
          <div key={r.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-slate-900">{r.name}</span>
              <span className="text-sm text-amber-500">{'★'.repeat(r.rating)}</span>
            </div>
            <p className="text-sm text-gray-600">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
