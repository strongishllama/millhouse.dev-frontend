<template>
  <div class="footer">
    <div class="container" style="margin-right: 0">
      <h4>Like to get notified when I post new material?</h4>
      <input type="email" placeholder="Email Address" />
      <button @click="subscribe">Subscribe</button>
      <vue-recaptcha></vue-recaptcha>
    </div>
  </div>
</template>
<script>
import VueRecaptcha from "vue-recaptcha-v3";

export default {
  name: "VFooter",
  components: {
    "vue-recaptcha": VueRecaptcha,
  },
  methods: {
    async subscribe() {
      await this.$recaptchaLoaded();
      const token = await this.$recaptcha("login");
      console.log(token);
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  margin-bottom: 0;
  margin-left: 0;

  @media (min-width: 397px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

h4 {
  margin-bottom: 0;
}

input {
  @media (min-width: 397px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }
}
</style>
