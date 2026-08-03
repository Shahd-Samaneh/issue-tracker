export default function FilterBar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <select className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
        <option>All Status</option>
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      <select className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
        <option>All Priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </div>
  );
}