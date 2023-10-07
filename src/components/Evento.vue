<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});



</script>

<template>
    <div class="card" style="width: 18rem" >
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <h6 class="card-title"> {{day}} {{month}} {{year}}</h6>
      <a target="blank" :href="source">Ir al evento</a>
    </div>
  </div>
  
</template>

<style scoped>

</style>
