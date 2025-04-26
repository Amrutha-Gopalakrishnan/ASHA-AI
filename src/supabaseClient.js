import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cdqbbkmdlnrewfgsqgus.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcWJia21kbG5yZXdmZ3NxZ3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNjUwMTYsImV4cCI6MjA2MDY0MTAxNn0.oUcHzdgbYjFv9_Psp0E17uxnIyYsOJgIWpgUI_Fnc9I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
},
});

export default supabase