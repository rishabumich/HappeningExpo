// this is a javascript file
import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://umidzpbhwaphfbypclmk.supabase.co";
const supabaseAnonKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtaWR6cGJod2FwaGZieXBjbG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMjEzODYsImV4cCI6MjAxNDc5NzM4Nn0.zanRUWhW8TQtGIeYwqOJUBuxWnuR0CpzJ532UZuLSVs";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
 auth: {

   storage: AsyncStorage,
   autoRefreshToken: true,
   persistSession: true,
   detectSessionInUrl: false,
 },
});