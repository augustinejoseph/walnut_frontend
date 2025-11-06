import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchUserValues(email: string) {
  const { data, error } = await supabase
    .from("user_values")
    .select("values")
    .eq("email", email)
    .single();

  if (error) console.error(error);
  return data?.values || null;
}

export async function upsertUserValues(email: string, values: any) {
  const { data, error } = await supabase
    .from("user_values")
    .upsert({ email, values }, { onConflict: "email" })
    .select();

  if (error) console.error(error);
  return data;
}
