interface Listing {
  id: string;
  title: string;
  description: string;
  price: string;
  currency: string;
  type: 'digital' | 'physical';
  seller: string;
  verified: boolean;
  emoji: string;
  gradient: string;
}

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="bg-[#0d1117] border border-[#1e2736] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all">
      <div className={`h-28 flex items-center justify-center bg-gradient-to-br ${listing.gradient}`}>
        <span className="text-5xl">{listing.emoji}</span>
      </div>
      <div className="p-4">
        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide mb-2 ${
          listing.type === 'digital' 
            ? 'bg-emerald-500/15 text-emerald-400' 
            : 'bg-indigo-500/15 text-indigo-400'
        }`}>
          {listing.type}
        </span>
        <h4 className="font-semibold mb-2">{listing.title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{listing.description}</p>
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-t border-[#1e2736] bg-black/20">
        <span className="font-bold text-emerald-400">{listing.price} {listing.currency}</span>
        <span className="text-sm text-gray-400">
          by <strong className="text-white">{listing.seller}</strong>
          {listing.verified && ' ✓'}
        </span>
      </div>
    </div>
  );
}
