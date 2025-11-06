import {
  DEFAULT_WEEKLY_CALLS,
  AHT_SAMPLE,
  CALLS_BY_AGENT,
  CALL_VOLUME,
  QUALITY_BREAKDOWN,
  RESPONSE_VS_AHT,
} from "../constants/chartConstants";

export function generateDummyData() {
  return DEFAULT_WEEKLY_CALLS.map((item) => ({
    ...item,
    handled: item.handled + Math.floor(Math.random() * 5),
    missed: item.missed + Math.floor(Math.random() * 2),
  }));
}

export function calculateTotals(data: any[]) {
  return {
    totalHandled: data.reduce((acc, cur) => acc + cur.handled, 0),
    totalMissed: data.reduce((acc, cur) => acc + cur.missed, 0),
  };
}
export function generateWeeklyCalls(perturb = false) {
  if (!perturb) return DEFAULT_WEEKLY_CALLS;
  return DEFAULT_WEEKLY_CALLS.map((r) => ({
    ...r,
    handled: r.handled + Math.round((Math.random() - 0.5) * 20),
    missed: Math.max(0, r.missed + Math.round((Math.random() - 0.5) * 4)),
  }));
}

export function getAHTSample() {
  return AHT_SAMPLE;
}

export function getCallsByAgent() {
  return CALLS_BY_AGENT;
}

export function getCallVolume() {
  return CALL_VOLUME;
}

export function getQualityBreakdown() {
  return QUALITY_BREAKDOWN;
}

export function getResponseVsAHT() {
  return RESPONSE_VS_AHT;
}
