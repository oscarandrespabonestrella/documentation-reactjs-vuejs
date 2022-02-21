<template>
    <div class="row mb-2">
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="showNotificationPosition('top-0 start-0')"
            >
                Top Left
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition(
                        'top-0 start-50 translate-middle-x'
                    )
                "
            >
                Top
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="showNotificationPosition('top-0 end-0')"
            >
                Top Right
            </button>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition(
                        'top-50 start-0 translate-middle-y'
                    )
                "
            >
                Left
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition('top-50 start-50 translate-middle')
                "
            >
                Middle
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition('top-50 end-0 translate-middle-y')
                "
            >
                Right
            </button>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="showNotificationPosition('bottom-0 start-0')"
            >
                Bottom Left
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition(
                        'bottom-0 start-50 translate-middle-x'
                    )
                "
            >
                Bottom
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="showNotificationPosition('bottom-0 end-0')"
            >
                Bottom Right
            </button>
        </div>
    </div>
    {{ toastPosition }}
    <div
        class="position-fixed p-3"
        :class="toastPosition"
        style="z-index: 9999"
    >
        <div
            ref="positionToast"
            id="positionToast"
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
    name: 'Example2',
    components: {},
    setup(props) {
        const simpleToast = ref(null)
        const toastPosition = ref<string>('top-0 start-0')
        const positionToast = ref(null)

        const showNotificationPosition = (position: string) => {
            toastPosition.value = position
            const positionToastAux = new Toast(positionToast.value, {
                autohide: true,
                duration: 6000,
            })
            positionToastAux.show()
        }

        return {
            simpleToast,
            showNotificationPosition,
            positionToast,
            toastPosition,
        }
    },
})
</script>
