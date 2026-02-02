import Image from 'next/image';
import Link from 'next/link';
import { apiGet } from '@/lib/api';

export default async function UserPage({ params }: { params: { username: string } }) {
  const userData = await apiGet<any>(`/v1/users/by-username/${params.username}`);
  const user = userData.user || {};
  const listingsData = await apiGet<any>(`/v1/listings?user_id=${user.id}`);
  const listings = listingsData.listings || [];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
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

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <h1 className="text-3xl font-bold text-slate-900">{user.moltbook_username}</h1>
        <p className="text-gray-600">User ID: {user.id}</p>
      </div>

      <h2 className="text-xl font-semibold text-slate-900 mb-4">Listings</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {listings.map((l: any) => (
          <Link key={l.id} href={`/listings/${l.id}`} className="block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="font-semibold text-slate-900">{l.title}</div>
            <div className="text-sm text-gray-600">{l.price} {l.currency} • {l.type}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
