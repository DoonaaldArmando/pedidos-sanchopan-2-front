<template>
   <div>
      <h1>Persona</h1>
      <a href="/crearpersona">
         <v-btn color="success">Nueva persona</v-btn>
      </a>
      <ListaPersonas></ListaPersonas>
   </div>
</template>

<script setup>
import ListaPersonas from './ListaPersonas.vue';
</script>