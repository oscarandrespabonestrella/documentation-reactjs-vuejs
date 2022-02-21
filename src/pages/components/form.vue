<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Forms</h1>
            <p>
                Bootstrap offers much more option and customization for your
                forms. You may want to have a look to the complete documentation
                to use advanced forms and layouts (Using BS grid system, change
                sizes, icons, etc.) or customize styles.
            </p>
            <h2>External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/forms/overview/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit mb-3"
            >
                Bootstrap forms
                <img
                    src="../../assets/external-link.svg"
                    alt=""
                    class="ml-2 w-5"
                />
            </a>
            <p>
                Some changes have been made by the Boostrap teams in forms
                markup (Our
                <code>.help-block</code> are now <code>.form-text</code>...).
                <br />Please visit the
                <a
                    href="https://getbootstrap.com/docs/5.1/migration/#forms"
                    target="_blank"
                    >Migration reference on getbootstrap.com</a
                >
                to know more.
            </p>
            <p>
                This toolkit also provides an additional styling otion to build
                light forms with th <code>.form-light</code> class (mainly
                affects borders and font-sizes..)
            </p>
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
                :maintitle="Example2Info.title"
                :reactJsCode="Example2Info.reactCode"
                :vue-js-code="Example2Info.vueCode"
                :description="Example2Info.description"
            >
                <Example3></Example3>
            </CodeBox>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/forms/Example1.vue'
import Example2 from '../../components/examples/forms/Example2.vue'
import Example3 from '../../components/examples/forms/Example3.vue'

import { forms } from '../../assets/documentation/forms-code'

export default defineComponent({
    name: 'form-page',
    components: {
        CodeBox,
        Example1,
        Example2,
        Example3,
    },
    setup(props) {
        return {
            Example1Info: forms.example1,
            Example2Info: forms.example2,
        }
    },
})
</script>
