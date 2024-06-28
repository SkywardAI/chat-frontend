<script setup>
import getVersions from '~/tools/getVersions';

    const frontendVersion = ref('Loading');
    const backendVersion = ref('Loading');

    getVersions('frontend').then(version=>frontendVersion.value = version);
</script>
<template>
    <div class="p-10 pb-5">
        <p class="mb-5">Frontend Version: v{{ frontendVersion }}</p>
        <p class="mb-5">Backend Version: v{{ backendVersion }}</p>
    </div>
</template>