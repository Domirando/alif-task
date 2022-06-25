<template>
  <nav>
    <router-link to="/">List of Quotes</router-link>
  </nav>
  <router-view class="roouter" />
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
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  position: relative;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.roouter {
  @apply mx-16;
}

nav a.router-link-exact-active {
  @apply text-cyan-700;
}

footer {
  @apply bg-slate-100 bottom-0 w-full h-[40px] absolute;
}
</style>
