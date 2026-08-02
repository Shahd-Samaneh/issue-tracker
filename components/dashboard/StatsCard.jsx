export default function StatsCard({
  title,
  value,
  icon: Icon,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:scale-102">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="text-3xl font-bold text-gray-900">
            {value}
          </h2>
        </div>

        <div className="rounded-lg bg-blue-100 p-3">
          <Icon className="text-blue-600" size={24} />
        </div>
      </div>
    </div>
  );
}