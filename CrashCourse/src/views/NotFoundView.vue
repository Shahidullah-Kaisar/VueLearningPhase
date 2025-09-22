<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="flex flex-col justify-center items-center h-screen text-center px-4">
    <i class="pi pi-exclamation-triangle text-yellow-400 text-7xl mb-6 animate-bounce"></i>
    <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">404 Not Found</h2>
    <p class="text-lg text-gray-600 mb-6 animate-fade-in delay-150">Oops! This page doesn't exist.</p>
    <RouterLink
      to="/"
      class="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300 animate-fade-in delay-300"
    >
      Go Back
    </RouterLink>
  </section>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
.delay-150 {
  animation-delay: 0.15s;
}
.delay-300 {
  animation-delay: 0.3s;
}
</style>
