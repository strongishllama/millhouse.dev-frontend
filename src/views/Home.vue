<template>
  <div class="center-vh text-center">
    <div>
      <img class="rounded" src="@/assets/images/profile.jpg" width="256" height="256" alt="" />
      <h1 class="title">Taliesin Millhouse</h1>
      <h2 class="subtitle">Software Developer</h2>
      <a class="icon" href="https://github.com/strongishllama" target="_blank" rel="noopener" aria-label="GitHub">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </a>
      <a class="icon" href="https://www.linkedin.com/in/tmillhouse" target="_blank" rel="noopener" aria-label="LinkedIn">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.center-vh {
  height: 80vh;
}
</style>
