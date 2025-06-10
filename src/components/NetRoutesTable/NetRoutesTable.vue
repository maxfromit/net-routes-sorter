<script setup lang="ts">
import { columns } from 'src/components/NetRoutesTable/columns'
import { ref } from 'vue'

const generateUUID = () => {
  return crypto.randomUUID()
}

const pagination = ref({
  rowsPerPage: 0,
  page: 1,
  sortBy: 'address',
  descending: false,
})

interface Route {
  uuid: string
  address: string
  mask: string
  gateway: string
  interface: string
}

const routes = [
  {
    address: '192.168.1.0',
    mask: '255.255.255.0',
    gateway: '192.168.1.254',
    interface: 'Подключение Ethernet',
  },
  { address: '10.0.0.0', mask: '255.255.255.0', gateway: '10.0.0.254', interface: 'Гостевая сеть' },
  {
    address: '172.16.0.0',
    mask: '255.255.0.0',
    gateway: '172.16.0.254',
    interface: 'Домашняя сеть',
  },
  {
    address: '192.168.2.0',
    mask: '255.255.255.0',
    gateway: '192.168.2.254',
    interface: 'Подключение Ethernet',
  },
  { address: '10.1.1.0', mask: '255.255.255.0', gateway: '10.1.1.254', interface: 'Гостевая сеть' },
  {
    address: '172.16.1.0',
    mask: '255.255.0.0',
    gateway: '172.16.1.254',
    interface: 'Домашняя сеть',
  },
  {
    address: '192.168.3.0',
    mask: '255.255.255.0',
    gateway: '192.168.3.254',
    interface: 'Гостевая сеть',
  },
  { address: '10.2.2.0', mask: '255.255.255.0', gateway: '10.2.2.254', interface: 'Домашняя сеть' },
  {
    address: '172.16.2.0',
    mask: '255.255.0.0',
    gateway: '172.16.2.254',
    interface: 'Подключение Ethernet',
  },
]

const routesWithUUID: Route[] = routes.map((route) => ({
  ...route,
  uuid: generateUUID(),
}))
</script>

<template>
  <q-table
    :rows="routesWithUUID"
    :columns="columns"
    row-key="uuid"
    v-model:pagination="pagination"
    binary-state-sort
    hide-bottom
    table-header-class="bg-grey-3"
  />
</template>
