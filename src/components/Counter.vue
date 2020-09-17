<template>
  <b-navbar>
    <template slot="start">
      <div class="nav-div">
        <b-navbar-item class="nav-item" disabled>
          Counter: {{ numCorrect }} / {{ numTotal }}
        </b-navbar-item>
      </div>
    </template>
  </b-navbar>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal"]
};
</script>

<style scoped>

.nav-item {
    font-size: 22px;
    padding-left: 150px;
    text-decoration: none;
    color: black;
}

.nav-item:hover {
    color: black;
    cursor: default;
}

</style>
