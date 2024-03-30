<script setup lang='ts'>
import HeatMap from '~/components/ui-components/analytics/HeatMap.vue';
import Pie from '~/components/ui-components/analytics/Pie.vue';
</script>
<template>
	<div>

		<div class="w-full">
			<Pie height="300"></Pie>
		</div>
		<div class="mt-2 w-full">
			<HeatMap height="300"></HeatMap>
		</div>

	</div>

</template>