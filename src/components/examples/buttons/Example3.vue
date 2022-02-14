<template>
    <button type="button" class="btn mr-1 mb-1 btn-primary btn-lg">
        Large button
    </button>
    <button type="button" class="btn mr-1 mb-1 btn-secondary btn-lg">
        Large button
    </button>

    <button type="button" class="btn mr-1 mb-1 btn-primary btn-sm">
        Small button
    </button>
    <button type="button" class="btn mr-1 mb-1 btn-secondary btn-sm">
        Small button
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example3',
    setup(props) {},
})
</script>
