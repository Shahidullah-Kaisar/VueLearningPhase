<template>
  <q-page class="q-pa-md bg-gradient-to-b from-blue-1 to-grey-2">
    <!-- Header -->
    <div class="text-center q-mb-xl">
      <q-icon name="task_alt" size="4rem" color="primary" class="q-mb-sm" />
      <div class="text-h4 text-primary text-weight-bold">MyTask</div>
      <div class="text-subtitle1 text-grey-7">Your Personal Productivity Companion</div>
    </div>

    <!-- Content Cards -->
    <div class="row q-col-gutter-md justify-center">
      <!-- Feature Card 1 -->
      <div class="col-12 col-md-4">
        <q-card class="text-center q-pa-md shadow-3 rounded-borders" style="background: white;">
          <q-icon name="description" size="3rem" color="primary" class="q-mb-sm" />
          <div class="text-h6 text-weight-medium text-primary q-mb-xs">Task Management</div>
          <div class="text-caption text-grey-7">
            Easily create, edit, and organize your daily tasks with detailed descriptions
          </div>
        </q-card>
      </div>

      <!-- Feature Card 2 -->
      <div class="col-12 col-md-4">
        <q-card class="text-center q-pa-md shadow-3 rounded-borders" style="background: white;">
          <q-icon name="bug_report" size="3rem" color="orange" class="q-mb-sm" />
          <div class="text-h6 text-weight-medium text-orange q-mb-xs">Problem Tracking</div>
          <div class="text-caption text-grey-7">
            Record challenges and problems faced during task completion for future reference
          </div>
        </q-card>
      </div>

      <!-- Feature Card 3 -->
      <div class="col-12 col-md-4">
        <q-card class="text-center q-pa-md shadow-3 rounded-borders" style="background: white;">
          <q-icon name="schedule" size="3rem" color="green" class="q-mb-sm" />
          <div class="text-h6 text-weight-medium text-green q-mb-xs">Time Management</div>
          <div class="text-caption text-grey-7">
            Track time spent on each task to improve productivity and time allocation
          </div>
        </q-card>
      </div>
    </div>

    <!-- Tech Stack -->
    <q-card class="q-mt-xl q-pa-lg text-center shadow-2 rounded-borders" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
      <div class="text-h6 text-white text-weight-medium q-mb-md">Built With Modern Technology</div>
      <div class="row justify-center items-center q-gutter-lg">
        <q-badge outline color="white" class="q-px-md q-py-sm">
          <q-icon name="code" size="sm" class="q-mr-xs" />
          Quasar + Vue 3
        </q-badge>
        <q-badge outline color="white" class="q-px-md q-py-sm">
          <q-icon name="storage" size="sm" class="q-mr-xs" />
          PHP + MySQL
        </q-badge>
        <q-badge outline color="white" class="q-px-md q-py-sm">
          <q-icon name="api" size="sm" class="q-mr-xs" />
          REST API
        </q-badge>
      </div>
    </q-card>

    <!-- Footer Note -->
    <div class="text-center q-mt-xl">
      <div class="text-caption text-grey-6">
        Stay organized • Track progress • Improve productivity
      </div>
    </div>
  </q-page>
</template>


<style scoped>
.rounded-borders {
  border-radius: 16px;
}

.bg-gradient-to-b {
  background: linear-gradient(to bottom, #e3f2fd, #f5f5f5);
}
</style>
