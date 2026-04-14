import { createClient } from "@supabase/supabase-js";

// We use the service role key to insert records (to bypass RLS limitations from server)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy";

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
