import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://qqngenbikakyygoykkco.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbmdlbmJpa2FreXlnb3lra2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjI5NTMsImV4cCI6MTk4MzgzODk1M30.66fSMTWvDiHYoLtEBY28HpI1oXEUV6uHGQQVFpl04Uk";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*")
        }
    }
}