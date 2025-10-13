<script setup>
import UserAvatarMenu from 'src/components/UserAvatarMenu.vue'
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'

const leftDrawerOpen = ref(false)
const router = useRouter()

const token = ref(localStorage.getItem('token'))
provide('token', token) //globally share

onMounted(() => {
  if (!token.value) {
    router.push('/login')
  }
})

</script>

<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header
      elevated
      class="text-white bg-deep-purple-9"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          size="lg"
          :icon="leftDrawerOpen ? 'chevron_left' : 'menu'"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="q-mr-sm text-white"
        />
        <q-toolbar-title class="text-h5 text-weight-bold"> 📝 MyTask </q-toolbar-title>

        <UserAvatarMenu/>
        
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2 text-dark">
      <q-list class="q-mt-sm">
        <template v-if="token">
          <q-item
            clickable
            v-ripple
            to="/"
            exact
            active-class="bg-green-2 text-green-9"
            class="rounded-borders q-ma-xs transition-all duration-300 hover:bg-green-1"
          >
            <q-item-section avatar><q-icon name="home" /></q-item-section>
            <q-item-section class="text-weight-medium text-h6"> Home </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/about"
            exact
            active-class="bg-green-2 text-green-9"
            class="rounded-borders q-ma-xs transition-all duration-300 hover:bg-green-1"
          >
            <q-item-section avatar><q-icon name="info" /></q-item-section>
            <q-item-section class="text-weight-medium text-h6"> About </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/add-tasks"
            exact
            active-class="bg-green-2 text-green-9"
            class="rounded-borders q-ma-xs transition-all duration-300 hover:bg-green-1"
          >
            <q-item-section avatar><q-icon name="task_alt" /></q-item-section>
            <q-item-section class="text-weight-medium text-h6"> Add Tasks </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/tasks"
            exact
            active-class="bg-green-2 text-green-9"
            class="rounded-borders q-ma-xs transition-all duration-300 hover:bg-green-1"
          >
            <q-item-section avatar><q-icon name="task_alt" /></q-item-section>
            <q-item-section class="text-weight-medium text-h6"> Tasks </q-item-section>
          </q-item>
        </template>

        <template v-else>
          <q-item to="/login" clickable v-ripple exact active-class="bg-green-2 text-green-9">
            <q-item-section avatar><q-icon name="login" /></q-item-section>
            <q-item-section class="text-weight-medium text-h6">Login</q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <!-- Page Container -->
    <q-page-container class="bg-gradient-to-br from-green-50 via-white to-green-50 q-pa-md">
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="text-white text-center q-pa-md bg-purple-10">
      © {{ new Date().getFullYear() }} MyTask by Sajib 🌿
    </q-footer>
  </q-layout>
</template>



<style scoped>
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
</style>
