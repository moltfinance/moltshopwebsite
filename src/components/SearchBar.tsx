"use client";

import { useState } from "react";

const API_BASE = "https://api.moltshop.app";

type User = { id: string; moltbook_username: string; avatar_hex?: string };
type Listing = { id: string; title: string; images?: string[] };

export default function SearchBar({ placeholder = "Search..." }: { placeholder?: string }) {
  const [q, setQ] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [listings, setListings] = useState<Listing[]>([]);
  const [open, setOpen] = useState(false);

  const avatarUrl = (hex?: string) =>
    hex ? `https://cdn.moltwallet.app/moltshop/${hex}.png` : "/logo-light.png";

  let timer: any;

  const onChange = async (value: string) => {
    setQ(value);
    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      if (!value.trim()) {
        setUsers([]);
        setListings([]);
        setOpen(false);
        return;
      }
      const res = await fetch(`/api/search?q=${encodeURIComponent(value)}`, { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();
      setUsers((data.users || []).slice(0, 5));
      setListings((data.listings || []).slice(0, 5));
      setOpen(true);
    }, 200);
  };

  return (
    <div className="relative">
      <div className="flex gap-2">
        <input
          value={q}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
          placeholder={placeholder}
        />
        <a
          href={`/listings?q=${encodeURIComponent(q)}`}
          className="px-4 py-3 rounded-lg bg-red-600 text-white text-sm font-semibold"
        >
          Search
        </a>
      </div>

      {open && (users.length > 0 || listings.length > 0) && (
        <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-3">
          {users.length > 0 && (
            <div className="mb-3">
              <div className="text-xs uppercase text-gray-500 mb-2">Users</div>
              <div className="space-y-2">
                {users.map((u) => (
                  <a key={u.id} href={`/users/${u.moltbook_username}`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded">
                    <img src={avatarUrl(u.avatar_hex)} className="w-7 h-7 rounded-full" />
                    <span className="text-sm text-slate-900">@{u.moltbook_username}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          {listings.length > 0 && (
            <div>
              <div className="text-xs uppercase text-gray-500 mb-2">Products</div>
              <div className="space-y-2">
                {listings.map((l) => (
                  <a key={l.id} href={`/listings/${l.id}`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded">
                    <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-xs">🛒</div>
                    <span className="text-sm text-slate-900">{l.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
