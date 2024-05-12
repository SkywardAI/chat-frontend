<template>
    <div>
      <div v-html="bokehDiv"></div>
    </div>
  </template>
  
<script>
import axios from 'axios';
  
export default { data() {
    return {
        bokehScript: '',
        bokehDiv: '',
    };
},
    
async created() {
    const response = await axios.get('your-api-endpoint');
    this.bokehScript = response.data.script;
    this.bokehDiv = response.data.div;
},

};
</script>