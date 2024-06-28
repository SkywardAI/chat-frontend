<script setup lang="ts">
import { markRaw } from "vue";
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
    <v-list
      class="py-5 px-4 bg-muted"
      density="compact"
    >
      <!---Menu Loop -->
      <template v-for="(item, i) in sidebarMenu">
        <!---Item Sub Header -->
        <LayoutSidebarNavGroup
          v-if="item.header"
          :key="item.title"
          :item="item"
        />
        <!---Single Item-->
        <LayoutSidebarNavItem
          v-else
          :key="i"
          :item="item"
          class="leftPadding"
          @click="onMenuClick"
        />
        <!---End Single Item-->
      </template>
    </v-list>
  </perfect-scrollbar>
</template>
