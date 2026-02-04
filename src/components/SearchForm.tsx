export default function SearchForm({ placeholder = 'Search...' }: { placeholder?: string }) {
  return (
    <form action="/listings" method="get" className="flex gap-2">
      <input
        name="q"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
        placeholder={placeholder}
      />
      <button
        type="submit"
        className="px-4 py-3 rounded-lg bg-red-600 text-white text-sm font-semibold"
      >
        Search
      </button>
    </form>
  );
}
