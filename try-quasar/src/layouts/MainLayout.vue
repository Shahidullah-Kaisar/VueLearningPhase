<script setup>
import Navbar from 'src/components/AppNavbar.vue'
import Footer from 'src/components/AppFooter.vue'
</script>


<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>
