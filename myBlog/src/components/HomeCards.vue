<script setup>
</script>

<template>
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-gray-900">Tech Insights & Blog Stories</h2>
        <p class="mt-3 text-gray-600 text-lg">Explore tutorials, tips, and reflections on web development and technology.</p>
      </div>

      <!-- Blog Cards -->
      <div class="grid gap-8 md:grid-cols-3">
        
        <!-- Card 1 -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
            alt="Web Development"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Web Dev</span>
            <h3 class="mt-2 text-2xl font-semibold text-gray-900 hover:text-purple-600 transition">
              Understanding Vue 3 Reactivity
            </h3>
            <p class="mt-3 text-gray-600 text-sm">
              Learn how Vue 3 reactivity works under the hood, and how to optimize your components for better performance and maintainability.
            </p>
            <a
              href="#"
              class="mt-4 inline-block text-purple-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://media.istockphoto.com/id/2212360504/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-visualization-web.jpg?s=1024x1024&w=is&k=20&c=skd_SMOtTMujQh9SX6oawwdSDeuPhmkxXmVqxUWLPrA="
            alt="Coding Workflow"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Tips & Tricks</span>
            <h3 class="mt-2 text-2xl font-semibold text-gray-900 hover:text-green-600 transition">
              Boosting Productivity with VS Code
            </h3>
            <p class="mt-3 text-gray-600 text-sm">
              Discover VS Code extensions, shortcuts, and workflows that help you code faster, smarter, and with fewer errors.
            </p>
            <a
              href="#"
              class="mt-4 inline-block text-green-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
            alt="UI/UX Design"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Design</span>
            <h3 class="mt-2 text-2xl font-semibold text-gray-900 hover:text-blue-600 transition">
              Modern UI/UX Design Principles
            </h3>
            <p class="mt-3 text-gray-600 text-sm">
              Explore the latest UI/UX trends and how to create intuitive, visually appealing interfaces for your web applications.
            </p>
            <a
              href="#"
              class="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
