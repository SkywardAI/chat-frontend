<script setup lang="ts">

import TicketsList from '@/components/ui-components/tickets/TicketsList.vue';
import Chat from '@/components/ui-components/tickets/Chat.vue';

</script>

<template>
	<div class="flex chat-container">
		<div class="w-80">
			<TicketsList></TicketsList>
		</div>
		<div class="flex-1 overflow-hidden">
			<Chat></Chat>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.chat-container {
	height: calc(100vh - 48px - 64px);
}
</style>