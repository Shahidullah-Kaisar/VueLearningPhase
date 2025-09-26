<script setup>
</script>

<template>
  <section class="bg-green-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center py-16">

        <!-- Text Content -->
        <div class="mb-10 lg:mb-0">
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to <span class="text-green-700">my Blog</span>
          </h1>
          <p class="mt-6 text-lg text-gray-600">
            Build modern web applications faster with Vue and TailwindCSS.
            Clean design, mobile responsive, and easy to customize.
          </p>
          <div class="mt-8 flex space-x-4">
            <a
              href="#"
              class="px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              class="px-6 py-3 bg-white border border-green-700 text-green-700 rounded-lg shadow hover:bg-green-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <!-- Image Content -->
        <div class="flex justify-center lg:justify-end">
          <img
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"
            alt="Hero Image"
            class="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
