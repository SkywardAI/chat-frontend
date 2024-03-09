<script setup lang='ts'>
import TicketCard from './TicketCard.vue';

const data = [
	{
		name: 'Justin Bieber',
		id: '1',
		time: '1 year ago',
		content: 'how are you, i\'m fine thank you, and you?',
	},
	{
		name: 'Justin',
		id: '2',
		time: '1 week ago',
		content: 'hi',
	},
]

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
		<div>
			<TicketCard v-for="item in data" :key="item.id" :data="item" class="shadow-sm"></TicketCard>
		</div>

	</div>
</template>
