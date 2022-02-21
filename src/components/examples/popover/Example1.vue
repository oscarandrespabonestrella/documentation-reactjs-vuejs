<template>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover"
    >
        Popover on top
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="Right popover"
    >
        Popover on right
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Bottom popover"
    >
        Popover on bottom
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-content="Left popover"
    >
        Popover on left
    </button>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        onMounted(() => {
            Array.from(
                document.querySelectorAll('button[data-bs-toggle="popover"]')
            ).forEach((popoverNode) => new Popover(popoverNode))
        })
    },
})
</script>
