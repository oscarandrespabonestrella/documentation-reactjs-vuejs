<template>
    <div class="mx-2 mb-2 bg-white flex flex-col border rounded">
        <div class="w-full p-4">
            <slot></slot>
        </div>
        <div class="w-full px-4">
            <div class="relative flex py-3 items-center">
                <span class="flex-shrink mr-4 text-[#4f5588] font-medium">{{
                    maintitle
                }}</span>
                <div
                    class="flex-grow border-t border-b-0 border-gray-200 border-solid"
                ></div>
            </div>
            <p v-if="description">
                {{ description }}
            </p>
        </div>
        <div
            class="w-full relative flex justify-center mb-2 pt-2 border-t border-solid border-b-0 border-x-0 border-gray-200"
        >
            <button
                class="bg-transparent py-1 px-2 border-0 hover:text-cyan-600"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Copy"
                @click="copy"
            >
                <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    fill="currentColor"
                    width="1.4em"
                    height="1.4em"
                    data-icon="snippets"
                    aria-hidden="true"
                >
                    <path
                        d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"
                    ></path>
                </svg>
            </button>
            <button
                class="bg-transparent py-1 px-2 border-0 hover:text-cyan-600"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Show Code"
                @click="toggleCode"
            >
                <img
                    v-if="showCode"
                    src="../assets/icons/code.svg"
                    alt=""
                    class="w-5"
                />
                <img
                    v-else
                    src="../assets/icons/codeClose.svg"
                    alt=""
                    class="w-5"
                />
            </button>
        </div>

        <div v-if="showCode && (vueJsCode || reactJsCode)" class="w-full mb-3">
            <div class="w-full px-4">
                <div class="bg-white">
                    <nav class="flex flex-col sm:flex-row">
                        <button
                            class="bg-transparent text-gray-600 py-2 px-4 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-transparent border-blue-500/0"
                            :class="{ 'border-blue-500/100': showReact }"
                            @click="showReact = true"
                        >
                            React JS</button
                        ><button
                            class="bg-transparent text-gray-600 py-2 px-4 block hover:text-blue-500 border-b-2 focus:outline-none border-transparent border-blue-500/0"
                            :class="{ 'border-blue-500/100': !showReact }"
                            @click="showReact = false"
                        >
                            Vue Js
                        </button>
                    </nav>
                </div>
            </div>
            <div v-if="showReact" class="w-full px-4 React grid">
                <prism class="rounded" language="javascript">{{
                    reactJsCode
                }}</prism>
            </div>
            <div v-else class="w-full px-4 Vuejs grid">
                <prism class="rounded" language="javascript">{{
                    vueJsCode
                }}</prism>
            </div>
        </div>
        <Notification
            v-if="showNotification"
            :message="notificationMessage"
            @onClose="showNotification = false"
        ></Notification>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import Prism from 'vue-prism-component'
import { copyText } from 'vue3-clipboard'
import Notification from './Notification.vue'

export default defineComponent({
    name: 'CodeBox',
    props: ['maintitle', 'description', 'reactJsCode', 'vueJsCode'],
    components: { Prism, Notification },
    setup(props) {
        const showCode = ref<boolean>(false)
        const showReact = ref<boolean>(true)
        const showNotification = ref<boolean>(false)
        const notificationMessage = ref<string>('')

        const toggleCode = () => {
            showCode.value = !showCode.value
        }

        const showNotificationMethod = () => {
            showNotification.value = true
            setTimeout(() => {
                showNotification.value = false
            }, 5000)
        }

        const copy = () => {
            copyText(
                showReact.value ? props.reactJsCode : props.vueJsCode,
                undefined,
                (error: any, event: any) => {
                    if (error) {
                        showNotificationMethod()
                    } else {
                        showNotificationMethod()
                        notificationMessage.value = showReact.value
                            ? 'Reactjs component copied!'
                            : 'Vuejs component copied!'
                    }
                }
            )
        }

        onMounted(() => {
            Array.from(
                document.querySelectorAll('button[data-bs-toggle="tooltip"]')
            ).forEach((tooltipNode) => new Tooltip(tooltipNode))
        })

        return {
            showCode,
            toggleCode,
            showReact,
            copy,
            notificationMessage,
            showNotification,
        }
    },
})
</script>
