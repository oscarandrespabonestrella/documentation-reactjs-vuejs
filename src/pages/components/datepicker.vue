<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Datepicker</h1>
            <p>
                This datepicker is based on the flexible bootstrap-datepicker
                plugin.
            </p>
            <h2>Dependencies</h2>
            <ul class="list-disc pl-5 mb-3">
                <li>css/flatpickr.css</li>
                <li>js/flatpickr.js</li>
            </ul>

            <h2>External docs</h2>
            <a
                href="https://flatpickr.js.org/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Flatpickr Datepicker
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
                :maintitle="Example2Info.title"
                :reactJsCode="Example2Info.reactCode"
                :vue-js-code="Example2Info.vueCode"
                :description="Example2Info.description"
            >
                <Example2></Example2>
            </CodeBox>
            <CodeBox
                class="break-inside"
                :maintitle="Example1Info.title"
                :reactJsCode="Example1Info.reactCode"
                :vue-js-code="Example1Info.vueCode"
                :description="Example1Info.description"
            >
                <Example1></Example1>
            </CodeBox>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/datepicker/Example1.vue'
import Example2 from '../../components/examples/datepicker/Example2.vue'

import { datepicker } from '../../assets/documentation/datepicker-code'

export default defineComponent({
    name: 'collapse-page',
    components: {
        CodeBox,
        Example1,
        Example2,
    },
    setup(props) {
        return {
            Example1Info: datepicker.example1,
            Example2Info: datepicker.example2,
        }
    },
})
</script>
