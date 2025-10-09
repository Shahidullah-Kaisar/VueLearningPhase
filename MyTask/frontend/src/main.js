import { createApp } from "vue";
import { Quasar, Notify, Dialog } from "quasar";
import quasarLang from "quasar/lang/en-US";
import quasarIconSet from "quasar/icon-set/material-icons";
import router from "./router";
import App from "./App.vue";

import "quasar/dist/quasar.css";
import "@quasar/extras/material-icons/material-icons.css";

const app = createApp(App);

app.use(Quasar, {
  plugins: { Notify, Dialog },
  lang: quasarLang,
  iconSet: quasarIconSet,
});

app.use(router);
app.mount("#q-app");
