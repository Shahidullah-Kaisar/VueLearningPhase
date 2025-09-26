import AddBlogs from "@/pages/AddBlogs.vue";
import EditBlogs from "@/pages/EditBlogs.vue";
import Home from "@/pages/Home.vue";
import MyBlogs from "@/pages/MyBlogs.vue";
import SingleBlog from "@/pages/SingleBlog.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/myBlogs",
            name: "my-blogs",
            component: MyBlogs
        },
        {
            path: "/addBlogs",
            name: "add-blogs",
            component: AddBlogs
        },
        {
            path: "/myBlogs/:id",
            name: "single-blog",
            component: SingleBlog
        },
        {
            path: "/editBlogs/:id",
            name: "edit-blog",
            component: EditBlogs
        },

    ]
})

export default router;