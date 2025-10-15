<script setup>
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()

</script>

<template>
  <div class="w-[90%] md:w-[60%] lg:w-[50%] m-auto summary bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-6 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 mb-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-bold flex items-center gap-3">
        <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
        </div>
        Task Summary
      </h3>
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <span class="text-sm font-bold">{{ Math.round((taskStore.completedTasks / taskStore.totalTasks) * 100) || 0 }}%</span>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-3 gap-4">
      <!-- Total Tasks -->
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/15 transition-colors">
        <div class="text-2xl font-bold text-white mb-1">{{ taskStore.totalTasks }}</div>
        <div class="text-blue-100 text-sm font-medium">Total Tasks</div>
        <div class="w-8 h-1 bg-blue-300 rounded-full mx-auto mt-2"></div>
      </div>

      <!-- Completed -->
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/15 transition-colors">
        <div class="text-2xl font-bold text-green-300 mb-1">{{ taskStore.completedTasks }}</div>
        <div class="text-blue-100 text-sm font-medium">Completed</div>
        <div class="w-8 h-1 bg-green-300 rounded-full mx-auto mt-2"></div>
      </div>

      <!-- Remaining -->
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/15 transition-colors">
        <div class="text-2xl font-bold text-amber-300 mb-1">{{ taskStore.totalTasks - taskStore.completedTasks }}</div>
        <div class="text-blue-100 text-sm font-medium">Remaining</div>
        <div class="w-8 h-1 bg-amber-300 rounded-full mx-auto mt-2"></div>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="mt-6">
      <div class="flex justify-between text-sm text-blue-200 mb-2">
        <span>Progress</span>
        <span>{{ Math.round((taskStore.completedTasks / taskStore.totalTasks) * 100) || 0 }}%</span>
      </div>
      <div class="w-full bg-white/20 rounded-full h-2">
        <div 
          class="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-500 ease-out"
          :style="{ width: `${(taskStore.completedTasks / taskStore.totalTasks) * 100 || 0}%` }"
        ></div>
      </div>
    </div>

    <!-- Motivational Message -->
    <div class="mt-4 text-center">
      <p class="text-blue-200 text-sm italic">
        <span v-if="taskStore.completedTasks === taskStore.totalTasks && taskStore.totalTasks > 0">
          🎉 All tasks completed! Amazing work!
        </span>
        <span v-else-if="taskStore.completedTasks === 0 && taskStore.totalTasks > 0">
          💪 Let's get started! You've got this!
        </span>
        <span v-else-if="taskStore.completedTasks > taskStore.totalTasks / 2">
          🔥 Great progress! Keep going!
        </span>
        <span v-else>
          📝 Keep organizing your tasks!
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.summary {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>