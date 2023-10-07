<script setup>
import Nav from "../components/Nav.vue";

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

const noticiaData = ref(null);
const id = route.params.id;

const titulo = ref(null);
const imagen = ref(null);
const linkOrigen = ref(null);
const cuerpo = ref("");
const fecha = ref(null);
const imagenes = ref([]);
const resumen = ref("");

onMounted(async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/news/${id}`);
    noticiaData.value = response.data;
    titulo.value = response.data.news.title;
    imagen.value = response.data.news.imageUrl;
    linkOrigen.value = response.data.news.source;
    cuerpo.value = response.data.news.details.body;
    imagenes.value = response.data.news.details.images;
    resumen.value = response.data.news.details.resume;
    fecha.value = response.data.news.createdAt.split(':')[0].substring(0,10);

  } catch (err) {
    console.log("Error ;(");
  }
});
</script>

<template>
  <Nav />
  <div class="container" v-if="noticiaData">
    <div>
      <h1 v-if="titulo">{{ titulo }}</h1>
    </div>
    <div>
      <a :href="linkOrigen" target="blank">Ir a la noticia</a>
    </div>
    <img class="p-3 mb-2" :src="imagen" alt="" />
    <div>
      <p v-if="cuerpo" class="p-3 mb-2 bg-body text-body">{{ cuerpo }}</p>
    </div>
    <p v-if="resumen" class="p-3 mb-2 bg-body-secondary">{{ resumen }}</p>
    <div>
      <h6>{{ fecha }}</h6>
    </div>
    <div class="row" style="margin: 5%;"> 
      <img v-for="i in imagenes" style="margin: 1%; width: 30%;" :src="i" alt="">
    </div>
  </div>
</template>

<style scoped>
</style>
