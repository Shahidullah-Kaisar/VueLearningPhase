<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/taskStore";

const taskStore = useTaskStore();
const newTask = ref("");

const addNewTask = () => {
    if (newTask.value.trim()) {
        taskStore.addTask(newTask.value);
        newTask.value = "";
    }
};
</script>

<template>
    <div
        class="w-[90%] md:w-[60%] lg:w-[50%] mt-10 m-auto bg-gradient-to-br from-amber-700 to-amber-800 text-white shadow-2xl shadow-amber-600/50 rounded-2xl transition-all duration-500 hover:shadow-amber-600/70 mb-6"
    >
        <div class="p-6 md:p-8">
            <!-- Header -->
            <div class="text-center mb-8">
                <div
                    class="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4"
                >
                    <svg
                        class="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        ></path>
                    </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold mb-2">
                    Task Manager
                </h2>
                <p class="text-amber-200">Stay organized and productive</p>
            </div>

            <!-- Input Section -->
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <input
                    class="flex-1 border-2 border-amber-500 bg-amber-600/30 rounded-xl px-4 py-3 outline-none placeholder-amber-200 focus:border-amber-400 focus:bg-amber-600/50 transition-colors"
                    v-model="newTask"
                    placeholder="What needs to be done?"
                    @keyup.enter="addNewTask"
                />
                <button
                    class="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-xl font-semibold hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    @click="addNewTask"
                >
                    Add Task
                </button>
            </div>

            <!-- Tasks List -->
            <div class="space-y-3 mb-8 max-h-96 overflow-y-auto pr-2">
                <div
                    v-for="task in taskStore.tasks"
                    :key="task.id"
                    class="bg-amber-600/40 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-amber-600/60"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <div class="relative">
                                <input
                                    type="checkbox"
                                    v-model="task.completed"
                                    @change="taskStore.toggleTask(task.id)"
                                    class="w-5 h-5"
                                />
                            </div>
                            <span
                                class="text-lg transition-all duration-300"
                                :class="{
                                    'line-through text-amber-300 opacity-75':
                                        task.completed,
                                    'text-white': !task.completed,
                                }"
                            >
                                {{ task.title }}
                            </span>
                        </div>
                        <button
                            class="bg-amber-500/20 hover:bg-red-500/80 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-110"
                            @click="taskStore.deleteTask(task.id)"
                        >
                            <svg
                                class="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Empty State -->
                <div
                    v-if="taskStore.tasks.length === 0"
                    class="text-center py-12 text-amber-200"
                >
                    <svg
                        class="w-16 h-16 mx-auto mb-4 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                    </svg>
                    <p class="text-xl">No tasks yet. Add one above!</p>
                </div>
            </div>

            <!-- Stats -->
            <div class="bg-amber-600/30 rounded-xl p-4 backdrop-blur-sm">
                <div
                    class="flex justify-between items-center text-sm md:text-base"
                >
                    <div class="text-center">
                        <p class="text-amber-200">Total Tasks</p>
                        <p class="text-2xl font-bold text-white">
                            {{ taskStore.totalTasks }}
                        </p>
                    </div>
                    <div class="h-12 w-px bg-amber-500/50"></div>
                    <div class="text-center">
                        <p class="text-amber-200">Completed</p>
                        <p class="text-2xl font-bold text-white">
                            {{ taskStore.completedTasks }}
                        </p>
                    </div>
                    <div class="h-12 w-px bg-amber-500/50"></div>
                    <div class="text-center">
                        <p class="text-amber-200">Progress</p>
                        <p class="text-2xl font-bold text-white">
                            {{
                                taskStore.totalTasks > 0
                                    ? Math.round(
                                          (taskStore.completedTasks /
                                              taskStore.totalTasks) *
                                              100
                                      )
                                    : 0
                            }}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
