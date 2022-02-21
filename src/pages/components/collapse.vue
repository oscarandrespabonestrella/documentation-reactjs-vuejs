<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Collapse</h1>
            <p>
                The collapse JavaScript plugin is used to show and hide content.
                Buttons or anchors are used as triggers that are mapped to
                specific elements you toggle. Collapsing an element will animate
                the height from its current value to 0. Given how CSS handles
                animations, you cannot use padding on a .collapse element.
                Instead, use the class as an independent wrapping element.
            </p>
            <h2>External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/components/collapse/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Bootstrap collapse
                <img
                    src="../../assets/external-link.svg"
                    alt=""
                    class="ml-2 w-5"
                />
            </a>
        </div>
        <div
            class="md:masonry-col box-border mx-auto before:box-inherit after:box-inherit"
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
import Example1 from '../../components/examples/collapse/Example1.vue'
import Example2 from '../../components/examples/collapse/Example2.vue'

import { collapse } from '../../assets/documentation/collapse-code'

export default defineComponent({
    name: 'collapse-page',
    components: {
        CodeBox,
        Example1,
        Example2,
    },
    setup(props) {
        return {
            Example1Info: collapse.example1,
            Example2Info: collapse.example2,
        }
    },
})
</script>
