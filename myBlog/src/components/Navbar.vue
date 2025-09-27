<script setup>
import logo from '@/assets/img/logo.png'
import { ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const isOpen = ref(false);
const route = useRoute();

const isActive = (path) => route.path === path;

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <nav class="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 sticky top-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2">
          <img :src="logo" class="h-10 w-auto" alt="Logo" />
          <span class="text-white text-2xl font-extrabold hidden md:block tracking-wide">My Blogs</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <RouterLink
            to="/"
            class="relative text-white font-medium px-3 py-2 rounded-md hover:text-purple-200 transition-colors"
          >
            Home
            <span v-if="isActive('/')" class="absolute bottom-0 left-0 w-full h-1 bg-purple-300 rounded-full animate-pulse"></span>
          </RouterLink>

          <RouterLink
            to="/myBlogs"
            class="relative text-white font-medium px-3 py-2 rounded-md hover:text-purple-200 transition-colors"
          >
            My Blogs
            <span v-if="isActive('/myBlogs')" class="absolute bottom-0 left-0 w-full h-1 bg-purple-300 rounded-full animate-pulse"></span>
          </RouterLink>

          <RouterLink
            to="/addBlogs"
            class="relative text-white font-medium px-3 py-2 rounded-md hover:text-purple-200 transition-colors"
          >
            Add Blogs
            <span v-if="isActive('/addBlogs')" class="absolute bottom-0 left-0 w-full h-1 bg-purple-300 rounded-full animate-pulse"></span>
          </RouterLink>
        </div>

        <!-- Mobile Hamburger -->
        <div class="flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none"
          >
            <span v-if="!isOpen" class="text-2xl">☰</span>
            <span v-else class="text-2xl">✕</span>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div 
        v-if="isOpen" 
        class="md:hidden absolute top-20 left-0 w-full bg-purple-600 px-4 py-4 flex flex-col gap-2 z-40"
      >
        <RouterLink
          to="/"
          @click="closeMenu"
          :class="['block font-medium px-3 py-2 rounded-md transition', isActive('/') ? 'bg-purple-500' : 'text-white hover:bg-purple-500']"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/myBlogs"
          @click="closeMenu"
          :class="['block font-medium px-3 py-2 rounded-md transition', isActive('/myBlogs') ? 'bg-purple-500' : 'text-white hover:bg-purple-500']"
        >
          My Blogs
        </RouterLink>
        <RouterLink
          to="/addBlogs"
          @click="closeMenu"
          :class="['block font-medium px-3 py-2 rounded-md transition', isActive('/addBlogs') ? 'bg-purple-500' : 'text-white hover:bg-purple-500']"
        >
          Add Blogs
        </RouterLink>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
