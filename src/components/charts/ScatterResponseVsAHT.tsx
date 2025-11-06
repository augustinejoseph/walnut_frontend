// src/components/charts/ScatterResponseVsAHT.tsx
import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  data: { responseTime: number; aht: number }[];
}

const ScatterResponseVsAHT: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" stroke="#2b2b2b" />
          <XAxis type="number" dataKey="responseTime" name="Response" unit="s" stroke="#a1a1aa" />
          <YAxis type="number" dataKey="aht" name="AHT" unit="s" stroke="#a1a1aa" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Calls" data={data} fill="#FB7185" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterResponseVsAHT;
