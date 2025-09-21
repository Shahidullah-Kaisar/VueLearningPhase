<script>

</script>

<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">MyApp</div>

    <!-- Nav Links (center) -->
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <!-- Right side: Login Button -->
    <div class="right-section">
      <button class="login-btn">Login</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a1a;
  padding: 1rem 2rem;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    flex: 1; // বামে
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    flex: 2;
    justify-content: center; // মাঝখানে

    li a {
      text-decoration: none;
      color: #fff;
      transition: color 0.3s ease;

      &:hover {
        color: #00bcd4;
      }
    }
  }

  .right-section {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    .login-btn {
      background: #00bcd4;
      border: none;
      padding: 0.5rem 1rem;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #0097a7;
      }

    }
  }
}
</style>
