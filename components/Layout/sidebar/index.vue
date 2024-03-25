<script setup lang="ts">
import { markRaw, watch } from "vue";
import sidebarItems from "./sidebarItems";
import { useTicketStore } from "~/store/ticket";

const sidebarMenu = markRaw(sidebarItems);
const ticketsStore = useTicketStore()
const onMenuClick = () => {
  ticketsStore.clearTicket()
}
</script>

<template>

  <!-- ---------------------------------------------- -->
  <!---Navigation -->
  <!-- ---------------------------------------------- -->
  <perfect-scrollbar class="scrollnavbar">
    <v-list class="py-5 px-4 bg-muted" density="compact">
      <!---Menu Loop -->
      <template v-for="(item, i) in sidebarMenu">
        <!---Item Sub Header -->
        <LayoutSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />
        <!---Single Item-->
        <LayoutSidebarNavItem :item="item" v-else class="leftPadding" @click="onMenuClick" />
        <!---End Single Item-->
      </template>
    </v-list>

  </perfect-scrollbar>

</template>
