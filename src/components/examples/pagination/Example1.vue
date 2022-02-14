<template>
    <nav aria-label="" class="mt-4">
        <ul class="pagination justify-content-center">
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
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        const pages = ref<Array<number>>([...Array(10).keys()].map((x) => ++x))
        const randomPage = ref<number>(Math.floor(Math.random() * 11))
        return {
            pages,
            randomPage,
        }
    },
})
</script>
