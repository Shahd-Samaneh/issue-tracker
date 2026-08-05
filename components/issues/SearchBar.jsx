"use client";

import { Search } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex-1">
      <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>

      <input type="text" placeholder="Search issues..."  defaultValue={searchParams.get("search")?.toString()} onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>
    </div>
  );
} 