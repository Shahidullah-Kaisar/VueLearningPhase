<script setup>
import Blogs from '@/components/Blogs.vue';
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
</script>

<template>
    <Hero/>
    <HomeCards/>
    <Blogs :limit="4" :showButton="true"/>
</template>