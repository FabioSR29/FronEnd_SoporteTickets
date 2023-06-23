<template>
    <div>
      <table class="LaTabla">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Archivo Adjunto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.titulo }}</td>
            <td>{{ ticket.descripcion }}</td>
            <td>
                <span v-if="ticket.archivo_adjunto">
              <a :href="ticket.archivo_adjunto" target="_blank" download>{{ getFileName(ticket.archivo_adjunto) }}</a>
            </span>
            <span v-else>No adjunto</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { estado } from './Navegabilidad'
  
  const tickets = ref(estado.tickets);
  
  function getFileName(filepath) {
  const filename = filepath.split('/').pop();
  const fileFormat = filename.split('.').pop();
  return `${filename} (${fileFormat})`;
}

  </script>

  <style scoped>

.LaTabla {
  width: 100%;
  border-collapse: collapse;
}

.LaTabla th,
.LaTabla td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.LaTabla th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.LaTabla tr:hover {
  background-color: #f5f5f5;
}

.LaTabla .actions {
  display: flex;
  gap: 4px;
}

</style>
  