<script setup lang='ts'>
import request from '~/tools/request';
import TicketCard from './TicketCard.vue';

const data = ref([
	// {
	// 	name: 'Justin Bieber',
	// 	id: '1',
	// 	time: '1 year ago',
	// 	content: 'how are you, i\'m fine thank you, and you?',
	// },
	// {
	// 	name: 'Justin',
	// 	id: '2',
	// 	time: '1 week ago',
	// 	content: 'hi',
	// },
])

const ticketWrapRef = ref()

const getTickets = () => {
	request('/chat/', {
		method: 'GET',
		headers: {
			"Content-Type": 'application/json'
		}
	}).then(res => {
		return res.json()
	}).then(res => {
		data.value = res
	}).then(() => {
		selectDefaultTicket()
	}).catch(() => {

	})
}

const selectDefaultTicket = () => {
	try {
		ticketWrapRef.value.firstElementChild.click()
	} catch (error) {
		window.console.warn('no child element')
	}

}

onMounted(() => {
	getTickets()
})

</script>

<template>
	<div class="w-full bg-white shadow-right h-full overflow-auto">
		<!-- title -->
		<div class="p-2 ">
			<div class="py-2 ">All Tickets</div>
			<!-- <span class="absolute">
			Filter
		</span> -->
		</div>
		<!-- list -->
		<div v-if="data.length" ref="ticketWrapRef">
			<TicketCard v-for="item in data" :key="item.id" :data="item" class="shadow-sm"></TicketCard>
		</div>
		<div v-else class="w-full p-2 text-center ">
			no data
		</div>

	</div>
</template>
