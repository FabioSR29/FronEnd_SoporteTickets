<template>
 <div class="container">
    <div class="Titu"><span>Service Desk</span></div>
        <div class="menu">
            <ul class="main-menu">
                <li @click="estado.cambiarC">Registro Tickets</li>
                <li @click="estado.cambiarM" >Mis tickets</li>
                <li>Perfil</li>
            </ul>
        </div>
    <div class="content">    
         <CrearTicket v-show="estado.visibilidadCrearTicket"/> 
         <MostrarTicket v-if="estado.visibilidadMostrar"></MostrarTicket>
        
    </div>
       

          
      
    </div>

    

   
</template>


<script setup>
import CrearTicket from '@/components/CrearTicket.vue';
import MostrarTicket from '@/components/MostrarTicket.vue'
import { estado } from './Navegabilidad'




</script>

<style>
.Titu span{
    font-size: 30px;
    color: #EDEDED;
}
.Titu{

    display: flex;
    position: absolute;
    margin-left: -156PX;
    margin-top: -54px;
    font-family: 'Courier New', Courier, monospace
   
}

@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');
body {
    margin: 0;
    padding: 0;
    background: linear-gradient(
        #243545,
        #243545 var(--line-offset),
        #dedede var(--line-offset)
    );
    width: 100vw;
    height: 100vh;
    font-family: 'Lexend Deca', sans-serif;
    color: #878787;
    --menu-item-size: 50px;
    --green-color: #329680;
    --blue-color: #099c95;
    --dark-green-color: #175b52;
    --blackColor: #0e0d0d;
    --white-color: #FFF;
    --gray-color: #EDEDED;
    --container-width: 700px;
    --container-height: 400px;
    --line-offset: calc((100% - var(--container-height))/ 2 + var(--menu-item-size) + 0.6em);
}


.container {
    width: var(--container-width);
    height: var(--container-height);
    margin-left: -350px;
    margin-top: -200px;
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 1;
}

.main-menu {
    display: flex;
    list-style: none;
    margin: auto 0;
    padding: 0.6em 0 0 0;
}

.main-menu > li {
    box-sizing: border-box;
    height: var(--menu-item-size);
    width: calc(3.5 * var(--menu-item-size));  
    line-height: var(--menu-item-size);
    padding: 0 2em;
    margin: 1px;
    transition: 0.5s linear all;
    background: var(--green-color);
    color: var(--white-color);
    cursor: pointer;
    font-size: 16px;
    user-select: none;
}

.main-menu > li:not(.with-submenu) {
    clip-path: polygon(10% 0%, 0% 100%, 95% 100%, 100% 50%, 95% 0%);
    shape-outside: polygon(10% 0%, 0% 100%, 95% 100%, 100% 50%, 95% 0%);
}

.main-menu > li:nth-child(2) {
    transform: translateX(-5%);
}

.main-menu > li:nth-child(3) {
    transform: translateX(-10%)
}

.main-menu > li:nth-child(4) {
    transform: translateX(-15%)
}

.main-menu i {
    margin-right: 5px;
}

.main-menu > li:hover:not(.active) {
    background: linear-gradient(to right, var(--green-color), var(--blue-color));
    color: var(--blackColor);
}

.main-menu > li:active:not(.active),
.main-menu > li:active:not(.with-submenu){
    background: var(--blue-color);
    color: var(--white-color);
}

.main-menu > li:hover i:not(li.active) {
    color: #175c58;
}

.main-menu .active {
    color: var(--blackColor);
    background: var(--blue-color);
    cursor: default;
    text-shadow: 1px 1px 1px var(--dark-green-color);
    font-size: 18px;
}



h1 {
    font-size: 115%;
    margin: 1em 2em;
    padding: 0;
    position: relative;
    color: #777;
}

.content {
   padding: 15px 0 50px 0;
}
</style>