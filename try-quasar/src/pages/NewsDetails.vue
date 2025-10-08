<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const news = ref(null)

const goBack = () => router.push('/')

onMounted(async () => {
  const res = await axios.get('/data/news.json')
  news.value = res.data.find(n => n.id == route.params.id)
})
</script>

<template>
  <q-page padding>
    <div v-if="news">
      <q-card class="news-details-card q-ma-md">
        <q-card-section>
          <div class="text-h5 title">{{ news.title }}</div>
          <div class="category-badge">{{ news.category }}</div>
          <div class="text-caption text-grey q-mb-sm">{{ news.date }}</div>

          <q-separator class="q-my-md" />

          <div class="description">
            {{ news.description }}
          </div>

          <p class="extra-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            sapien ac metus vulputate facilisis. Praesent elementum nisl non
            risus maximus, ac aliquet lorem fermentum. Integer viverra elit ut
            leo finibus, et luctus lacus gravida. In hac habitasse platea
            dictumst.
          </p>

          <div class="back-btn">
            <q-btn flat color="primary" icon="arrow_back" label="Back to Home" @click="goBack" />
          </div>
        </q-card-section>

        <div class="gradient-overlay"></div>
      </q-card>
    </div>

    <div v-else class="text-center text-grey q-mt-xl">
      <q-spinner color="primary" size="40px" />
      <div>Loading article...</div>
    </div>
  </q-page>
</template>



<style scoped>
.news-details-card {
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(139, 69, 19, 0.15);
  border: 1px solid #e8d6c9;
  padding: 16px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #fffaf0 0%, #fdf6e3 100%);
  transition: all 0.3s ease;
}

.news-details-card:hover {
  box-shadow: 0 12px 32px rgba(139, 69, 19, 0.25);
  transform: translateY(-3px);
}

.title {
  color: #5d4037;
  font-weight: 700;
  line-height: 1.4;
}

.category-badge {
  background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
  color: white !important;
  padding: 5px 14px;
  border-radius: 20px;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  margin: 6px 0 8px 0;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
}

.description {
  color: #6d4c41;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 12px;
  opacity: 0.95;
}

.extra-text {
  color: #8d6e63;
  line-height: 1.7;
  font-size: 15px;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(transparent 0%, #fdf6e3 90%);
  pointer-events: none;
  z-index: 1;
}

.back-btn {
  margin-top: 24px;
}

.news-details-card:nth-child(3n+1) .category-badge {
  background: linear-gradient(135deg, #4db6ac 0%, #00897b 100%);
}

.news-details-card:nth-child(3n+2) .category-badge {
  background: linear-gradient(135deg, #7986cb 0%, #3949ab 100%);
}

.news-details-card:nth-child(3n+3) .category-badge {
  background: linear-gradient(135deg, #a1887f 0%, #795548 100%);
}
</style>
