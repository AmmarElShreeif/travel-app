import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

if (!process.env.EXPO_PUBLIC_API_URL || !process.env.EXPO_PUBLIC_API_KEY) {
  throw new Error(
    "SUPABASE_PROJECT_URL and SUPABASE_API_KEY environment variables are required"
  );
}

const supabaseUrl = process.env.EXPO_PUBLIC_API_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
