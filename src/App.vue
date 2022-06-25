<template>
  <nav>
    <router-link to="/" class="logo">AlifTech</router-link>
  </nav>
  <main>
    <router-view />
  </main>
  <footer>Copyright © 2022 Task AlifTech 2022. All rights reserved</footer>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply mx-24 relative min-h-full text-[#2c3e50] text-center;
}

nav {
  padding: 30px;
}

nav .logo {
  @apply font-bold float-left text-2xl;
}

footer {
  @apply bg-slate-100 bottom-0 w-full h-[40px] absolute;
}
</style>
