<template>
  <q-page class="q-pa-md bg-gradient-to-br from-blue-1 to-grey-2 flex flex-center">
    <div class="text-center q-pa-xl">
      <!-- Animated icon/logo -->
      <div class="q-mb-md">
        <q-icon 
          name="task_alt" 
          size="xl" 
          color="primary" 
          class="animated-icon"
        />
      </div>
      
      <!-- Welcome text with subtle animation -->
      <div class="text-h4 text-primary q-mb-sm text-weight-bold">
        Welcome to MyTask!
      </div>
      
      <div class="text-h6 text-grey-7 q-mb-xl">
        Your productivity companion
      </div>
      
      <!-- Enhanced button with icon -->
      <div class="text-center">
        <q-btn 
          to="/tasks" 
          label="Go to Tasks" 
          color="primary" 
          icon="rocket_launch"
          size="lg"
          class="q-px-xl shadow-4"
          rounded
        />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.animated-icon {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>