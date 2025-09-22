<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen flex-grow">
    <Navbar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
