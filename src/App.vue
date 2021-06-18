<template>
  <TheHeader>
    <TheTick />
  </TheHeader>

  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-sm-6 col-md-8 col-lg-9">
        <router-view />
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <TheSidebar />
      </div>
    </div>
  </div>
  <TheFooter />

  <div class="mt-3 container-fluid">
    <TheDatastore
      :datastore="formattedData"
      @datastoreLoad="setDatastore($event)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheTick from "@/components/TheTick.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import TheFooter from "@/components/TheFooter.vue";

import TheDatastore from "@/components/TheDatastore.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheTick,
    TheSidebar,
    TheFooter,
    TheDatastore,
  },
  data: function () {
    return {
      rawData: {},
    };
  },
  computed: {
    formattedData() {
      return {};
    },
  },
  methods: {
    setDatastore(data) {
      this.rawData = data;
    },
  },
};
</script>

<style scoped>
div {
}
</style>
