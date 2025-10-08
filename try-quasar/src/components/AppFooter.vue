<template>
  <q-footer class="footer-container">
    <div class="footer-content row items-center justify-between q-col-gutter-md">

      <!-- Left Section -->
      <div class="col-12 col-md-6 text-center text-md-left">
        <div class="footer-title">
          📰 <span class="highlight">My News App</span>
        </div>
        <div class="footer-subtitle">
          Stay informed with the latest updates around the world.
        </div>
      </div>

      <!-- Right Section -->
      <div class="col-12 col-md-6 text-center text-md-right">
        <div class="social-icons q-mb-sm">
          <q-btn
            flat
            round
            dense
            icon="mdi-facebook"
            class="social-btn"
            aria-label="Facebook"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-twitter"
            class="social-btn"
            aria-label="Twitter"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-instagram"
            class="social-btn"
            aria-label="Instagram"
          />
        </div>

        <div class="text-caption text-grey-4">
          © {{ new Date().getFullYear() }} My News App — Built with ❤️ using
          <span class="text-primary">Quasar Framework</span>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup></script>

<style scoped>
.footer-container {
  background: linear-gradient(135deg, #2c2c2c 0%, #1b1b1b 100%);
  color: #fff;
  padding: 24px 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.4);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffb74d;
  margin-bottom: 4px;
}

.highlight {
  color: #ffe082;
}

.footer-subtitle {
  color: #bdbdbd;
  font-size: 0.9rem;
  max-width: 320px;
  margin: 0 auto;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-btn {
  color: #e0e0e0;
  transition: all 0.3s ease;
}

.social-btn:hover {
  color: #ffb74d;
  transform: translateY(-3px);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .footer-container {
    text-align: center;
    padding: 20px 16px;
  }

  .footer-title {
    font-size: 1.1rem;
  }

  .footer-subtitle {
    max-width: 100%;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
