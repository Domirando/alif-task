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
  @apply mx-24 relative min-h-full flex flex-col text-[#2c3e50] text-center;
}

nav {
  padding: 30px;
  height: 50px;
}

nav .logo {
  @apply font-bold float-left text-2xl;
}
footer {
  @apply flex justify-center h-[50px];
}
main {
  min-height: calc(100vh - 50px - 50px);
}
@media only screen and (max-width: 940px) {
  #app {
    @apply mx-8 overscroll-x-none items-end text-center;
  }
  footer {
    @apply pt-8;
  }
}
</style>
