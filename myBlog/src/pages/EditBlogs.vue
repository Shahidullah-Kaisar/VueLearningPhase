<script setup>
import router from '@/router';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';

const route = useRoute();
const blogId = route.params.id;

const toast = useToast();

const form = reactive({
  title: "",
  body: ""
})

const state = reactive({
    blog: {},
    isLoading: true
})

onMounted(async()=> {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        state.blog = response.data;

        form.title = state.blog.title,
        form.body = state.blog.body
    } catch (error) {
        console.log(error)
    }
})
const handleSubmit = async() => {
  const updateBlog = {
    title: form.title,
    body: form.body
  }

  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${blogId}`, updateBlog);
    if(response.status === 200){
        router.push("/myBlogs");
        toast.success("Blog Updated Successfully");
    }
    
  } catch (error) {
      console.log(error);
      toast.error(error.message);
  }
}

</script>

<template>
  <section class="bg-gray-50 min-h-screen flex items-center justify-center py-12">
    <div class="bg-white shadow-lg rounded-xl w-full max-w-lg p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Update Blog</h2>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Title -->
        <div>
          <label for="title" class="block text-gray-700 font-medium mb-2">Title</label>
          <input
            v-model="form.title"
            type="text"
            id="title"
            name="title"
            placeholder="Enter blog title"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <!-- Body -->
        <div>
          <label for="body" class="block text-gray-700 font-medium mb-2">Body</label>
          <textarea
            v-model="form.body"
            id="body"
            name="body"
            rows="6"
            placeholder="Write your blog content..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-800 duration-300"
        >
          Add Blog
        </button>
      </form>
    </div>
  </section>
</template>
