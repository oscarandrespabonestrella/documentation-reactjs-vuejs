<template>
    <div>
        <flat-pickr
            v-model="date"
            placeholder="Choose date"
            class="form-control"
        ></flat-pickr>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',
    components: {
        flatPickr,
    },

    setup(props) {
        const date = ref<Date | null>(null)
        return {
            date,
        }
    },
})
</script>
