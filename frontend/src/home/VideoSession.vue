<template>
  <div class="session">
    <h1>This is session</h1>
  </div>
</template>

<script>
export default {
  name: 'VideoSession',
  props: {
    sessionId: { type: String },
  },
  computed: {
    currentSession() {
      const sessionId = this;
      return sessionId;
    },
  },
};
</script>
