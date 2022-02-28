<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Progress</h1>
            <p>
                Documentation and examples for using Bootstrap custom progress
                bars featuring support for stacked bars, animated backgrounds,
                and text labels.
            </p>
            <p>
                Progress components are built with two HTML elements, some CSS
                to set the width, and a few attributes. We don’t use the HTML5
                <code>&lt;progress&gt;</code> element, ensuring you can stack
                progress bars, animate them, and place text labels over them.
            </p>
            <ul class="mb-5 list-disc pl-5">
                <li>
                    We use the .progress as a wrapper to indicate the max value
                    of the progress bar.
                </li>
                <li>
                    We use the inner <code>.progress-bar</code> to indicate the
                    progress so far.
                </li>
                <li>
                    The <code>.progress-bar</code> requires an inline style,
                    utility class, or custom CSS to set their width.
                </li>
                <li>
                    The <code>.progress-bar</code> also requires some role and
                    aria attributes to make it accessible.
                </li>
            </ul>

            <h2 class="mb-4">External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/components/progress/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Bootstrap progress
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
            <CodeBox
                class="break-inside"
                :maintitle="Example5Info.title"
                :reactJsCode="Example5Info.reactCode"
                :vue-js-code="Example5Info.vueCode"
                :description="Example5Info.description"
            >
                <Example5></Example5>
            </CodeBox>
            <CodeBox
                class="break-inside"
                :maintitle="Example6Info.title"
                :reactJsCode="Example6Info.reactCode"
                :vue-js-code="Example6Info.vueCode"
                :description="Example6Info.description"
            >
                <Example6></Example6>
            </CodeBox>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/progress/Example1.vue'
import Example2 from '../../components/examples/progress/Example2.vue'
import Example3 from '../../components/examples/progress/Example3.vue'
import Example4 from '../../components/examples/progress/Example4.vue'
import Example5 from '../../components/examples/progress/Example5.vue'
import Example6 from '../../components/examples/progress/Example6.vue'
import { progress } from '../../assets/documentation/progress-code'

export default defineComponent({
    name: 'progress-page',
    components: {
        CodeBox,
        Example1,
        Example2,
        Example3,
        Example4,
        Example5,
        Example6,
    },
    setup(props) {
        return {
            Example1Info: progress.example1,
            Example2Info: progress.example2,
            Example3Info: progress.example3,
            Example4Info: progress.example4,
            Example5Info: progress.example5,
            Example6Info: progress.example6,
        }
    },
})
</script>
