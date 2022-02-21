<template>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
    >
        Tooltip on top
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Tooltip on right"
    >
        Tooltip on right
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Tooltip on bottom"
    >
        Tooltip on bottom
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Tooltip on left"
    >
        Tooltip on left
    </button>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',

    setup(props) {
        onMounted(() => {
            Array.from(
                document.querySelectorAll('button[data-bs-toggle="tooltip"]')
            ).forEach((popoverNode) => new Tooltip(popoverNode))
        })
        return {}
    },
})
</script>
