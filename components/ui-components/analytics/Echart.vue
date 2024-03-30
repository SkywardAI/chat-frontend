<template>
	<div ref="chartRef" :style="'height:' + height + 'px'" class="w-full"></div>
</template>

<script setup lang="ts">
import debounce from '@/tools/debounce'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart, HeatmapChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	LegendComponent,
	VisualMapComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts';

// 注册必须的组件
echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	BarChart,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer,
	LegendComponent,
	PieChart,
	HeatmapChart, VisualMapComponent
]);


const props = withDefaults(defineProps<{
	height?: number,
	option: EChartsOption
}>(), {
	height: 60,

})
const chartRef = ref()
const chart = ref()
const drawChart = (target: HTMLElement | null, option: EChartsOption) => {
	if (!target) return
	const chartIns = echarts.init(target)
	chartIns.setOption(option)
	chart.value = chartIns
}

watch(() => props.option, (val) => {
	drawChart(chartRef.value, val)
}, {
	deep: true
})

const resizeHandler = debounce(() => {
	nextTick(() => {
		chart.value.resize()
	})
})
onMounted(() => {
	drawChart(chartRef.value, props.option)
	window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
	window.removeEventListener('resize', resizeHandler)
})


</script>
