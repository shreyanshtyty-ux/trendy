"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from "recharts"

const data = [
  { name: "Mon", viral: 65, engagement: 45 },
  { name: "Tue", viral: 78, engagement: 52 },
  { name: "Wed", viral: 82, engagement: 61 },
  { name: "Thu", viral: 94, engagement: 73 },
  { name: "Fri", viral: 89, engagement: 68 },
  { name: "Sat", viral: 96, engagement: 81 },
  { name: "Sun", viral: 92, engagement: 76 },
]

const pieData = [
  { name: "Technology", value: 35, color: "#3B82F6" },
  { name: "Lifestyle", value: 25, color: "#10B981" },
  { name: "Entertainment", value: 20, color: "#F59E0B" },
  { name: "Business", value: 15, color: "#8B5CF6" },
  { name: "Health", value: 5, color: "#EF4444" },
]

export function TrendChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="name" 
            stroke="#6B7280"
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tick={{ fill: "#6B7280" }}
          />
          <YAxis 
            stroke="#6B7280"
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tick={{ fill: "#6B7280" }}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-white dark:bg-gray-800 p-3 shadow-lg">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-gray-500 dark:text-gray-400">Viral Score</span>
                        <span className="font-bold text-gray-900 dark:text-white">{payload[0].value}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-gray-500 dark:text-gray-400">Engagement</span>
                        <span className="font-bold text-gray-900 dark:text-white">{payload[1].value}</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="viral"
            strokeWidth={3}
            stroke="#3B82F6"
            dot={{ 
              fill: "#3B82F6", 
              stroke: "#ffffff", 
              strokeWidth: 2, 
              r: 5
            }}
            activeDot={{ 
              r: 7, 
              stroke: "#ffffff", 
              strokeWidth: 3,
              fill: "#3B82F6"
            }}
          />
          <Line
            type="monotone"
            dataKey="engagement"
            strokeWidth={3}
            stroke="#10B981"
            dot={{ 
              fill: "#10B981", 
              stroke: "#ffffff", 
              strokeWidth: 2, 
              r: 5
            }}
            activeDot={{ 
              r: 7, 
              stroke: "#ffffff", 
              strokeWidth: 3,
              fill: "#10B981"
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TrendPieChart() {
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="#374151" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={11}
        fontWeight={500}
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={50}
            fill="#3B82F6"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-white dark:bg-gray-800 p-3 shadow-lg">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-gray-500 dark:text-gray-400">{payload[0].name}</span>
                      <span className="font-bold text-gray-900 dark:text-white">{payload[0].value}%</span>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
