<template>
  <div class="navbar navbar-dark bg-dark m-0 p-0 border-bottom">
    <div class="container-fluid">
      <div class="navbar-brand d-flex">
        <img
          src="@/assets/logo.svg"
          alt=""
          height="30"
          class="d-inline-flex align-top"
        />
        <div class="title ms-3 me-3 fw-bold text-primary text-uppercase">
          Dragon Horde
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
