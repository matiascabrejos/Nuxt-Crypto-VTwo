<template>
  <nav class="flex items-center justify-between flex-wrap p-6 bg-gray-900">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">ENCRYPTION</span>
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
        border-teal-400
        text-white
        hover:text-accent hover:border-accent
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
            text-white
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
            hover:text-accent
            mr-4
            text-white text-base
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
            hover:text-accent
            text-white text-base
            mr-4
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
        <nuxt-link
          to="/news"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            hover:text-accent
            mr-4
            text-white text-base
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
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          News
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
a.nuxt-link-exact-active {
  @apply text-accent;
}
</style>
