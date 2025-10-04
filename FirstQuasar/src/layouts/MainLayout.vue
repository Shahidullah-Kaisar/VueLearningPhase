<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- Logo / Title -->
        <q-toolbar-title>
          JobFinder
        </q-toolbar-title>

        <!-- Desktop Menu -->
        <div class="gt-sm row items-center q-gutter-sm">
          <q-btn flat label="Home" @click="scrollTo('hero')" />
          <q-btn flat label="Jobs" @click="scrollTo('jobs')" />
          <q-btn flat label="Contact" @click="scrollTo('contact')" />
        </div>

        <!-- Mobile Hamburger -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="lt-md"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer Menu -->
    <q-drawer v-model="drawer" side="right" bordered class="lt-md">
      <q-list>
        <q-item clickable v-ripple @click="goTo('hero')">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goTo('jobs')">
          <q-item-section>Jobs</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goTo('contact')">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Router outlet for pages -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          © 2025 JobFinder - All rights reserved
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function goTo(id) {
  drawer.value = false; // close drawer after click
  scrollTo(id);
}
</script>
