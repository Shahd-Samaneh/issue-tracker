"use client";

import { issueStatusData } from "@/lib/data";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, } from "recharts";
const COLORS = ["#3B82F6", "#F59E0B", "#22C55E",];

export default function StatusChart() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">Issues by Status</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={issueStatusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}>
                        {issueStatusData.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: "12px",}}/>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}