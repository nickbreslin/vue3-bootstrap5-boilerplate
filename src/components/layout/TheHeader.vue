<template>
  <div class="h2 border-bottom mb-5">{{ title }}</div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  }
};
</script>
