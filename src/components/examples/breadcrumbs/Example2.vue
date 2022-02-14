<template>
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',
    setup(props) {},
})
</script>
