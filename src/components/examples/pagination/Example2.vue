<template>
    <div>
        <div class="mb-4 inline-flex w-full">
            <select class="form-select w-32" v-model="size">
                <option value="pagination-sm">Small</option>
                <option value="">Default</option>
                <option value="pagination-lg">Large</option>
            </select>
        </div>
        <div>
            <nav aria-label="" class="mt-4">
                <ul class="pagination justify-content-center" :class="[size]">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li
                        class="page-item"
                        v-for="page in pages"
                        :key="page"
                        :class="{ active: page === randomPage }"
                    >
                        <a class="page-link" href="#">{{ page }}</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',

    setup(props) {
        const pages = ref<Array<number>>([...Array(10).keys()].map((x) => ++x))
        const randomPage = ref<number>(Math.floor(Math.random() * 11))
        const size = ref<string>('pagination-lg')
        return {
            pages,
            randomPage,
            size,
        }
    },
})
</script>
