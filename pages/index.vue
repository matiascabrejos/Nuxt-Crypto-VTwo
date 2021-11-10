<template>
  <div class="hero min-h-screen">
    <div class="hero-overlay"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-accent">Crypto</h1>
        <p class="mb-5 font-bold text-accent">
          Stay tuned with the latest data about cryptocurrencies in our two
          formats: Table view or Panel view.
        </p>
        <div class="flex justify-center items-center">
          <nuxt-link to="/cryptopanel"><TheButton>PANEL VIEW</TheButton></nuxt-link>
          <nuxt-link to="/cryptotable"><TheButton>TABLE VIEW</TheButton></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
