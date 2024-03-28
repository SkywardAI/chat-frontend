<script setup lang='ts'>
import { UserIcon } from 'vue-tabler-icons'
import { useTicketStore } from '~/store/ticket';

const props = defineProps<{
	data: any
}>()
const ticketsStore = useTicketStore()
const isActive = computed(() => {
	return ticketsStore.currentSessionId === props.data.id
})
// const getTicketChatList = (id: string) => {
// 	request(`/chat/history/${id}`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	}).then(res => {
// 		return res.json()
// 	}).then(res => {
// 		console.log('res :>> ', res);
// 	})
// }
const onTicketClick = (id: string) => {
	// getTicketChatList(id)
	ticketsStore.currentSessionId = id
	ticketsStore.setCurrentTicket({ ...props.data, })
}

</script>
<template>
	<div class="w-full p-2 cursor-pointer" @click="onTicketClick(props.data.id)">
		<div class="flex gap-2 " :class="isActive ? 'active' : ''">
			<div class="w-8 h-8 rounded-full bg-gray-400 m-auto pt-1">
				<UserIcon class="m-auto"></UserIcon>
			</div>
			<div class="flex-1 min-w-1">
				<div>{{ props.data.name }}</div>
				<div class="overflow-hidden text-ellipsis whitespace-nowrap">{{ props.data.content }}</div>
			</div>
			<div>
				<span class="text-xs text-gray-500">{{ props.data.createdAt }}</span>
			</div>
		</div>

	</div>
</template>

<style lang="scss">
.active::before {
	content: '';
	width: 4px;
	background-color: red;
}
</style>