<script setup lang="ts">
import TicketsList from '@/components/ui-components/tickets/TicketsList.vue';
import Chat from '@/components/ui-components/tickets/Chat.vue';

const props = defineProps<{
	chat: boolean
}>()

</script>

<template>
  <div class="flex chat-container">
    <div
      v-if="!props.chat"
      class="w-80"
    >
      <TicketsList />
    </div>
    <div class="flex-1 overflow-hidden">
      <Chat :chat="props.chat" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.chat-container {
	height: calc(100vh - 48px - 64px);
}
</style>