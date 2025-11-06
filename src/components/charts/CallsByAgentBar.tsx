// src/components/charts/CallsByAgentBar.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

interface Props {
  data: { agent: string; calls: number; avgAHT: number }[];
}

const CallsByAgentBar: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2b2b2b" />
          <XAxis dataKey="agent" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip />
          <Legend />
          <Bar dataKey="calls" name="Calls" fill="#10B981" barSize={36} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CallsByAgentBar;
