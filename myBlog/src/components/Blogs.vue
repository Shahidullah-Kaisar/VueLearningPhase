<script setup>
import { onMounted, reactive, defineProps, ref } from 'vue';
import Blog from './Blog.vue'
import axios from 'axios';
import { VueSpinnerDots } from 'vue3-spinners';

const state = reactive({
    blogs: [],
    isLoading: true
})

const props = defineProps({
    limit: Number,
    showButton: Boolean,
    showLoadButton: Boolean
})

onMounted(async()=> {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      state.blogs = response.data;
    } catch (error) {
        console.log(error);
    } finally{
      setTimeout(() => {
        state.isLoading = false;
      }, 1000);
    }
})

const limit = ref(props.limit);
const isLoad = ref(false);

const loadMore = () => {
    isLoad.value = true
    setTimeout(() => {
      limit.value +=10;
      isLoad.value = false;
    }, 1000);
}

</script>

<template>
  <section class="bg-gray-50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900">Browse My Blogs : {{ state.blogs.length }}</h2>
        <p class="mt-3 text-gray-600">Short thoughts and reflections about life</p>
      </div>

      <div v-if="state.isLoading" class="flex justify-center min-h-screen">
        <VueSpinnerDots class="text-6xl text-purple-600"/>
      </div>

      <div v-if="!state.isLoading" class="grid gap-8 md:grid-cols-2">
        <Blog 
            v-for="blog in state.blogs.slice(0, limit)" :key="blog.id" :blog="blog"
        />
      </div>
    </div>
  </section>

   <section v-if="showButton" class="m-auto max-w-lg my-4 px-6">
      <RouterLink
        to="/myBlogs"
        class="block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md duration-300 transition-colors text-white text-center py-4 px-6 rounded-xl"
        >View All Blogs</RouterLink
      >
    </section>

    <section v-if="showLoadButton" class="flex justify-center">
      <button @click="loadMore" :disabled="limit >= state.blogs.length" class="block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md duration-300 transition-colors text-white text-center py-4 px-16 rounded-xl disabled:bg-gray-400 disabled:cursor-not-allowed">{{ isLoad ? 'Loading...' : 'Load More' }}</button>
    </section>
   
</template>
