// src/api/chartApi.ts
import { supabase } from "./supabaseClient";

const TABLE_NAME = "walnut_graphs";

export async function getUserChartData(email: string) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("data")
    .eq("email", email)
    .maybeSingle();
  if (error) throw error;
  return data ? data.data : null;
}

export async function saveUserChartData(email: string, data: any) {
  const existing = await getUserChartData(email);
  if (existing) {
    const { error } = await supabase
      .from(TABLE_NAME)
      .update({ data })
      .eq("email", email);
    if (error) throw error;
  } else {
    const { error } = await supabase
      .from(TABLE_NAME)
      .insert([{ email, data }]);
    if (error) throw error;
  }
}
