<template>
    <div>
        <div class="inline-grid mx-2 mb-3">
            <h1>Notification</h1>
            <p>
                Push notifications to your visitors with a toast, a lightweight
                and easily customizable alert message.
            </p>
            <p>
                Toasts are lightweight notifications designed to mimic the push
                notifications that have been popularized by mobile and desktop
                operating systems. They’re built with flexbox, so they’re easy
                to align and position.
            </p>

            <h2>External docs</h2>

            <a
                href="https://getbootstrap.com/docs/5.1/components/toasts/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit mr-3"
            >
                Bootstrap toast
                <img
                    src="../../assets/external-link.svg"
                    alt=""
                    class="ml-2 w-5"
                />
            </a>
        </div>
        <div
            class="md:masonry-2-col box-border mx-auto before:box-inherit after:box-inherit"
        >
            <CodeBox
                class="break-inside"
                :maintitle="Example1Info.title"
                :reactJsCode="Example1Info.reactCode"
                :vue-js-code="Example1Info.vueCode"
                :description="Example1Info.description"
            >
                <Example1></Example1>
            </CodeBox>
            <CodeBox
                class="break-inside"
                :maintitle="Example2Info.title"
                :reactJsCode="Example2Info.reactCode"
                :vue-js-code="Example2Info.vueCode"
                :description="Example2Info.description"
            >
                <Example2></Example2>
            </CodeBox>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/notification/Example1.vue'
import Example2 from '../../components/examples/notification/Example2.vue'

import { popover } from '../../assets/documentation/popover-code'

export default defineComponent({
    name: 'popover-page',
    components: {
        CodeBox,
        Example1,
        Example2,
    },
    setup(props) {
        return {
            Example1Info: popover.example1,
            Example2Info: popover.example2,
        }
    },
})
</script>
