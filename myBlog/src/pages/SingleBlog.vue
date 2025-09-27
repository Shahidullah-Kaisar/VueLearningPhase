<script setup>
import router from "@/router";
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { VueSpinnerDots } from "vue3-spinners";
import Swal from 'sweetalert2'

const route = useRoute();
const blogId = route.params.id;

const toast = useToast();

const state = reactive({
  singleBlog: {},
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${blogId}`
    );
    state.singleBlog = response.data;
    console.log(state.singleBlog);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      state.isLoading = false;
    }, 1000);
  }
});

const handleDelete = async () => {
  try {
    const result =await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
      router.push("/myBlogs");
      toast.success("Blog Deleted Successfully");
    }
  } catch (error) {
    console.log(error);
    toast.error("Blog is not Deleted");
  }
};
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link
        to="/myBlogs"
        class="bg-white text-purple-700 px-5 py-2 mt-3 rounded-lg shadow hover:bg-purple-100 transition"
      >
        ← Back to Blogs
      </router-link>
    </div>

    <!-- Loader -->
    <div v-if="state.isLoading" class="flex justify-center items-center min-h-screen">
      <VueSpinnerDots class="text-6xl text-purple-600" />
    </div>

    <!-- Main Content with Sidebar -->
    <main
      v-if="!state.isLoading"
      class="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <!-- Blog Content -->
      <article class="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg">
        <!-- Blog Title -->
        <h2
          class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight border-l-4 border-purple-500 pl-4"
        >
          {{ state.singleBlog.title }}
        </h2>

        <!-- Author and Meta Info -->
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 p-4 bg-purple-50 rounded-lg"
        >
          <div class="flex items-center space-x-4 mb-4 sm:mb-0">
            <div
              class="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-md"
            >
              {{ state.singleBlog.userId || "AU" }}
            </div>
            <div>
              <p class="font-semibold text-gray-800">
                Author ID: {{ state.singleBlog.userId || "Unknown" }}
              </p>
              <p class="text-sm text-gray-600 flex items-center">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Published: {{ new Date().toLocaleDateString() }}
              </p>
            </div>
          </div>
        </div>

        <!-- Blog Body -->
        <div class="prose prose-lg max-w-none">
          <p
            class="text-gray-700 leading-relaxed text-lg mb-6 first-letter:text-4xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:mt-2"
          >
            {{ state.singleBlog.body }}
          </p>

          <p class="text-gray-700 leading-relaxed text-lg">
            This beautifully designed blog post demonstrates how content can be
            presented in an engaging and readable format. The layout is fully
            responsive and works seamlessly across all device sizes.
          </p>

          <div
            class="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-400"
          >
            <p class="text-blue-800 font-medium italic">
              "Great content deserves great design. This blog template showcases
              how to present information in an aesthetically pleasing and
              user-friendly manner."
            </p>
          </div>

          <p class="text-gray-700 leading-relaxed text-lg">
            The sidebar provides additional context and navigation options,
            making it easy for readers to explore related content and stay
            engaged with your blog.
          </p>
        </div>

        <!-- Tags -->
        <div class="mt-10 pt-8 border-t border-gray-200">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >Technology</span
            >
            <span
              class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >Web Development</span
            >
            <span
              class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >Vue.js</span
            >
            <span
              class="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >Design</span
            >
          </div>
        </div>
      </article>

      <!-- Sidebar -->
      <aside class="space-y-8">
        <!-- Manage Card -->
        <div
          class="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg"
        >
          <!-- Title -->
          <h3 class="text-2xl font-extrabold mb-6 tracking-wide">
            Manage Blog
          </h3>

          <!-- Buttons -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Edit Button -->
            <RouterLink
              :to="`/editBlogs/${blogId}`"
              class="flex items-center justify-center gap-2 bg-white text-purple-700 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Edit
            </RouterLink>

            <!-- Delete Button -->
            <button
              @click="handleDelete"
              class="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer"
            >
              Delete
            </button>
          </div>

          <!-- Extra Tip/Info -->
          <p class="mt-6 text-sm text-purple-200 text-center italic">
            Tip: Always double-check before deleting a blog post 🚨
          </p>
        </div>

        <!-- Recent Posts -->
        <div class="bg-white p-6 rounded-2xl shadow-md">
          <h3
            class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200"
          >
            Recent Posts
          </h3>
          <ul class="space-y-4">
            <li class="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
              <a href="#" class="flex items-start space-x-3 group">
                <div
                  class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold flex-shrink-0"
                >
                  01
                </div>
                <div>
                  <h4
                    class="font-semibold text-gray-800 group-hover:text-purple-600 transition"
                  >
                    Getting Started with Vue 3
                  </h4>
                  <p class="text-sm text-gray-500 mt-1">5 min read</p>
                </div>
              </a>
            </li>
            <li class="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
              <a href="#" class="flex items-start space-x-3 group">
                <div
                  class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold flex-shrink-0"
                >
                  02
                </div>
                <div>
                  <h4
                    class="font-semibold text-gray-800 group-hover:text-purple-600 transition"
                  >
                    Responsive Design Principles
                  </h4>
                  <p class="text-sm text-gray-500 mt-1">7 min read</p>
                </div>
              </a>
            </li>
            <li class="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
              <a href="#" class="flex items-start space-x-3 group">
                <div
                  class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold flex-shrink-0"
                >
                  03
                </div>
                <div>
                  <h4
                    class="font-semibold text-gray-800 group-hover:text-purple-600 transition"
                  >
                    Modern JavaScript Features
                  </h4>
                  <p class="text-sm text-gray-500 mt-1">10 min read</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="bg-white p-6 rounded-2xl shadow-md">
          <h3
            class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200"
          >
            Categories
          </h3>
          <div class="flex flex-wrap gap-3">
            <span
              class="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 cursor-pointer"
              >Tech</span
            >
            <span
              class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer"
              >Lifestyle</span
            >
            <span
              class="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 cursor-pointer"
              >Coding</span
            >
            <span
              class="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-200 cursor-pointer"
              >Tips</span
            >
            <span
              class="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-200 cursor-pointer"
              >Design</span
            >
            <span
              class="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 cursor-pointer"
              >Vue</span
            >
          </div>
        </div>

        <!-- Newsletter -->
        <div class="bg-white p-6 rounded-2xl shadow-md">
          <h3 class="text-xl font-bold text-gray-800 mb-3">Subscribe</h3>
          <p class="text-gray-600 mb-4">
            Get the latest posts delivered right to your inbox
          </p>
          <div class="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            <button
              class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 shadow-md"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </aside>
    </main>
  </section>
</template>
