<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Cards</h1>
            <p>
                Bootstrap’s cards provide a flexible and extensible content
                container with multiple variants and options.
            </p>
            <h2>External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/components/card/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Bootstrap cards
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
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/cards/Example1.vue'
import Example2 from '../../components/examples/cards/Example2.vue'
import Example3 from '../../components/examples/cards/Example3.vue'
import Example4 from '../../components/examples/buttons/Example4.vue'
import { cards } from '../../assets/documentation/cards-code'

export default defineComponent({
    name: 'cards-page',
    components: {
        CodeBox,
        Example1,
        Example2,
        Example3,
    },
    setup(props) {
        return {
            Example1Info: cards.example1,
            Example2Info: cards.example2,
            Example3Info: cards.example3,
        }
    },
})
</script>
