"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function WeeklyChart({ data }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold">Weekly Issues</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip contentStyle={{ borderRadius: "12px", }} />
          <Line type="monotone" dataKey="issues" stroke="#3B82F6" strokeWidth={3} dot />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}