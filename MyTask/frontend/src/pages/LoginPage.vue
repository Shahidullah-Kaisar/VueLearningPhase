<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const router = useRouter()
const email = ref('')
const password = ref('')
const backendURL = 'http://localhost/MyTask/backend/api'

const token = inject('token') // reactive token from App.vue / MainLayout.vue
const loading = ref(false)

const login = async () => {
  loading.value = true

  try {
    const res = await axios.post(`${backendURL}/auth/login.php`, {
      email: email.value,
      password: password.value,
    })

    // spinner effect for 1 second
    setTimeout(() => {
      loading.value = false

      if (res.data.success) {
        // save token and user id in localStorage
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', res.data.user.id) // important for fetching tasks
        token.value = res.data.token // update reactive token

        $q.notify({ type: 'positive', message: 'Login successful!' })
        router.push('/tasks')
      } else {
        $q.notify({ type: 'negative', message: 'Login Unsuccessful' })
      }
    }, 1000)
  } catch (e) {
    loading.value = false
    console.error(e)
    $q.notify({ type: 'negative', message: 'Server error' })
  }
}
</script>


<template>
  <q-page class="q-pa-md flex flex-center column">
    <!-- Full screen spinner -->
    <div v-if="loading" class="full-screen-spinner">
      <q-spinner color="secondary" size="50px" />
    </div>

    <q-card v-else class="q-pa-md" style="width: 400px">
      <div class="text-h6 text-center q-mb-md">Login</div>
      <q-input v-model="email" label="Email" outlined class="q-mb-md" />
      <q-input v-model="password" type="password" label="Password" outlined class="q-mb-md" />
      <q-btn label="Login" color="primary" @click="login" class="full-width q-mb-sm" />
      <q-btn flat label="Go to Register" @click="$router.push('/register')" />
    </q-card>
  </q-page>
</template>

<!-- <style scoped>
.full-screen-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7); /* semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style> -->
