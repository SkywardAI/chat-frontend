<script setup lang='ts'>
import { onMounted } from 'vue';
import HeatMap from '~/components/ui-components/analytics/HeatMap.vue';
import Pie from '~/components/ui-components/analytics/Pie.vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://demo.bokeh.org/sliders/autoload.js?bokeh-autoload-element=1000&bokeh-app-path=/sliders&bokeh-absolute-url=https://demo.bokeh.org/sliders';
  script.id='1000';
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <div>
    <div class="w-full">
      <Pie height="300" />
    </div>
    <div class="mt-2 w-full">
      <HeatMap height="300" />
    </div>
  </div>
</template>