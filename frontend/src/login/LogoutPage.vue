<template>
<div>
</div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('user/destroyToken');
    this.$router.push('/');
  },
};
</script>
