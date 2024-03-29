<template>
  <div class="center-v">
    <div class="container">
      <h1 class="title">Graceful Shutdowns in Golang with signal.NotifyContext</h1>
      <span><font-awesome-icon :icon="['far', 'calendar-alt']" /> February 25, 2021</span>
      <p>Graceful shutdowns are an important part of any application, especially if that application modifies state. Before you “pull the plug” you should be responding to those HTTP requests, finishing off database interactions and closing off anything that might be left otherwise hanging or orphaned.</p>
      <p>With the new signal.NotifyContext function that was released with Go 1.16, graceful shutdowns are easier than ever to add into your application.</p>
      <p>Here is a simple web server with a single handler that will sleep for 10 seconds before responding. If you run this web server locally, execute a <a class="link" href="https://curl.se" target="_blank">cURL</a> or <a class="link" href="https://www.postman.com" target="_blank">Postman</a> request against it, then immediately send the interrupt signal with Ctrl+C. You’ll see the server gracefully shutdown by responding to the existing request before terminating. If the shutdown is taking too long another interrupt signal can be sent to exit immediately. Alternatively the timeout will kick in after 5 seconds.</p>
      <pre class="code-block">
        <code class="language-go" data-prismjs-copy="Copy">{{ format(codeBlock) }}</code>
      </pre>
      <p>Below you'll find some resources that I would recommend reading if you'd like a better understanding of the signal.NotifyContext function, the context package or the importance of graceful shutdowns.</p>
      <ul>
        <li>
          signal.NotifyContext
          <a class="link" href="https://pkg.go.dev/os/signal#NotifyContext" target="_blank"> documentation</a>.
        </li>
        <li>
          JustForFunc Episode 9,
          <a class="link" href="https://www.youtube.com/watch?list=PL64wiCrrxh4Jisi7OcCJIUpguV_f5jGnZ&v=LSzR0VEraWw" target="_blank"> The Context Package</a>.
        </li>
        <li>
          Wayne Ashley Berry's
          <a class="link" href="https://medium.com/over-engineering/graceful-shutdown-with-go-http-servers-and-kubernetes-rolling-updates-6697e7db17cf" target="_blank"> article </a>
          on graceful shutdown with Go http servers and Kubernetes rolling updates. This is a great article showing a real world situation where this can be applied. Just note, this article was written pre Go 1.16 so the code snippets will show the older way of listening for signals from the operating system.
        </li>
        <li>Some insightful <a class="link" href="https://www.reddit.com/r/golang/comments/ngx1mu/graceful_shutdowns_in_golang_with" target="_blank">comments and feedback</a> about this post from some kind Gophers over on <a class="link" href="https://www.reddit.com/r/golang" target="_blank">r/golang</a>.</li>
      </ul>
      <v-footer />
    </div>
  </div>
</template>
<script>
import prism from "prismjs";
import VFooter from "@/components/VFooter";
import codeBlock from "@/assets/code-blocks/golang-signal-notify-context.go";

require("prismjs/components/prism-go.js");

export default {
  name: "GolangSignalNotifyContext",
  components: {
    VFooter,
  },
  data() {
    return {
      codeBlock: codeBlock,
    };
  },
  mounted: function () {
    prism.highlightAll();
  },
  methods: {
    // Remove new line at the end and add one
    // at the start. Fixes formatting with Prism.
    format(string) {
      return "\n" + string.trim();
    },
  },
};
</script>
