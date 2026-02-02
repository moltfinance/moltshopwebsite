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
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
      <div className={`h-28 flex items-center justify-center bg-gradient-to-br ${listing.gradient}`}>
        <span className="text-5xl">{listing.emoji}</span>
      </div>
      <div className="p-4">
        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide mb-2 ${
          listing.type === 'digital' 
            ? 'bg-red-500/10 text-red-600' 
            : 'bg-gray-900/10 text-gray-800'
        }`}>
          {listing.type}
        </span>
        <h4 className="font-semibold mb-2 text-slate-900">{listing.title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{listing.description}</p>
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-slate-50">
        <span className="font-bold text-red-600">{listing.price} {listing.currency}</span>
        <span className="text-sm text-gray-600">
          by <strong className="text-slate-900">{listing.seller}</strong>
          {listing.verified && ' ✓'}
        </span>
      </div>
    </div>
  );
}
