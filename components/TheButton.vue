<template>
  <div class="px-2 py-2">
    <div class="grid gap-8 items-start justify-center">
      <div class="relative group">
        <div
          class="
            absolute
            -inset-0.5
            bg-gradient-to-r
            from-pink-600
            to-purple-600
            rounded-lg
            blur
            opacity-75
            group-hover:opacity-100
            transition
            duration-1000
            group-hover:duration-200
            animate-tilt
          "
        ></div>
        <button
          class="
            relative
            px-7
            py-4
            bg-black
            rounded-lg
            leading-none
            flex
            items-center
            divide-x divide-gray-600
          "
        >
          <span
            class="
              text-indigo-400
              group-hover:text-gray-100
              transition
              duration-200
            "
            ><slot></slot
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>
