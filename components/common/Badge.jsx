export default function Badge({ children, variant }) {
  const variants = {
    open: "bg-blue-100 text-blue-700",
    in_progress: "bg-yellow-100 text-yellow-700",
    closed: "bg-green-100 text-green-700",

    high: "bg-red-100 text-red-700",
    medium: "bg-orange-100 text-orange-700",
    low: "bg-gray-100 text-gray-700",
  };

  return (
    <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
}