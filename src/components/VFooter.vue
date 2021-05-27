<template>
  <div class="footer">
    <div class="container" style="margin-right: 0">
      <h4 style="margin-bottom: 0.2rem">Like to get notified when I post new content?</h4>
      <input type="email" placeholder="Email Address" v-model="emailAddress" />
      <button @click="subscribe" :disabled="emailAddress === ''">
        <span v-if="isLoading"><font-awesome-icon :icon="['fas', 'circle-notch']" /></span>
        Subscribe
      </button>
      <div class="container" style="margin-left: 0; margin-top: 0.5rem; font-size: 0.8rem">
        This site is protected by reCAPTCHA and the Google
        <a class="link" href="https://policies.google.com/privacy">Privacy Policy</a>
        and <a class="link" href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>
    </div>
  </div>
  <div id="toast">{{ toastMessage }}</div>
</template>
<script>
import axios from "axios";

export default {
  name: "VFooter",
  data: function () {
    return {
      isLoading: false,
      toastMessage: "",
      timeout: null,
      emailAddress: "",
    };
  },
  methods: {
    async subscribe() {
      this.isLoading = true;

      try {
        await this.$recaptchaLoaded();
        const response = await axios.put(process.env.VUE_APP_API_BASE_URL + "/subscribe", {
          emailAddress: this.emailAddress,
          recaptchaChallengeToken: await this.$recaptcha("login"),
        });

        if (response.status !== 200) {
          throw Error("Error: Unexpected status code returned: " + response.status);
        }
      } catch (error) {
        console.log(error);
        this.setToastMessage("error", "Subscription failed");
        this.isLoading = false;
        return;
      }

      this.emailAddress = "";
      this.setToastMessage("success", "Subscription successful");
      this.isLoading = false;
    },
    async setToastMessage(type, toastMessage) {
      clearTimeout(this.timeout);
      this.toastMessage = toastMessage;

      const toast = document.getElementById("toast");
      toast.className = type + " show";

      this.timeout = setTimeout(() => {
        toast.className = toast.className.replace(type + " show", "");
      }, 3000);
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
