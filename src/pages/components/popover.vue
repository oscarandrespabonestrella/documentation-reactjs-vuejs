<template>
    <div>
        <div class="inline-grid mx-2 mb-3">
            <h1>Popover & Tooltip</h1>
            <p class="lead">
                For performance reasons, the Popover data-apis are opt-in, which
                means you must initialize them yourself. You need
                <code>popper.js</code> to be loaded in order for the popovers
                and tooltips to work.
            </p>

            <h2>External docs</h2>
            <div class="inline-flex">
                <a
                    href="https://getbootstrap.com/docs/5.1/components/popovers/"
                    target="_blank"
                    class="btn btn-sm btn-secondary btn-icon-end w-fit mr-3"
                >
                    Bootstrap popover
                    <img
                        src="../../assets/external-link.svg"
                        alt=""
                        class="ml-2 w-5"
                    />
                </a>
                <a
                    href="https://getbootstrap.com/docs/5.1/components/tooltips/"
                    target="_blank"
                    class="btn btn-sm btn-secondary btn-icon-end w-fit"
                >
                    Bootstrap tooltips
                    <img
                        src="../../assets/external-link.svg"
                        alt=""
                        class="ml-2 w-5"
                    />
                </a>
            </div>
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
import Example1 from '../../components/examples/popover/Example1.vue'
import Example2 from '../../components/examples/popover/Example2.vue'

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
