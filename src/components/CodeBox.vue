<template>
    <div class="mx-2 bg-white flex flex-col border rounded">
        <div class="flex w-full">
            <slot></slot>
        </div>
        <div class="flex p-4">
            <h1>title</h1>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
    name: 'CodeBOx',
    props: [],
    setup(props: any) {},
}
</script>
