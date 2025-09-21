<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <Navbar />
  <Hero title="Test Title"/> 
  <HomeCards/>
  <JobListings :limit="3" :show-button="true"/>   <!-- :limit dile mane : eta dile bujhai number r na dile string-->
</template>

<style scoped>


</style>


<!-- ✅ Rule of thumb

Static string → colon lagbe na
Variable, number, boolean, expression → colon dite hobe
Eita dynamic props ba JavaScript expression pathanor jonno use hoy.
-->