<script setup>
import { inject, ref } from 'vue'
import api from '../api/Api.js'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()
const email = ref('')
const password = ref('')

const token = inject('token') // reactive token from App.vue / MainLayout.vue
const loading = ref(false)

const login = async () => {
  loading.value = true

  try {
    const res = await api.loginUser(email, password);

    setTimeout(() => {
      loading.value = false

      if (res.data.success) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', res.data.user.id)
        token.value = res.data.token

        $q.notify({ type: 'positive', message: 'Login successful!' })
        router.push('/')
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

