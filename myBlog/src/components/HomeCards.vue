<script setup>
</script>

<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900">Life Stories & Reflections</h2>
        <p class="mt-3 text-gray-600">Short thoughts and reflections about life</p>
      </div>

      <!-- Blog Cards -->
      <div class="grid gap-8 md:grid-cols-2">
        
        <!-- Card 1 -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=400&fit=crop"
            alt="Morning Walk"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="text-green-700 text-sm font-medium">Life Journey</span>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              A Peaceful Morning Walk
            </h3>
            <p class="mt-3 text-gray-600 text-sm">
              Some of the calmest moments in life are found in the soft light of dawn and the songs of birds. 
              A simple walk becomes a reminder that each breath carries the promise of a new beginning.
            </p>
            <a
              href="#"
              class="mt-4 inline-block text-green-700 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop"
            alt="Sea Waves"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="text-green-700 text-sm font-medium">Reflections</span>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              Life Like the Waves
            </h3>
            <p class="mt-3 text-gray-600 text-sm">
              Life is much like the waves of the sea—sometimes calm, sometimes wild. 
              Yet every wave reminds us that all things, both joys and struggles, eventually pass.
            </p>
            <a
              href="#"
              class="mt-4 inline-block text-green-700 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
