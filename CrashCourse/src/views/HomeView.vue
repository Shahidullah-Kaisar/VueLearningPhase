<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Hero title="Test Title" />
  <HomeCards />
  <JobListings :limit="3" :show-button="true" /> <!-- :limit dile mane : eta dile bujhai number r na dile string--> 
</template>


<!-- ✅ Rule of thumb

Static string → colon lagbe na
Variable, number, boolean, expression → colon dite hobe
Eita dynamic props ba JavaScript expression pathanor jonno use hoy.
-->