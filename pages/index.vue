<template>
  <div class="hero pt-28 pb-60 bg-white">
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-xl lg:text-5xl md:text-5xl font-bold text-accent">ENCRYPTION MORE THAN JUST A CRYPTOCURRENCY SITE</h1>
        <p class="mb-5 font-bold text-accent">
          Stay tuned with the latest data about cryptocurrencies in our two
          formats: Table view or Panel view.
        </p>
        <div class="flex justify-center items-center">
          <nuxt-link to="/cryptotable"
            ><TheButton>TABLE VIEW</TheButton></nuxt-link
          >
          <nuxt-link to="/cryptopanel"
            ><TheButton>PANEL VIEW</TheButton></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
