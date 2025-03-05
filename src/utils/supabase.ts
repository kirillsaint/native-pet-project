import axios from "axios";

export const supabaseUrl = "https://iisyuwghsgrclrkkavle.supabase.co";
export const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpc3l1d2doc2dyY2xya2thdmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwODMwOTcsImV4cCI6MjA1NjY1OTA5N30.uOiKvyYIG_iQo2juBhKgPtm8pXBVtsqwh_jy_NOzYUE";

const supabase = axios.create({
	baseURL: supabaseUrl + "/rest/v1",
	headers: {
		apiKey: supabaseKey,
		Authorization: `Bearer ${supabaseKey}`,
	},
});

export default supabase;
