<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Pagination</h1>
            <p>
                Our rounded .pagination is slightly different from Bootstrap's,
                however it uses the same markup. Add a .pagination-lg class to
                get the links a bit larger. Use the .disabled and .active
                classes on .page-item to manage disabled and active states.
            </p>
            <h2>External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/components/pagination/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Bootstrap pagination
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
import Example1 from '../../components/examples/pagination/Example1.vue'
import Example2 from '../../components/examples/pagination/Example2.vue'
import { pagination } from '../../assets/documentation/pagination-code'

export default defineComponent({
    name: 'buttons-page',
    components: {
        CodeBox,
        Example1,
        Example2,
    },
    setup(props) {
        return {
            Example1Info: pagination.example1,
            Example2Info: pagination.example2,
        }
    },
})
</script>
