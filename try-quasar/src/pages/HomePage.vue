<template>
  <q-page padding>
    <!-- Loading Spinner -->
    <div v-if="loading" class="text-center q-my-xl">
      <q-spinner color="primary" size="40px" />
    </div>

    <!-- News Cards -->
    <div
      v-else
      class="row justify-center q-col-gutter-md q-my-lg"
      style="max-width: 1100px; margin: 0 auto;"
    >
      <div
        v-for="n in newsList"
        :key="n.id"
        class="col-12 col-sm-6 col-md-4"
        style="display: flex; justify-content: center;"
      >
        <NewsCard :news="n" style="width: 100%; max-width: 320px;" />
      </div>
    </div>
  </q-page>
</template>



<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from 'src/stores/newsStore'
import NewsCard from 'src/components/NewsCard.vue'

const { newsList, loading, fetchNews } = useNewsStore()
onMounted(fetchNews)
</script>
