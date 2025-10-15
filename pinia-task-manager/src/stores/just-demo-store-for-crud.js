import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [],
        loading: false,
        error: null,
    }),

    actions: {
        // 🟢 READ: Fetch all tasks
        async fetchTasks() {
            this.loading = true;
            this.error = null;
            try {
                const res = await axios.get("http://localhost:5000/api/tasks");
                this.tasks = res.data;
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        },

        // 🟢 CREATE: Add new task
        async addTask(title) {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/tasks",
                    { title }
                );
                this.tasks.push(res.data); // backend থেকে নতুন task রিটার্ন করলে
            } catch (err) {
                this.error = err;
            }
        },

        // 🟠 UPDATE: Toggle or edit task
        async toggleTask(id) {
            try {
                const task = this.tasks.find((t) => t.id === id);
                if (!task) return;

                // নতুন completed মানের উল্টোটা পাঠাও
                const updated = { ...task, completed: !task.completed };

                // Backend এ update পাঠানো
                const res = await axios.put(
                    `http://localhost:5000/api/tasks/${id}`,
                    updated
                );

                // Local state আপডেট করো
                task.completed = res.data.completed;
            } catch (err) {
                this.error = err;
            }
        },

        async updateTaskTitle(id, newTitle) {
            try {
                const task = this.tasks.find((t) => t.id === id);
                if (!task) return;

                const res = await axios.put(
                    `http://localhost:5000/api/tasks/${id}`,
                    { ...task, title: newTitle }
                );
                task.title = res.data.title;
            } catch (err) {
                this.error = err;
            }
        },

        // 🔴 DELETE: Remove task
        async deleteTask(id) {
            try {
                await axios.delete(`http://localhost:5000/api/tasks/${id}`);
                this.tasks = this.tasks.filter((t) => t.id !== id);
            } catch (err) {
                this.error = err;
            }
        },
    },

    getters: {
        totalTasks: (state) => state.tasks.length,
        completedTasks: (state) =>
            state.tasks.filter((t) => t.completed).length,
    },
});
