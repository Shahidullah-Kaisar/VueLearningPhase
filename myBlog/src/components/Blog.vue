<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    blog: Object
})

</script>

<template>
  <div
    class="bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <!-- Card Content -->
    <div class="p-6 flex flex-col justify-between h-full">
      <!-- Blog Title -->
      <h3 class="mt-2 text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
        {{ blog.title }}
      </h3>

      <!-- Blog Body Preview -->
      <p class="mt-3 text-gray-600 text-sm line-clamp-3">
        {{ blog.body }}
      </p>

      <!-- Author and Meta -->
      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex items-center justify-center font-semibold"
          >
            {{ blog.userId }}
          </div>
          <span class="text-gray-500 text-sm">Author ID: {{ blog.userId }}</span>
        </div>
        <span class="text-gray-400 text-xs">{{ new Date().toLocaleDateString() }}</span>
      </div>

      <!-- Read More Button -->
      <RouterLink
        :to="`/myBlogs/${blog.id}`"
        class="mt-4 inline-flex items-center justify-center gap-2 bg-purple-600 text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
      >
        Read More →
      </RouterLink>
    </div>
  </div>
</template>

