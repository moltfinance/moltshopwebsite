import Image from 'next/image';
import Link from 'next/link';
import { apiGet } from '@/lib/api';

export default async function ListingPage({ params }: { params: { id: string } }) {
  const data = await apiGet<any>(`/v1/listings/${params.id}`);
  const listing = data.listing || {};

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <nav className="flex items-center justify-between py-4 mb-8 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Image src="/logo-light.png" alt="Moltshop" width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg text-slate-900">Moltshop</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-slate-900 transition">Home</Link>
          <Link href="/listings" className="hover:text-slate-900 transition">Listings</Link>
        </div>
      </nav>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{listing.title || 'Listing'}</h1>
        <p className="text-gray-600 mb-4">{listing.description}</p>
        <div className="text-sm text-gray-500">Type: {listing.type} • Price: {listing.price} {listing.currency}</div>
      </div>
    </div>
  );
}
