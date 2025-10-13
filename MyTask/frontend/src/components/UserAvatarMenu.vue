<script setup>
import { ref, inject, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const backendURL = 'http://localhost/MyTask/backend/api/user/get_user_info.php'

// Reactive token injected from MainLayout
const token = inject('token') // must be a ref from MainLayout
const user = ref({ username: '', email: '' })

// Fetch user info whenever token changes
const fetchUserInfo = async (newToken) => {
  if (!newToken) {
    user.value = { username: '', email: '' }
    router.push('/login')
    return
  }

  try {
    const res = await axios.get(backendURL, {
      headers: { Authorization: `Bearer ${newToken}` },
    })

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
watch(
  token,
  (newToken) => {
    fetchUserInfo(newToken)
  },
  { immediate: true },
)

// Logout function
const logout = () => {
  localStorage.removeItem('token')
  token.value = null
}
</script>

<template>
  <div v-if="user.username">
    <q-btn round dense flat color="transparent" @click="showMenu = !showMenu">
      <!-- Avatar inside button -->
      <q-avatar color="deep-orange-10" text-color="white">
        {{ user.username.charAt(0).toUpperCase() }}
      </q-avatar>

      <!-- Dropdown menu -->
      <q-menu v-model="showMenu">
        <q-list style="min-width: 200px">
          <q-item>
            <q-item-section avatar>
              <q-avatar color="purple" text-color="white">
                {{ user.username.charAt(0).toUpperCase() }}
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ user.username }}</q-item-label>
              <q-item-label caption>{{ user.email }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple @click="logout">
            <q-item-section avatar>
              <q-icon name="logout" color="red" />
            </q-item-section>
            <q-item-section class="text-red text-weight-medium">Logout</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>
