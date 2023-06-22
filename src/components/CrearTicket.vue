<template>
    <div class="contenedor">
    <form class="form" @submit.prevent="api()" enctype="multipart/form-data">
    <p class="title">Registrar ticket:</p>
    <p class="message">Ingrese los datos para crear su ticket</p>
        <div class="flex">
        <label>
            <input required placeholder="" type="text" class="input" v-model="ticketData.titulo" >
            <span>Titulo</span>
        </label>

      
    </div>  
            
    <label>
        <input required placeholder="" type="text" class="input" v-model="ticketData.descripcion">
        <span>Descripcion</span>
    </label> 
        
    <label>
      <label for="archivo_adjunto">Adjuntar archivo:</label>
        <input type="file" name="archivo_adjunto" @change="handleFileChange">

      
        
    </label>
 
    <button class="submit">Crear</button>
    
</form>
</div>
</template>

<script setup>
import { ref } from 'vue';
const ticketData = ref({
  titulo: "",
  descripcion: "",
  archivo_adjunto: null
});

function handleFileChange(event) {
  const file = event.target.files[0];
  ticketData.value.archivo_adjunto = file;
}

async function api() {
  const formData = new FormData();
  formData.append('titulo', ticketData.value.titulo);
  formData.append('descripcion', ticketData.value.descripcion);
  if(!ticketData.value.archivo_adjunto==null){
    formData.append('archivo_adjunto', ticketData.value.archivo_adjunto);
  }
  

  try {
    const response = await fetch('http://127.0.0.1:8000/api/tickets/save', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      ticketData.value = {
      titulo: "",
      descripcion: "",
      archivo_adjunto: null
    };
    } else {
      const errorData = await response.json();
      throw new Error("Error interno");
    }
  } catch (error) {
    alert(error.message);
  }
}


</script>

<style scoped>
.contenedor{
    margin-left: 25%;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  border: solid gray;
  border-radius: 8%;
  padding-right:50px;
}

.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>