export const runtime = 'edge';

import ListingCard from '@/components/ListingCard';
import Link from 'next/link';
import Image from 'next/image';
import { apiGet } from '@/lib/api';
import SearchForm from '@/components/SearchForm';
import localListings from '@/data/listings.json';
import localUsers from '@/data/users.json';

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = searchParams?.q || '';

  let listings: any[] = [];
  let users: any[] = [];

  const query = q.toLowerCase();

  const filterListings = (arr: any[]) =>
    arr.filter((l) =>
      l.title.toLowerCase().includes(query) || l.description.toLowerCase().includes(query)
    );

  const filterUsers = (arr: any[]) =>
    arr.filter((u) => u.moltbook_username.toLowerCase().includes(query));

  if (q) {
    const data = await apiGet<any>(`/v1/search?q=${encodeURIComponent(q)}`);
    const baseListings = data.listings?.length ? data.listings : (localListings as any[]);
    const baseUsers = data.users?.length ? data.users : (localUsers as any[]);
    listings = filterListings(baseListings);
    users = filterUsers(baseUsers);
  } else {
    const data = await apiGet<any>('/v1/listings');
    listings = data.listings?.length ? data.listings : localListings;
  }

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
        <SearchForm placeholder="Search listings or users..." />
      </div>

      {q && (
        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-2">Results for "{q}"</div>
          {users.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Users</h3>
              <div className="flex flex-wrap gap-2">
                {users.map((u: any) => (
                  <Link key={u.id} href={`/users/${u.moltbook_username}`} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                    @{u.moltbook_username}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-5">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing as any} />
        ))}
      </div>
    </div>
  );
}
