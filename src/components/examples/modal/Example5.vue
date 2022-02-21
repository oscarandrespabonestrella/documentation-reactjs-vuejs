<template>
    <div>
        <!-- Button trigger modal -->
        <div>
            <div class="mb-4 inline-flex w-full">
                <select class="form-select w-32" v-model="size">
                    <option value="modal-xl">Extra large</option>
                    <option value="modal-lg">Large</option>
                    <option value="">Default</option>
                    <option value="modal-sm">Small</option>
                </select>
            </div>
        </div>

        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#sizeModal"
        >
            Modal
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="sizeModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="sizeModal"
            aria-hidden="true"
        >
            <div :class="`modal-dialog ${size}`">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Modal title 7
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Understood
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example5',

    setup(props) {
        const size = ref('modal-lg')

        return {
            size,
        }
    },
})
</script>
