import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative flex-1">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search issues..."
        className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}
