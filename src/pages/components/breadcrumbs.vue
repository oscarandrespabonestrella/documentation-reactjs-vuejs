<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Breadcrumbs</h1>
            <p>
                Indicate the current page’s location within a navigational
                hierarchy that automatically adds separators via CSS.
            </p>
            <h2>External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/components/breadcrumb/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Bootstrap breadcrumbs
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
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/breadcrumbs/Example1.vue'
import { breadcrumbs } from '../../assets/documentation/breadcrumbs-code'

export default defineComponent({
    name: 'breadcrumbs-page',
    components: {
        CodeBox,
        Example1,
    },
    setup(props) {
        return {
            Example1Info: breadcrumbs.example1,
        }
    },
})
</script>
