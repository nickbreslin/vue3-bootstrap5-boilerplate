<template>
  <div class="container-fluid mt-5 border-top border-secondary pt-3 text-small">
    &copy; {{ year }}
    <a class="" href="https://slyboots.studio" target="_blank"
      >Slyboots Studio</a
    >
    <a
      class="ms-3 border-start ps-3 border-secondary"
      href="https://www.patreon.com/slybootsstudio"
      target="_blank"
      >Support via Patreon</a
    >
    <span class="ms-3 border-start ps-3 border-secondary"
      >Version {{ version }}</span
    >
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data: function () {
    return {
      repository: process.env.VUE_APP_REPOSITORY,
      version: process.env.VUE_APP_VERSION,
    };
  },
  props: {},
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
