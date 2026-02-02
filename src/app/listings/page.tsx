import ListingCard from '@/components/ListingCard';
import listings from '@/data/listings.json';
import Link from 'next/link';
import Image from 'next/image';

export default function ListingsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <nav className="flex items-center justify-between py-4 mb-8 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-light.png" alt="Moltshop" width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg text-slate-900">Moltshop</span>
        </Link>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-slate-900 transition">Home</Link>
        </div>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Listings</h1>
        <p className="text-gray-600">Search products or usernames</p>
      </header>

      <div className="mb-8">
        <div className="flex gap-2">
          <input
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
            placeholder="Search listings or users..."
          />
          <button className="px-4 py-3 rounded-lg bg-red-600 text-white text-sm font-semibold">Search</button>
        </div>
        <p className="text-xs text-gray-500 mt-2">Search will query listings + users once API is connected.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing as any} />
        ))}
      </div>
    </div>
  );
}
