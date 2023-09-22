<script setup lang="ts">
import FGFlower from '@/components/FGFlower.vue';
import {ref} from 'vue'
const numberOfFlowers = 500
const listFlowers = ref<Array<Boolean>>(new Array(numberOfFlowers).fill(false))
function addFlower(){
  let aleatoriNumber = Math.floor(Math.random() *numberOfFlowers)
  while(listFlowers.value[aleatoriNumber]){
    aleatoriNumber = Math.floor(Math.random() *numberOfFlowers)
  }
  listFlowers.value[aleatoriNumber] = true
}
import { onMounted } from "vue";
onMounted (()=> {
  alert("No puedo estar cerca en este momento para regalartelas pero aqui esta una para ti que te la mereces <3");
})
</script>

<template>
  <div class="w-screen h-screen p-2">
    <div class="text-white flex flex-wrap pt-3 item-center text-center justify-items-center absolute inset-0 z-10 space-y-0 m-0 gap-y-0">
      <div v-for="(value, index ) in listFlowers" :key="index" class="w-8 h-8 m-4 space-y-0">
        <FGFlower
          v-show="value"
        ></FGFlower>
      </div>
    </div>
    <div class="text-white flex flex-col pt-3 item-center text-center m-auto justify-items-center z-60 relative">
      <div class="w-xs h-xs m-auto p-15">
        <FGFlower></FGFlower>
      </div>
      <p class="text-xl text-white">Una flor para una chica preciosa</p>
      <p class="text-xl text-white">Pero como una no basta, te doy un jardin...</p>
      <div class="pt-2">
        <button class="w-xs m-auto text-xl border-yellow border-solid border-1 bg-orange text-yellow rounded-md cursor-pointer hover:(text-orange border-orange bg-yellow)"
        @click="addFlower"
        >Más</button>
      </div>
    </div>
  </div>  
</template>
<style scoped>
</style>
