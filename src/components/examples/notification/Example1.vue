<template>
    <button
        type="button"
        class="btn btn-primary"
        id="liveToastBtn"
        @click="showNotification1()"
    >
        Simple notification
    </button>

    <div class="position-fixed top-0 end-0 p-3" style="z-index: 9999">
        <div
            ref="simpleToast"
            id="liveToast"
            class="toast hide"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div class="toast-header">
                <strong class="me-auto">Notification Box</strong>
                <small>11 mins ago</small>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button>
            </div>
            <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',
    components: {},

    setup(props) {
        const simpleToast = ref(null)
        const showNotification1 = () => {
            const toast = new Toast(simpleToast.value, {
                autohide: true,
                duration: 3000,
            })

            toast.show()
        }
        onMounted(() => {})
        return {
            simpleToast,
            showNotification1,
        }
    },
})
</script>
