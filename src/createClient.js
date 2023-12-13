import { createClient } from "@supabase/supabase-js";


export const supabase= createClient(
    "https://dbagfrolazhukzrvxfsv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYWdmcm9sYXpodWt6cnZ4ZnN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NDE1NDcsImV4cCI6MjAxODAxNzU0N30.h8rN5kVIFCEi9LXlcFm5cyk8SLorCbWy_esVR2Q5DuY"
    )