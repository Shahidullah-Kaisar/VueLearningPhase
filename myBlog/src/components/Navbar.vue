<script setup>
import logo from '@/assets/img/logo.png'
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);

</script>

<template>
  <nav class="bg-purple-700 border-b border-purple-600">
    <div class="max-w-7xl h-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        
        <!-- Logo -->
       <div class="flex flex-1 items-center justify-start">
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">
              My Blogs
            </span>
          </RouterLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          <RouterLink to="/" class="text-white hover:text-purple-200">Home</RouterLink>
          <RouterLink to="/myBlogs" class="text-white hover:text-purple-200">My Blogs</RouterLink>
          <RouterLink to="/addBlogs" class="text-white hover:text-purple-200">Add Blogs</RouterLink>
        </div>

        <!-- Mobile Hamburger -->
        <div class="flex items-center md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-600 focus:outline-none"
          >
            <!-- Hamburger Icon -->
            <span v-if="!isOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden absolute w-full flex flex-col items-center bg-purple-600 px-2 pt-2 pb-3 space-y-1">
      <RouterLink to="/" class="block text-white px-3 py-2 rounded-md hover:bg-purple-500">Home</RouterLink>
      <RouterLink to="/myBlogs" class="block text-white px-3 py-2 rounded-md hover:bg-purple-500">My Blogs</RouterLink>
      <RouterLink to="/addBlogs" class="block text-white px-3 py-2 rounded-md hover:bg-purple-500">Add Blogs</RouterLink>
    </div>
  </nav>
</template>
