<script setup>
import Noticia from "../components/Noticia.vue";
import Nav from "../components/Nav.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const noticias = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/news/`);
    noticias.value = response.data.news;
  } catch (err) {
    console.log("Error ;(");
  }
});
</script>

<template>
  <Nav />
  <div class="container">
    <div class="row">
      <Noticia
      v-for="noticia in noticias"
      :title="noticia.title"
      :imageUrl="noticia.imageUrl"
      :newsId="noticia.newsId"
      :key="noticia.newsId"
    />
    </div>

    
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
