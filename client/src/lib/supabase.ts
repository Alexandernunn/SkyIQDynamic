import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const hasSupabaseCredentials = !!(supabaseUrl && supabaseAnonKey);

let supabaseInstance: SupabaseClient | null = null;

if (hasSupabaseCredentials) {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    '⚠️ Supabase credentials not configured. Appointment form will not work until you:\n' +
    '1. Create a Supabase project at https://supabase.com/dashboard\n' +
    '2. Copy .env.example to .env\n' +
    '3. Add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY'
  );
}

export const supabase = supabaseInstance as SupabaseClient;

export type AppointmentFormData = {
  name: string;
  email: string;
  phone: string;
  business_type: string;
  message: string;
  created_at?: string;
};
