<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const route = useRoute();
const router = useRouter();

const task = ref(null);

const backendURL = "http://localhost/MyTask/backend/api"; 

onMounted(async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      $q.notify({ type: "negative", message: "Please login first!" });
      router.push("/login");
      return;
    }

    const res = await axios.get(`${backendURL}/get_single_task.php?id=${route.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    task.value = res.data;

  } catch (err) {
    $q.notify({
      type: "negative",
      message: err.response?.data?.error || "Failed to load task",
    });
  }
});
</script>


<template>
  <q-page class="q-pa-md">
    <div v-if="task" class="q-pa-lg bg-white shadow-2 rounded-borders">

      <!-- Title -->
      <div class="text-h4 text-primary text-weight-bold q-mb-lg text-center">
        {{ task.task.title }}
      </div>

      <!-- Two Column Layout -->
      <div class="row q-col-gutter-xl">

        <!-- LEFT COLUMN -->
        <div class="col-12 col-md-7">
          <div class="text-subtitle1 text-weight-medium text-grey-8 q-mb-sm">
            Description:
          </div>
          <div class="text-body1 text-grey-9 q-pa-sm bg-grey-2 rounded-borders">
            {{ task.task.description }}
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-12 col-md-5">
          <div class="q-pa-sm bg-grey-1 rounded-borders">
            <div class="q-mb-md">
              <span class="text-weight-medium text-grey-8">Problem Faced: </span>
              <q-badge :color="task.task.problem_faced === 'No' ? 'green' : 'red'">
                {{ task.task.problem_faced }}
              </q-badge>
            </div>

            <div class="q-mb-md">
              <span class="text-weight-medium text-grey-8">Time Spent: </span>
              <span class="text-body1 text-blue-8">{{ task.task.time_spent }}</span>
            </div>

            <div class="q-mb-md">
              <span class="text-weight-medium text-grey-8">User ID: </span>
              <span class="text-body1 text-dark">{{ task.task.user_id }}</span>
            </div>

            <div class="q-mb-md">
              <span class="text-weight-medium text-grey-8">Created At: </span>
              <span class="text-body1 text-dark">{{ task.task.created_at }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Back Button -->
      <div class="q-mt-xl text-center">
        <q-btn
          color="deep-orange"
          label="Back to Tasks"
          icon="arrow_back"
          @click="$router.push('/tasks')"
          unelevated
        />
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="text-center q-mt-xl">
      <q-spinner color="primary" size="50px" />
      <div class="text-grey q-mt-md">Loading task...</div>
    </div>
  </q-page>
</template>


<style scoped>
.q-page {
  background: #f8fafc;
}
.rounded-borders {
  border-radius: 10px;
}
</style>



