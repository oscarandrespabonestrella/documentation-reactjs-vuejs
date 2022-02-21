<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Modal</h1>
            <p>
                Use Bootstrap’s JavaScript modal plugin to add dialogs to your
                site for lightboxes, user notifications, or completely custom
                content. (Bootstrap docs)
            </p>
            <h2>How it works</h2>
            <p>
                Before getting started with Bootstrap’s modal component, be sure
                to read the following as
                <strong>Bootstrap menu options have recently changed</strong>.
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li>
                    Modals are built with HTML, CSS, and JavaScript. They’re
                    positioned over everything else in the document and remove
                    scroll from the
                    <code class="highlighter-rouge">&lt;body&gt;</code> so that
                    modal content scrolls instead.
                </li>
                <li>
                    Clicking on the modal “backdrop” will automatically close
                    the modal.
                </li>
                <li>
                    Bootstrap only supports one modal window at a time. Nested
                    modals aren’t supported as we believe them to be poor user
                    experiences.
                </li>
                <li>
                    Modals use
                    <code class="highlighter-rouge">position: fixed</code>,
                    which can sometimes be a bit particular about its rendering.
                    Whenever possible, place your modal HTML in a top-level
                    position to avoid potential interference from other
                    elements. You’ll likely run into issues when nesting a
                    <code class="highlighter-rouge">.modal</code> within another
                    fixed element.
                </li>
                <li>
                    Once again, due to
                    <code class="highlighter-rouge">position: fixed</code>,
                    there are some caveats with using modals on mobile devices.
                    <a
                        target="_blank"
                        href="https://getbootstrap.com/docs/5.1/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile"
                        >See our browser support docs</a
                    >
                    for details.
                </li>
                <li>
                    Due to how HTML5 defines its semantics,
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus"
                        >the
                        <code class="highlighter-rouge">autofocus</code> HTML
                        attribute</a
                    >
                    has no effect in Bootstrap modals. To achieve the same
                    effect, use some custom JavaScript:
                </li>
            </ul>
            <h2>External docs</h2>
            <a
                href="https://getbootstrap.com/docs/5.1/components/modal/"
                target="_blank"
                class="btn btn-sm btn-secondary btn-icon-end w-fit"
            >
                Bootstrap modal
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
            <CodeBox
                class="break-inside"
                :maintitle="Example5Info.title"
                :reactJsCode="Example5Info.reactCode"
                :vue-js-code="Example5Info.vueCode"
                :description="Example5Info.description"
            >
                <Example5></Example5>
            </CodeBox>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/modal/Example1.vue'
import Example2 from '../../components/examples/modal/Example2.vue'
import Example3 from '../../components/examples/modal/Example3.vue'
import Example4 from '../../components/examples/modal/Example4.vue'
import Example5 from '../../components/examples/modal/Example5.vue'
import { modal } from '../../assets/documentation/modal-code'

export default defineComponent({
    name: 'collapse-page',
    components: {
        CodeBox,
        Example1,
        Example2,
        Example3,
        Example4,
        Example5,
    },
    setup(props) {
        return {
            Example1Info: modal.example1,
            Example2Info: modal.example2,
            Example3Info: modal.example3,
            Example4Info: modal.example4,
            Example5Info: modal.example5,
        }
    },
})
</script>
