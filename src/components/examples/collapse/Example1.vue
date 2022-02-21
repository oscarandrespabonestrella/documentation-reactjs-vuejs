<template>
    <div>
        <p>
            <a
                class="btn btn-primary mr-2"
                data-bs-toggle="collapse"
                @click="toggleCollapsed"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
            >
                Link with href
            </a>
            <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                @click="toggleCollapsed"
                aria-expanded="false"
                aria-controls="collapseExample"
            >
                Button with data-bs-target
            </button>
        </p>
        <div v-if="!collapsed">
            <div class="card card-body p-3">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        const collapsed = ref<boolean>(true)
        const toggleCollapsed = () => {
            collapsed.value = !collapsed.value
        }
        return {
            collapsed,
            toggleCollapsed,
        }
    },
})
</script>
