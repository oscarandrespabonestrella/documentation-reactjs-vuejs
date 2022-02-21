<template>
    <div class="form-group">
        <label>Select a date</label>
        <div class="input-group">
            <flat-pickr
                v-model="date"
                :config="config"
                class="form-control"
                placeholder="Select date"
                name="date"
            />
        </div>
    </div>
    <p>Selected date is - {{ date }}</p>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',
    components: {
        flatPickr,
    },
    setup(props) {
        const date = ref<Date | null>(new Date())
        const config = ref<any>({
            mode: 'range',
            wrap: true, // set wrap to true only when using 'input-group'
            altFormat: 'M j, Y',
            altInput: true,
            dateFormat: 'Y-m-d',
        })
        return {
            date,
            config,
        }
    },
})
</script>
