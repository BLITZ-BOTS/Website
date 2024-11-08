import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://fewdjowxiqfzsfixqbzl.supabase.co',  // Your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZld2Rqb3d4aXFmenNmaXhxYnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExMDM5MDIsImV4cCI6MjA0NjY3OTkwMn0.SvzrrIcLU8lCrv-xcNFoHoOdqLh8n7wvE5TZ5QFl32s'                        // Your Supabase Anon key
);
