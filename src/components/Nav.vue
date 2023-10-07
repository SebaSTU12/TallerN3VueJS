<script setup>
defineProps({});
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page"
              ><RouterLink to="/">Noticias</RouterLink></a
            >
            <a class="nav-link"
              ><RouterLink to="/eventos">Eventos</RouterLink></a
            >
          </div>
        </div>
        <img src="https://www.ufro.cl/index.php/normas-corporativas/30-logo-ufro-azul-horizontal/file" alt="">
      </div>
    </nav>
  </header>
</template>


<style>
img {
  width: 12%;

}
</style>
