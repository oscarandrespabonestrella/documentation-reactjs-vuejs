<template>
    <div>
        <div class="mb-4 inline-flex w-full">
            <select class="form-select w-32" v-model="hAlignment">
                <option value="justify-content-start">Left</option>
                <option selected value="justify-content-center">Center</option>
                <option value="justify-content-end">Right</option>
            </select>
            <select class="form-select ml-3 w-32" v-model="position">
                <option value="">Horizontal</option>
                <option selected value="flex-column">Vertical</option>
            </select>
        </div>
        <div>
            <ul class="nav" :class="[hAlignment, position]">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                        >Active</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                        >Disabled</a
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',
    setup(props) {
        const hAlignment = ref('justify-content-center')
        const position = ref('')

        return {
            hAlignment,
            position,
        }
    },
})
</script>
