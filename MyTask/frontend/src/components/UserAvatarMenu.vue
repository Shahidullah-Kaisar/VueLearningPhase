<script setup>
import { ref, inject, watch } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api/Api.js' 

const router = useRouter()

// Reactive token from MainLayout
const token = inject('token') // must be a ref
const user = ref({ username: '', email: '' })


// Fetch user info whenever token changes
const fetchUserInfo = async () => {
  if (!token.value) {
    user.value = { username: '', email: '' }
    router.push('/login')
    return
  }

  try {
    const res = await api.getUserInfo();
    if (res.data.success) {
      user.value = res.data.user
    } else {
      user.value = { username: '', email: '' }
      router.push('/login')
    }
  } catch (err) {
    console.error('Error fetching user info:', err)
    user.value = { username: '', email: '' }
    router.push('/login')
  }
}

// Watch token reactively
watch(token, fetchUserInfo, { immediate: true })

// Logout function
const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user_id') // optional
  token.value = null
  router.push('/login')
}

</script>


<template>
  <div v-if="user.username" class="q-pa-md">
    <q-btn color="deep-orange-8" :label="`Welcome ${user.username}`">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">{{ user.username }}</div>
            <div class="text-subtitle1 q-mt-md q-mb-xs">{{ user.email }}</div>

            <q-btn
            @click="logout"
              color="deep-orange-8"
              label="Logout"
              push
              size="md"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>
