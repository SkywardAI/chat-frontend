<script setup lang='ts'>
const isActive  = ref(false)
import {UserIcon} from 'vue-tabler-icons'

const props = defineProps<{
	data: any
}>()
</script>
<template>
<div class="w-full p-2">
	<div class="flex gap-2 active">
		<div class="w-8 h-8 rounded-full bg-gray-400 m-auto pt-1"><UserIcon class="m-auto"></UserIcon>	</div>
		<div class="flex-1 min-w-1">
			<div>{{props.data.name}}</div>
			<div class="overflow-hidden text-ellipsis whitespace-nowrap">{{props.data.content}}</div>
		</div>
		<div>
			<span class="text-xs text-gray-500">1 year ago</span>
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