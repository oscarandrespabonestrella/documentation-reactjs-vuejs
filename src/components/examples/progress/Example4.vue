<template>
    <div class="progress">
        <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar bg-info"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar bg-warning"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar bg-danger"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example3',

    setup(props) {
        return {}
    },
})
</script>
