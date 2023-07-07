<template>
   <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
         <!--  -->
      </v-navigation-drawer>

      <v-app-bar>
         <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

         <v-toolbar-title>Sanchopan</v-toolbar-title>
      </v-app-bar>

      <v-main>
         <v-container>            
            <CrudPersona></CrudPersona>
         </v-container>
      </v-main>
   </v-app>
</template>
 
<script setup>
import { ref } from 'vue'
import CrudPersona from '../components/CrudPersona.vue';
const drawer = ref(null)
</script>
 
<script>
export default {
   data: () => ({ drawer: null }),
}
</script>