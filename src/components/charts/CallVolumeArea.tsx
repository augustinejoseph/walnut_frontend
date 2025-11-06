// src/components/charts/CallVolumeArea.tsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Props {
  data: { time: string; volume: number }[];
}

const CallVolumeArea: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2b2b2b" />
          <XAxis dataKey="time" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip />
          <Area type="monotone" dataKey="volume" stroke="#60A5FA" fill="#60A5FA" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CallVolumeArea;
