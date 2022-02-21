<template>
    <div>
        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#scrollable"
        >
            Launch scrollable modal
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="scrollable"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable">
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
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
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
    name: 'Example4',

    setup(props) {
        return {}
    },
})
</script>
