<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const backendURL = "http://localhost/MyTask/backend/api";

const task = ref({
  title: "",
  description: "",
  problemFaced: "",
  timeSpent: ""
});

const tasks = ref([]);

// --- Edit Modal ---
const editDialog = ref(false);
const editTaskData = ref({
  id: null,
  title: "",
  description: "",
  problemFaced: "",
  timeSpent: ""
});

// Fetch tasks
const fetchTasks = async () => {
  try {
    const res = await axios.get(`${backendURL}/get_tasks.php`);
    tasks.value = res.data;
  } catch (err) {
    console.error(err);
    $q.notify({ type: "negative", message: "Failed to fetch tasks" });
  }
};

// Add task
const addTask = async () => {
  if (!task.value.title || !task.value.description) return;

  try {
    await axios.post(`${backendURL}/add_task.php`, task.value);
    $q.notify({ type: "positive", message: "Task added!" });
    task.value = { title: "", description: "", problemFaced: "", timeSpent: "" };
    fetchTasks();
  } catch (err) {
    console.error(err);
    $q.notify({ type: "negative", message: "Failed to add task" });
  }
};

// Delete task
const deleteTask = async (id) => {
  try {
    await axios.get(`${backendURL}/delete_task.php?id=${id}`);
    $q.notify({ type: "positive", message: "Task deleted!" });
    fetchTasks();
  } catch (err) {
    console.error(err);
    $q.notify({ type: "negative", message: "Failed to delete task" });
  }
};

// Open edit modal and populate data
const openEditModal = (item) => {
  editTaskData.value = {
    id: item.id,
    title: item.title,
    description: item.description,
    problemFaced: item.problem_faced,
    timeSpent: item.time_spent
  };
  editDialog.value = true;
};

// Update task
const updateTask = async () => {
  try {
    await axios.patch(`${backendURL}/update_task.php`, {
      id: editTaskData.value.id,
      title: editTaskData.value.title,
      description: editTaskData.value.description,
      problemFaced: editTaskData.value.problemFaced,
      timeSpent: editTaskData.value.timeSpent
    });

    $q.notify({ type: "positive", message: "Task updated!" });
    editDialog.value = false;
    fetchTasks();
  } catch (err) {
    console.error(err);
    $q.notify({ type: "negative", message: "Failed to update task" });
  }
};

onMounted(() => {
  fetchTasks();
});
</script>


<template>
  <q-page class="q-pa-md bg-gradient-to-br from-blue-1 to-purple-1 min-vh-100">

    <!-- Header Section -->
    <div class="q-mb-xl text-center">
      <div class="text-h4 text-primary text-weight-bold q-mb-xs">
        📝 MyTask Manager
      </div>
      <div class="text-subtitle1 text-grey-7">
        Organize your work efficiently
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-6">

        <!-- Add Task Form -->
        <q-card class="q-pa-lg q-mb-lg shadow-6 rounded-borders">
          <q-card-section class="q-pb-none">
            <div class="text-h6 text-primary text-weight-medium">
              ➕ Add New Task
            </div>
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

        <!-- Task List Section -->
        <div class="q-mb-md">
          <div class="text-h5 text-primary text-weight-medium q-mb-md">
            📋 Your Tasks
            <q-badge color="primary" class="q-ml-sm">{{ tasks.length }}</q-badge>
          </div>
        </div>

        <!-- Task Cards -->
        <div v-if="tasks.length > 0">
          <q-card 
            v-for="item in tasks" 
            :key="item.id" 
            class="q-mb-md shadow-3 rounded-borders task-card"
            bordered
          >
            <q-card-section class="q-pb-sm">
              <div class="row items-center">
                <div class="col">
                  <div class="text-h6 text-weight-medium text-primary">
                    {{ item.title }}
                  </div>
                </div>
                <div class="col-auto">
                  <q-icon name="schedule" size="sm" color="grey-6" />
                  <span class="text-caption text-grey-7 q-ml-xs">{{ item.time_spent }}</span>
                </div>
              </div>
              
              <q-separator class="q-my-sm" />
              
              <div class="text-body2 q-mt-sm">{{ item.description }}</div>
              
              <q-card v-if="item.problem_faced" flat class="bg-orange-1 q-mt-sm q-pa-sm rounded-borders">
                <div class="text-caption text-weight-medium">⚠️ Problem Faced:</div>
                <div class="text-caption">{{ item.problem_faced }}</div>
              </q-card>
            </q-card-section>

            <q-card-actions align="right" class="q-px-md q-pb-md">
              <q-btn 
                flat 
                color="primary" 
                icon="edit" 
                label="Edit" 
                @click="openEditModal(item)"
                dense
                class="q-px-sm"
              />
              <q-btn 
                flat 
                color="negative" 
                icon="delete" 
                label="Delete" 
                @click="deleteTask(item.id)"
                dense
                class="q-px-sm"
              />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center q-pa-xl">
          <q-icon name="task_alt" size="xl" color="grey-4" class="q-mb-md" />
          <div class="text-h6 text-grey-6">No tasks yet</div>
          <div class="text-caption text-grey-5">Add your first task above to get started!</div>
        </div>

      </div>
    </div>

    <!-- Edit Task Dialog -->
    <q-dialog v-model="editDialog" persistent>
      <q-card class="q-pa-md rounded-borders" style="min-width: 500px; max-width: 600px;">
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
              <q-btn 
                flat 
                label="Cancel" 
                color="grey" 
                v-close-popup 
                class="q-px-lg"
              />
              <q-btn 
                type="submit" 
                label="Save Changes" 
                color="primary" 
                class="q-px-lg"
                rounded
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.task-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
}

.rounded-borders {
  border-radius: 12px;
}
</style>




