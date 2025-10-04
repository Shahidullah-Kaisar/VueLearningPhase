<script setup>
import router from '@/router';
import axios from 'axios';
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast()

const form = reactive({
  title: "",
  body: ""
})


const handleSubmit = async() => {
  const newBlog = {
    title: form.title,
    body: form.body
  }

  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newBlog);
    // router.push(`/myBlogs/${response.data.id}`);
    router.push({name: "single-blog", params: {id: response.data.id}})
    toast.success("Blog added successfully!");

  } catch (error) {
      console.log(error)
      toast.error("Blog Not Added Successfully")
  }
}

</script>

<template>
  <section class="bg-gray-50 min-h-screen flex items-center justify-center py-12">
    <div class="bg-white shadow-lg rounded-xl w-full max-w-lg p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Blog</h2>

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
