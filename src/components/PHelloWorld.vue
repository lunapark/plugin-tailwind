<template>
    <div class="hello">
        Hello World {{ test }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    test: string
}>();
</script>

<style scoped>
.hello {
    color: green;
}
</style>
