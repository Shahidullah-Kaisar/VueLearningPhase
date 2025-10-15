import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [],
    }),

    actions: {
        addTask(title) {
            this.tasks.push({
                id: Date.now(),
                title,
                completed: false,
            });
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter((t) => t.id != id);
        },
        toggleTask() {
            const task = this.tasks.find((t) => t.id === id);
            if (task) task.completed = !task.completed;
        },
    },

    getters: {
        totalTasks: (state) => state.tasks.length,
        completedTasks: (state) =>
            state.tasks.filter((t) => t.completed).length,
    },
});
