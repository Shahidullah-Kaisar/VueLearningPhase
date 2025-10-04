<template>
  <q-page class="q-pa-md">
    <!-- Hero Section -->
    <section id="hero" class="q-pa-xl flex flex-center bg-grey-2 text-center">
      <div>
        <h1 class="text-h3 text-primary">Find Your Dream Job</h1>
        <p class="text-subtitle1">
          Browse thousands of job opportunities from top companies.
        </p>
        <q-btn color="primary" label="Get Started" class="q-mt-md" />
      </div>
    </section>

    <!-- Jobs Section -->
    <section id="jobs" class="q-pa-xl">
      <div class="text-center q-mb-lg">
        <h2 class="text-h4">Latest Job Posts</h2>
        <p class="text-subtitle2">Check out the newest opportunities</p>
      </div>

      <div class="row q-col-gutter-md justify-center">
        <q-card class="col-12 col-md-3">
          <q-card-section>
            <div class="text-h6">Frontend Developer</div>
            <div class="text-subtitle2 text-grey">
              Company A - Remote
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Apply" color="primary" />
          </q-card-actions>
        </q-card>

        <q-card class="col-12 col-md-3">
          <q-card-section>
            <div class="text-h6">Backend Engineer</div>
            <div class="text-subtitle2 text-grey">
              Company B - Onsite
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Apply" color="primary" />
          </q-card-actions>
        </q-card>

        <q-card class="col-12 col-md-3">
          <q-card-section>
            <div class="text-h6">UI/UX Designer</div>
            <div class="text-subtitle2 text-grey">
              Company C - Hybrid
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Apply" color="primary" />
          </q-card-actions>
        </q-card>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="q-pa-xl bg-grey-1">
      <div class="text-center q-mb-lg">
        <h2 class="text-h4">Contact Us</h2>
        <p class="text-subtitle2">We would love to hear from you</p>
      </div>

      <div class="row justify-center">
        <q-form class="col-12 col-md-6 q-gutter-md">
          <q-input filled v-model="contact.name" label="Your Name" />
          <q-input filled v-model="contact.email" label="Your Email" type="email" />
          <q-input filled v-model="contact.message" label="Message" type="textarea" />

          <q-btn label="Send Message" color="primary" class="full-width" />
        </q-form>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const contact = ref({
  name: "",
  email: "",
  message: "",
});
</script>

<style scoped>
section {
  border-radius: 12px;
  margin-bottom: 2rem;
}
</style>
