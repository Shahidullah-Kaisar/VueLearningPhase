<script setup>
import { ref } from 'vue';
const leftDrawerOpen = ref(false);
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header
      elevated
      class="text-white"
      style="background: linear-gradient(90deg, #4CAF50 0%, #81C784 100%);"
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
        <q-toolbar-title class="text-h5 text-weight-bold">
          📝 MyTask
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2 text-dark"
    >
   
      <q-list class="q-mt-sm">
        <q-item
          clickable
          v-ripple
          to="/"
          exact
          active-class="bg-green-2 text-green-9"
          class="rounded-borders q-ma-xs transition-all duration-300 hover:bg-green-1"
        >
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section class="text-weight-medium text-h6">
            Home
          </q-item-section>
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
          <q-item-section class="text-weight-medium text-h6">
            About
          </q-item-section>
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
          <q-item-section class="text-weight-medium text-h6">
            Add Tasks
          </q-item-section>
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
          <q-item-section class="text-weight-medium text-h6">
            Tasks
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <!-- Page Container -->
    <q-page-container
      class="bg-gradient-to-br from-green-50 via-white to-green-50 q-pa-md"
    >
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer
      class="text-white text-center q-pa-md"
      style="background: linear-gradient(90deg, #66BB6A 0%, #43A047 100%);"
    >
      © {{ new Date().getFullYear() }} MyTask by Sajib 🌿
    </q-footer>
  </q-layout>
</template>
