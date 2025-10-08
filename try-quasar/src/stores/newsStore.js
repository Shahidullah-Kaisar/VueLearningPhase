import { ref } from 'vue'
import axios from 'axios'

export function useNewsStore() {
  const newsList = ref([])
  const loading = ref(false)

  const fetchNews = async () => {
    loading.value = true
    try {
      const res = await axios.get('/data/news.json')
      newsList.value = res.data
    } catch (err) {
      console.error('Error loading news:', err)
    } finally {
      loading.value = false
    }
  }

  return { newsList, loading, fetchNews }
}
