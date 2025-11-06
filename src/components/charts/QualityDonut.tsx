// src/components/charts/QualityDonut.tsx
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { CHART_COLORS } from "../../constants/chartConstants";

interface Props {
  data: { name: string; value: number }[];
}

const QualityDonut: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={40} outerRadius={70} label />
          {data.map((_, i) => (
            <Cell key={i} fill={CHART_COLORS.donut[i % CHART_COLORS.donut.length]} />
          ))}
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default QualityDonut;
