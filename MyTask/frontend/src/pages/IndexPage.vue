<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'


const $q = useQuasar()
const backendURL = 'http://localhost/MyTask/backend/api'

const router = useRouter()

const task = ref({
  title: '',
  description: '',
  problemFaced: '',
  timeSpent: '',
  user_id: '',
})


// Add task
const addTask = async () => {
  if (!task.value.title || !task.value.description) return

  try {
    const userId = localStorage.getItem('user_id') // logged-in user
    if (!userId) {
      $q.notify({ type: 'negative', message: 'User not logged in' })
      return
    }

    await axios.post(`${backendURL}/add_task.php`, {
      ...task.value,
      user_id: userId,
    })

    $q.notify({ type: 'positive', message: 'Task added!' })
    task.value = { title: '', description: '', problemFaced: '', timeSpent: '' }
    router.push('/tasks');
  

  } catch (err) {
    console.error(err)
    $q.notify({ type: 'negative', message: 'Failed to add task' })
  }
}

</script>


<template>
  <q-page class="q-pa-md bg-gradient-to-br from-blue-1 to-purple-1 min-vh-100">
    <!-- Header Section -->
    <div class="q-mb-xl text-center">
      <div class="text-h4 text-primary text-weight-bold q-mb-xs">📝 MyTask Manager</div>
      <div class="text-subtitle1 text-grey-7">Organize your work efficiently</div>
    </div>

    <!-- Main Content Container -->
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-6">
        <!-- Add Task Form -->
        <q-card class="q-pa-lg q-mb-lg shadow-6 rounded-borders">
          <q-card-section class="q-pb-none">
            <div class="text-h6 text-primary text-weight-medium">➕ Add New Task</div>
          </q-card-section>

          <q-card-section>
            <q-form @submit.prevent="addTask" class="q-gutter-md">
              <q-input
                v-model="task.title"
                label="Task Title"
                outlined
                dense
                bg-color="white"
                placeholder="Enter task title..."
              />

              <q-input
                v-model="task.description"
                type="textarea"
                label="Description"
                outlined
                dense
                bg-color="white"
                placeholder="Describe your task..."
                rows="2"
              />

              <q-input
                v-model="task.problemFaced"
                type="textarea"
                label="Problem Faced"
                outlined
                dense
                bg-color="white"
                placeholder="Any challenges faced?"
                rows="2"
              />

              <q-input
                v-model="task.timeSpent"
                label="Time Spent"
                outlined
                dense
                bg-color="white"
                placeholder="e.g., 2 hours"
              />

              <div class="text-right q-pt-sm">
                <q-btn
                  type="submit"
                  label="Add Task"
                  color="primary"
                  icon="add_task"
                  class="q-px-xl"
                  rounded
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>    
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.task-card {
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.rounded-borders {
  border-radius: 12px;
}
</style>
