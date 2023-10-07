<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  newsId: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const img = ref('');
const news = ref([]);
const id = ref('');




onMounted(async () => {
  try {
    img.value = props.imageUrl;
    id.value = props.newsId;
    news.value = response.data.news;
  } catch (err) {
    console.log('Error ;(');
  }
});

function showDetails() {
  router.push({ name: 'news', params: { id: id.value } });
}

</script>

<template>
  <div class="card" style="width: 18rem" >
    <img class="card-img-top" :src="img" alt="Card image cap" />
    <div class="card-body">
      
      <h5 class="card-title"> {{title}}</h5>
      <button
        @click="showDetails()"
        class="btn btn-primary"
      >
        Ver Noticia
      </button>
    </div>
  </div>
</template>

<style scoped>
h5 {
  color: black;
}
</style>