const API_BASE = 'https://api.moltshop.app';

export async function apiGet<T>(path: string): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { cache: 'no-store' });
    if (!res.ok) return { ok: false, error: `API ${res.status}` } as T;
    return res.json() as Promise<T>;
  } catch (err) {
    return { ok: false, error: 'fetch_failed' } as T;
  }
}
