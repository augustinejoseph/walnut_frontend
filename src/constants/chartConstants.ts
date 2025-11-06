// src/constants/chartConstants.ts
export const DEFAULT_WEEKLY_CALLS = [
  { day: "Mon", handled: 120, missed: 8 },
  { day: "Tue", handled: 140, missed: 12 },
  { day: "Wed", handled: 130, missed: 5 },
  { day: "Thu", handled: 150, missed: 9 },
  { day: "Fri", handled: 170, missed: 7 },
  { day: "Sat", handled: 90, missed: 15 },
  { day: "Sun", handled: 70, missed: 10 },
];

export const AHT_SAMPLE = [
  { hour: "8AM", aht: 230 },
  { hour: "10AM", aht: 210 },
  { hour: "12PM", aht: 250 },
  { hour: "2PM", aht: 200 },
  { hour: "4PM", aht: 240 },
];

export const CALLS_BY_AGENT = [
  { agent: "Agent A", calls: 320, avgAHT: 210 },
  { agent: "Agent B", calls: 280, avgAHT: 230 },
  { agent: "Agent C", calls: 200, avgAHT: 190 },
  { agent: "Agent D", calls: 160, avgAHT: 250 },
  { agent: "Agent E", calls: 110, avgAHT: 180 },
];

export const CALL_VOLUME = [
  { time: "00:00", volume: 20 },
  { time: "02:00", volume: 12 },
  { time: "04:00", volume: 8 },
  { time: "06:00", volume: 18 },
  { time: "08:00", volume: 60 },
  { time: "10:00", volume: 120 },
  { time: "12:00", volume: 180 },
  { time: "14:00", volume: 160 },
  { time: "16:00", volume: 140 },
  { time: "18:00", volume: 90 },
  { time: "20:00", volume: 60 },
  { time: "22:00", volume: 30 },
];

export const QUALITY_BREAKDOWN = [
  { name: "Good", value: 68 },
  { name: "Okay", value: 18 },
  { name: "Poor", value: 14 },
];

export const RESPONSE_VS_AHT = [
  { responseTime: 4, aht: 210 }, // responseTime in seconds
  { responseTime: 6, aht: 230 },
  { responseTime: 3, aht: 190 },
  { responseTime: 8, aht: 250 },
  { responseTime: 5, aht: 205 },
  { responseTime: 2.5, aht: 180 },
  { responseTime: 7, aht: 240 },
];

export const CHART_COLORS = {
  handled: "#4F46E5",
  missed: "#FB7185",
  aht: "#06B6D4",
  bar: "#10B981",
  area: "#60A5FA",
  donut: ["#10B981", "#F59E0B", "#EF4444"],
};
