<script setup lang="ts">
</script>

<template>
    <div class="flower">
        <div class="mid"></div>
        <div class="Petal1 p1">
        </div>
        <div class="Petal1 p2">
        </div>
        <div class="Petal1 p3">
        </div>
        <div class="Petal1 p4">
        </div>
        <div class="Petal2 p1">
        </div>
        <div class="Petal2 p2">
        </div>
        <div class="Petal2 p3">
        </div>
        <div class="Petal2 p4">
        </div>
        <div class="Petal3 p1">
        </div>  
        <div class="Petal3 p2">
        </div>
        <div class="Petal3 p3">
        </div>
        <div class="Petal3 p4">
        </div>
    </div>
</template>

<style scoped>
.flower {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  /* Agrega una animación de pulsación */
  animation: pulsate 3s infinite;
}

.text-above,
.text-below {
    position: absolute;
    text-align: center;
    font-size: 1rem; /* Tamaño del texto */
}
@keyframes pulsate {
  0% {
      transform: scale(1.5);
  }
  50% {
      transform: scale(1.6);
  }
  100% {
      transform: scale(1.5);
  }
}
  .mid {
    width: 25%;
    height: 25%;
    border-radius: 50%;
    
    background: radial-gradient(circle, #000, #ff5e00, #000);
  
    z-index: 4;
  
    background-size: 3px 3px;
  
    filter: drop-shadow(0 0 3px #682600);
  }
  
  .Petal1 {
    position: absolute;
    z-index: 3;
    padding: 0px;
    width: 60%;
    height: 15%;
    border-radius: 50%;
    background: radial-gradient(circle, #ff5e00, #ffbb00);
  
    filter: drop-shadow(0 0 4px #e05200);
  }
  
  .Petal1.p1 {
    transform: rotate(22.5deg);
  }
  .Petal1.p2 {
    transform: rotate(67.5deg);
  }
  .Petal1.p3 {
    transform: rotate(110.5deg);
  }
  .Petal1.p4 {
    transform: rotate(157.5deg);
  }
  
  .Petal2 {
    position: absolute;
    z-index: 2;
    padding: 0px;
    width: 100%;
    height: 20%;
    border-radius: 50%;
  
    background: radial-gradient(circle, #ff5e00, #fbd702);
  
    filter: drop-shadow(0 0 6px #e05200);
  }
   
  .Petal2.p2 {
    transform: rotate(90deg);
  }
  .Petal2.p3 {
    transform: rotate(45deg);
  }
  
  .Petal2.p4 {
    transform: rotate(135deg);
  }
  
  .Petal3 {
    position: absolute;
    z-index: 1;
    padding: 0px;
    width: 100%;
    height: 20%;
    border-radius: 50%;
  
    background: radial-gradient(circle, #ff5e00, #fbd702);
  
    filter: drop-shadow(0 0 2px #fbd702);
  }
  
  .Petal3.p1 {
    transform: rotate(22.5deg);
  }
  .Petal3.p2 {
    transform: rotate(67.5deg);
  }
  .Petal3.p3 {
    transform: rotate(110.5deg);
  }
  .Petal3.p4 {
    transform: rotate(157.5deg);
  }
</style>
