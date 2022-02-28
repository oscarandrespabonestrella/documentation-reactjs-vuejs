<template>
    <div class="mb-4">
        <button class="btn btn-primary" @click="toggleAnimation()">
            Toggle Animation
        </button>
    </div>

    <div class="progress">
        <div
            class="progress-bar progress-bar-striped"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 10%"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar progress-bar-striped bg-success"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar progress-bar-striped bg-info"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar progress-bar-striped bg-warning"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar progress-bar-striped bg-danger"
            :class="animated ? 'progress-bar-animated' : ''"
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
    name: 'Example6',

    setup(props) {
        const animated = ref<boolean>(false)
        const toggleAnimation = () => {
            animated.value = !animated.value
        }
        return {
            animated,
            toggleAnimation,
        }
    },
})
</script>
