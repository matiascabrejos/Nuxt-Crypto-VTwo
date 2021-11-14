<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Crypto App</span>
    </div>

    <label
      class="
        block
        lg:hidden
        cursor-pointer
        flex
        items-center
        px-3
        py-2
        border
        rounded
        text-teal-200
        border-teal-400
        hover:text-white hover:border-white
      "
      for="menu-toggle"
      ><svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
    ></label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div
      class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      id="menu"
    >
      <div class="text-sm lg:flex-grow">
        <nuxt-link
          to="/"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-accent
            mr-4
            text-base
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-5 mr-2 stroke-current mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </nuxt-link>
        <nuxt-link
          to="/cryptotable"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-accent
            mr-4
            text-base
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-5 mr-2 stroke-current mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          Table View
        </nuxt-link>
        <nuxt-link
          to="/cryptopanel"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200
            hover:text-accent
            text-base
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-5 mr-2 stroke-current mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
          Panel View
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
a.active {
  @apply text-accent;
}
/* a:hover,
a.active {
  color: red;
  border-color: black;
  background-color: white;
} */
nav {
  background-color: #171717;
}
</style>
