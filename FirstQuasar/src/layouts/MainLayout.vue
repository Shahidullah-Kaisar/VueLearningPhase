<script setup></script>

<template>
  <div>
    <q-layout>

      <div>
        navbar
      </div>
      <!-- Router outlet for pages -->
      <q-page-container>
        <router-view />
      </q-page-container>

      <div>
        footer
      </div>
    </q-layout>
  </div>
</template>
