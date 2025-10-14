<script setup>
import { useQuasar } from 'quasar'
import api from '../api/Api.js' 
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()

const tasks = ref([])

const editDialog = ref(false)
const editTaskData = ref({
  id: null,
  title: '',
  description: '',
  problemFaced: '',
  timeSpent: '',
})


const fetchTasks = async () => {
  try {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('user_id') 

    if (!token || !userId) {
      router.push('/login')
      return
    }

    const res = await api.getTasks(userId);


    if (res.data.success) {
      tasks.value = res.data.tasks

    } else {
      $q.notify({ type: 'negative', message: 'Failed to fetch tasks' })
    }
  } catch (err) {
    console.error(err)
    $q.notify({ type: 'negative', message: 'Server error' })
  }
}


const deleteTask = async (id) => {
  try {
    await api.deleteTask(id);
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


const updateTask = async () => {
  try {
    await api.updateTask({
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


const current = ref(1)      // Current page
const perPage = ref(2)      // Tasks per page
const totalPages = ref(1)   // Total pages

// Computed for paginated tasks
const paginatedTasks = computed(() => {
  const start = (current.value - 1) * perPage.value
  const end = start + perPage.value
  return tasks.value.slice(start, end)
})

// Watch tasks to update total pages
watch(tasks, (newTasks) => {
  totalPages.value = Math.ceil(newTasks.length / perPage.value)
})


onMounted(() => {
  fetchTasks()
})
</script>

<template>
  <!-- Task Cards -->
  <div v-if="tasks.length > 0" class="q-pa-sm">
    <q-card
      v-for="item in paginatedTasks"
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

  <div class="q-pa-lg flex flex-center bg-green-2">
  <q-pagination
    v-model="current"
    :max="totalPages"
    color="deep-orange"
    boundary-links
  />
</div>

</template>


