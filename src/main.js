import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tmcvvateddsdewahyhdn.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
