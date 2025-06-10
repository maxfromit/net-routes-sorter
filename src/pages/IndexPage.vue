<script setup lang="ts">
import NetRoutesTable from 'src/components/NetRoutesTable/NetRoutesTable.vue'
</script>

<template>
  <q-page class="column">
    <div class="col col-grow column">
      <div class="text-h5 q-pt-md q-px-sm q-pb-sm">Действующие маршруты IPv4</div>
      <NetRoutesTable class="col" />
    </div>
  </q-page>
</template>
