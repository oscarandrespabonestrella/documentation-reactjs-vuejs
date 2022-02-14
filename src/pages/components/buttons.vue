<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Buttons</h1>
            <p>
                These are basic markups for buttons. Add a .btn class to any
                button, a or other element to style as a button. You will find
                much more information about buttons in the related Bootstrap
                documentation.
            </p>
            <h2>External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/components/buttons/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Bootstrap buttons
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
            <CodeBox
                class="break-inside"
                :maintitle="Example3Info.title"
                :reactJsCode="Example3Info.reactCode"
                :vue-js-code="Example3Info.vueCode"
                :description="Example3Info.description"
            >
                <Example3></Example3>
            </CodeBox>
            <CodeBox
                class="break-inside"
                :maintitle="Example4Info.title"
                :reactJsCode="Example4Info.reactCode"
                :vue-js-code="Example4Info.vueCode"
                :description="Example4Info.description"
            >
                <Example4></Example4>
            </CodeBox>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/buttons/Example1.vue'
import Example2 from '../../components/examples/buttons/Example2.vue'
import Example3 from '../../components/examples/buttons/Example3.vue'
import Example4 from '../../components/examples/buttons/Example4.vue'
import { buttons } from '../../assets/documentation/button-code'

export default defineComponent({
    name: 'buttons-page',
    components: {
        CodeBox,
        Example1,
        Example2,
        Example3,
        Example4,
    },
    setup(props) {
        return {
            Example1Info: buttons.example1,
            Example2Info: buttons.example2,
            Example3Info: buttons.example3,
            Example4Info: buttons.example4,
        }
    },
})
</script>
