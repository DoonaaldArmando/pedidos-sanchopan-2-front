<template>
   <div>
      <v-navigation-drawer v-model="drawer">
         <!--  -->
      </v-navigation-drawer>
   </div>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>
 
<script>
export default {
   data: () => ({ drawer: null }),
}
</script>