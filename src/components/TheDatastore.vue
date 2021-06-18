<template>
  <button class="btn btn-sm btn-warning" @click="toggleShow">
    {{ buttonLabel }}
  </button>
  <div v-show="show">
    <div class="alert alert-secondary m-0 mt-3 p-3">
      <pre class="m-0">{{ datastore }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheDatastore",
  props: {
    datastore: Object,
  },
  data: function () {
    return {
      show: false,
    };
  },
  computed: {
    buttonLabel() {
      return this.show ? "Hide Datastore" : "Show Datastore";
    },
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    saveDatastore() {
      console.log("Saving...");
      let data = JSON.stringify(this.datastore);
      localStorage.setItem("datastore", data);
    },
    loadDatastore() {
      console.log("Loading...");
      const data = JSON.parse(localStorage.getItem("datastore"));

      if (data) {
        this.$emit("datastoreLoad", data);
      }
    },
  },
  mounted() {
    this.loadDatastore();
    const ref = this;
    /*
     * Save to datastore every 10 seconds
     */
    setInterval(function () {
      ref.saveDatastore();
    }, 10000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
