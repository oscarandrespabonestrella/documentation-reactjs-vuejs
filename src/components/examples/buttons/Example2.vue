<template>
    <button type="button" class="mr-1 mb-1 btn btn-outline-primary">
        Primary
    </button>
    <button type="button" class="mr-1 mb-1 btn btn-outline-secondary">
        Secondary
    </button>
    <button type="button" class="mr-1 mb-1 btn btn-outline-success">
        Success
    </button>
    <button type="button" class="mr-1 mb-1 btn btn-outline-danger">
        Danger
    </button>
    <button type="button" class="mr-1 mb-1 btn btn-outline-warning">
        Warning
    </button>
    <button type="button" class="mr-1 mb-1 btn btn-outline-info">Info</button>
    <button type="button" class="mr-1 mb-1 btn btn-outline-light">Light</button>
    <button type="button" class="mr-1 mb-1 btn btn-outline-dark">Dark</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',
    setup(props) {},
})
</script>
