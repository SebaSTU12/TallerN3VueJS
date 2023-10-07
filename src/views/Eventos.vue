<script setup>
import Nav from '../components/Nav.vue'
import Evento from '../components/Evento.vue'
import { ref, onMounted } from "vue";
import axios from "axios";

const eventos = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/events/`);
    eventos.value = response.data.events;
  } catch (err) {
    console.log("Error ;(");
  }
});


</script>

<template>
  <Nav/>
  <div class="container">
    <div class="row">
      <Evento
   v-for="evento in eventos"
   :title="evento.title"
   :day="evento.day"
   :month="evento.month"
   :year="evento.year"
   :source="evento.source"

   />
    </div>
  </div>
</template>

<style>

</style>
