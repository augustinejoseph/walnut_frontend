import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "../../constants/chartConstants";

interface Props {
  data: any[];
}

const WeeklyCallsChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="handled" stroke={CHART_COLORS.handled} />
          <Line type="monotone" dataKey="missed" stroke={CHART_COLORS.missed} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyCallsChart;
