<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({ news: Object })
const router = useRouter()
const goToDetails = () => router.push(`/news/${props.news.id}`)
</script>

<template>
  <q-card 
    class="news-card q-ma-md cursor-pointer" 
    @click="goToDetails"
    style="width: 320px; height: 420px;"
  >
    <q-img 
      :src="news.image" 
      ratio="16/9" 
      style="height: 180px;"
    />
    <q-card-section class="card-content">
      <div class="text-h6 card-title">{{ news.title }}</div>
      <div class="text-subtitle2 category-badge">{{ news.category }}</div>
      <div class="text-caption text-grey q-mb-sm">{{ news.date }}</div>
      <div class="text-body2 card-description">{{ news.description }}</div>
    </q-card-section>
    
    <!-- Gradient overlay for better text readability -->
    <div class="gradient-overlay"></div>
  </q-card>
</template>

<style scoped>
.news-card {
  width: 320px;
  height: 420px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
  border: 1px solid #e8d6c9;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #fffaf0 0%, #fdf6e3 100%);
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(139, 69, 19, 0.2);
  border-color: #d4a574;
}

.card-content {
  padding: 16px;
  height: calc(420px - 180px);
  display: flex;
  flex-direction: column;
  background: transparent;
  position: relative;
  z-index: 2;
}

.card-title {
  color: #5d4037;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.category-badge {
  background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
  color: white !important;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  font-weight: 500;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
}

.card-description {
  color: #6d4c41;
  line-height: 1.5;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.9;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(transparent 0%, #fdf6e3 80%);
  pointer-events: none;
  z-index: 1;
}

/* Unique color variations for different categories */
.news-card:nth-child(3n+1) .category-badge {
  background: linear-gradient(135deg, #4db6ac 0%, #00897b 100%);
  box-shadow: 0 2px 8px rgba(0, 137, 123, 0.3);
}

.news-card:nth-child(3n+2) .category-badge {
  background: linear-gradient(135deg, #7986cb 0%, #3949ab 100%);
  box-shadow: 0 2px 8px rgba(57, 73, 171, 0.3);
}

.news-card:nth-child(3n+3) .category-badge {
  background: linear-gradient(135deg, #a1887f 0%, #795548 100%);
  box-shadow: 0 2px 8px rgba(121, 85, 72, 0.3);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .news-card {
    width: 280px;
    height: 380px;
  }
  
  .card-content {
    height: calc(380px - 180px);
  }
}
</style>
