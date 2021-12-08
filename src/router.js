import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: function () {
            return import(/* webpackChunkName: "Home" */ "./views/Home.vue");
        },
    },
    {
        path: "/accounts/emailsignup",
        name: "Join",
        component: function () {
            return import(/* webpackChunkName: "about" */ "./views/Join.vue");
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
