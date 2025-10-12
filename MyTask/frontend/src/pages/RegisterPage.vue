<template>
  <q-page class="q-pa-md flex flex-center column">
    <q-card class="q-pa-md" style="width: 400px;">
      <div class="text-h6 text-center q-mb-md">Register</div>
      <q-input v-model="username" label="Username" outlined class="q-mb-md" />
      <q-input v-model="email" label="Email" outlined class="q-mb-md" />
      <q-input v-model="password" type="password" label="Password" outlined class="q-mb-md" />
      <q-btn label="Register" color="primary" @click="register" class="full-width q-mb-sm" />
      <q-btn flat label="Go to Login" @click="$router.push('/login')" />
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const username = ref("");
const email = ref("");
const password = ref("");
const backendURL = "http://localhost/MyTask/backend/api";

const register = async () => {
  try {
    const res = await axios.post(`${backendURL}/auth/register.php`, {
      username: username.value,
      email: email.value,
      password: password.value
    });
    if (res.data.success) {
      $q.notify({ type: "positive", message: "Registered successfully!" });
      // eslint-disable-next-line no-undef
      $router.push("/login");
    } else {
      $q.notify({ type: "negative", message: res.data.message });
    }
  } catch (e) {
    console.error(e);
  }
};
</script>
