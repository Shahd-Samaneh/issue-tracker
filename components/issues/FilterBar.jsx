"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function updateFilter(key, value) {
    const params = new URLSearchParams(searchParams);

    if (value && value !== "All") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">

      <select defaultValue={searchParams.get("status") || "All"} onChange={(e) => updateFilter("status", e.target.value)}
        className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
        <option>All</option>
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      <select defaultValue={searchParams.get("priority") || "All"} onChange={(e) => updateFilter("priority", e.target.value)}
        className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
        <option>All</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      
    </div>
  );
}