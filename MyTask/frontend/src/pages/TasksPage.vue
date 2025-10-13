<script setup>
import axios from 'axios'
import { useQuasar } from 'quasar'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()
const backendURL = 'http://localhost/MyTask/backend/api'

const tasks = ref([])

// --- Edit Modal ---
const editDialog = ref(false)
const editTaskData = ref({
  id: null,
  title: '',
  description: '',
  problemFaced: '',
  timeSpent: '',
})

// Fetch tasks
const fetchTasks = async () => {
  try {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('user_id') // login সময়ে set করা লাগবে

    if (!token || !userId) {
      router.push('/login')
      return
    }

    const res = await axios.get(`${backendURL}/get_tasks.php?user_id=${userId}`)

    if (res.data.success) {
      tasks.value = res.data.tasks
      console.log(tasks)
    } else {
      $q.notify({ type: 'negative', message: 'Failed to fetch tasks' })
    }
  } catch (err) {
    console.error(err)
    $q.notify({ type: 'negative', message: 'Server error' })
  }
}

// Delete task
const deleteTask = async (id) => {
  try {
    await axios.get(`${backendURL}/delete_task.php?id=${id}`)
    $q.notify({ type: 'positive', message: 'Task deleted!' })
    fetchTasks()
  } catch (err) {
    console.error(err)
    $q.notify({ type: 'negative', message: 'Failed to delete task' })
  }
}

// Open edit modal and populate data
const openEditModal = (item) => {
  editTaskData.value = {
    id: item.id,
    title: item.title,
    description: item.description,
    problemFaced: item.problem_faced,
    timeSpent: item.time_spent,
  }
  editDialog.value = true
}

// Update task
const updateTask = async () => {
  try {
    await axios.patch(`${backendURL}/update_task.php`, {
      id: editTaskData.value.id,
      title: editTaskData.value.title,
      description: editTaskData.value.description,
      problemFaced: editTaskData.value.problemFaced,
      timeSpent: editTaskData.value.timeSpent,
    })

    $q.notify({ type: 'positive', message: 'Task updated!' })
    editDialog.value = false
    fetchTasks()
  } catch (err) {
    console.error(err)
    $q.notify({ type: 'negative', message: 'Failed to update task' })
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
      style="background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%)"
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
          style="border-left: 4px solid #ff9800"
        >
          <div class="text-caption text-weight-bold text-orange-9 mb-xs">⚠️ Problem Faced:</div>
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

      <div class="q-pa-md">
        <q-btn :to="`/task/${item.id}`" color="deep-orange" glossy label="Show Details" />
      </div>
    </q-card>

    <!-- Edit Task Dialog -->
    <q-dialog v-model="editDialog" persistent>
      <q-card class="q-pa-md rounded-borders" style="min-width: 500px; max-width: 600px">
        <q-card-section class="q-pb-none">
          <div class="text-h5 text-primary text-weight-medium">✏️ Edit Task</div>
        </q-card-section>

        <q-card-section>
          <q-form @submit.prevent="updateTask" class="q-gutter-md">
            <q-input
              v-model="editTaskData.title"
              label="Task Title"
              outlined
              dense
              bg-color="white"
            />

            <q-input
              v-model="editTaskData.description"
              type="textarea"
              label="Description"
              outlined
              dense
              bg-color="white"
              rows="2"
            />

            <q-input
              v-model="editTaskData.problemFaced"
              type="textarea"
              label="Problem Faced"
              outlined
              dense
              bg-color="white"
              rows="2"
            />

            <q-input
              v-model="editTaskData.timeSpent"
              label="Time Spent"
              outlined
              dense
              bg-color="white"
            />

            <div class="row justify-end q-pt-sm q-gutter-sm">
              <q-btn flat label="Cancel" color="grey" v-close-popup class="q-px-lg" />
              <q-btn type="submit" label="Save Changes" color="primary" class="q-px-lg" rounded />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

  <!-- Empty State -->
  <div v-else class="text-center q-pa-xl">
    <q-icon name="task_alt" size="xl" color="grey-4" class="q-mb-md" />
    <div class="text-h6 text-grey-6">No tasks yet</div>
    <div class="text-caption text-grey-5">Add your first task above to get started!</div>
  </div>
</template>
