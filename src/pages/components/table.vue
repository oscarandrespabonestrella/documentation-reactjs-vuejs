<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Tables</h1>
            <p>
                Due to the widespread use of
                <code>&lt;table&gt;&lt;/table&gt;</code> elements across
                third-party widgets like calendars and date pickers, Bootstrap’s
                tables are opt-in. Add the base class .table to any
                <code>&lt;table&gt;&lt;/table&gt;</code> , then extend with our
                optional modifier classes or custom styles. All table styles are
                not inherited in Bootstrap, meaning any nested tables can be
                styled independent from the parent. Using the most basic table
                markup, here’s how .table-based tables look in Bootstrap.
            </p>
            <h2>External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/content/tables/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Bootstrap table
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
import Example1 from '../../components/examples/tables/Example1.vue'
import Example2 from '../../components/examples/tables/Example2.vue'

import { tables } from '../../assets/documentation/tables-code'

export default defineComponent({
    name: 'table-page',
    components: {
        CodeBox,
        Example1,
        Example2,
    },
    setup(props) {
        return {
            Example1Info: tables.example1,
            Example2Info: tables.example2,
        }
    },
})
</script>
