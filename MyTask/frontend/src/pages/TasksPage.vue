<script setup>
import axios from 'axios'
import { useQuasar } from 'quasar'
import { onMounted, ref } from 'vue'

const $q = useQuasar()
const backendURL = 'http://localhost/MyTask/backend/api'

const tasks = ref([])
// Fetch tasks
const fetchTasks = async () => {
  try {
    const res = await axios.get(`${backendURL}/get_tasks.php`)
    tasks.value = res.data
  } catch (err) {
    console.error(err)
    $q.notify({ type: 'negative', message: 'Failed to fetch tasks' })
  }
}

onMounted(() => {
  fetchTasks()
})
</script>

<template>
  <!-- Task Cards -->
  <div v-if="tasks.length > 0" class="q-pa-sm">
    <q-card
      v-for="item in tasks"
      :key="item.id"
      class="q-mb-md shadow-6 rounded-borders task-card transition-all hover:shadow-12"
      bordered
      style="background: linear-gradient(135deg, #E8F5E9 0%, #FFFFFF 100%);"
    >
      <q-card-section class="q-pb-sm">
        <!-- Title & Time -->
        <div class="row items-center justify-between">
          <div class="col">
            <div class="text-h6 text-weight-bold text-green-9">
              {{ item.title }}
            </div>
          </div>
          <div class="col-auto row items-center q-gutter-xs">
            <q-icon name="schedule" size="sm" color="grey-6" />
            <span class="text-caption text-grey-7">{{ item.time_spent }}</span>
          </div>
        </div>

        <q-separator class="q-my-sm" />

        <!-- Description -->
        <div class="text-body2 q-mt-sm text-grey-8">
          {{ item.description }}
        </div>

        <!-- Problem Faced Section -->
        <q-card
          v-if="item.problem_faced"
          flat
          class="bg-orange-1 q-mt-md q-pa-md rounded-borders shadow-2 hover:shadow-4 transition-all"
          style="border-left: 4px solid #FF9800;"
        >
          <div class="text-caption text-weight-bold text-orange-9 mb-xs">
            ⚠️ Problem Faced:
          </div>
          <div class="text-caption text-grey-8">🥹 {{ item.problem_faced }}</div>
        </q-card>
      </q-card-section>

      <!-- Actions -->
      <q-card-actions align="right" class="q-px-md q-pb-md">
        <q-btn
          flat
          color="green-8"
          icon="edit"
          label="Edit"
          @click="openEditModal(item)"
          dense
          class="q-px-sm hover:bg-green-2 transition-all"
        />
        <q-btn
          flat
          color="negative"
          icon="delete"
          label="Delete"
          @click="deleteTask(item.id)"
          dense
          class="q-px-sm hover:bg-red-2 transition-all"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

