<template>
    <div class="table-options mt-4 mb-4">
        <div class="d-flex justify-content-between">
            <div class="results-found d-flex align-items-center">
                <span class="me-2">438</span> results found
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-primary">Print</button>
                <button class="btn btn-primary">Export</button>
            </div>
        </div>
    </div>
    <div class="table-responsive table-list">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading 1</th>
                    <th>Table heading 2</th>
                    <th>Table heading 3</th>
                    <th>Table heading 4</th>
                    <th>Table heading 5</th>
                    <th>Table heading 6</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(trow, index) in nbrrows" :key="index">
                    <td data-label="#">{{ index }}</td>
                    <td data-label="Table heading 1">
                        Table content {{ index }}.1
                    </td>
                    <td data-label="Table heading 2">
                        <a href="#">Table content {{ index }}.2</a>
                    </td>
                    <td data-label="Table heading 3">
                        Table content {{ index }}.3
                    </td>
                    <td data-label="Table heading 4">
                        Table content {{ index }}.4
                    </td>
                    <td data-label="Table heading 5">
                        Table content {{ index }}.5
                    </td>
                    <td data-label="Table heading 6">
                        Table content {{ index }}.6
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <nav aria-label="" class="mt-4">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
                <a class="page-link" href="#">2 </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
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
    name: 'Example2',

    setup(props) {
        const nbrcols = ref<number>(6)
        const nbrrows = ref<number>(15)
        return {
            nbrcols,
            nbrrows,
        }
    },
})
</script>
