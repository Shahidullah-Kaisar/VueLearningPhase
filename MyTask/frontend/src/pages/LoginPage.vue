<template>
  <q-page class="q-pa-md flex flex-center column">
    <q-card class="q-pa-md" style="width: 400px;">
      <div class="text-h6 text-center q-mb-md">Login</div>
      <q-input v-model="email" label="Email" outlined class="q-mb-md" />
      <q-input v-model="password" type="password" label="Password" outlined class="q-mb-md" />
      <q-btn label="Login" color="primary" @click="login" class="full-width q-mb-sm" />
      <q-btn flat label="Go to Register" @click="$router.push('/register')" />
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const email = ref("");
const password = ref("");
const backendURL = "http://localhost/MyTask/backend/api";

const login = async () => {
  try {
    const res = await axios.post(`${backendURL}/auth/login.php`, { email: email.value, password: password.value });
    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      $q.notify({ type: "positive", message: "Login successful!" });
      window.location.href = "/#/tasks";
    } else {
      $q.notify({ type: "negative", message: res.data.message });
    }
  } catch (e) {
    console.error(e);
  }
};
</script>
