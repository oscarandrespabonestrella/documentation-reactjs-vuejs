<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Grid system</h1>
            <p class="lead">
                The Bootstrap grid system slightly changed since Bootstrap 5,
                but the general principles stays the same. The main difference,
                that offers a lot of new possibilities is the
                <strong>use of Flexbox</strong> within the grid system. Among
                other things, this makes auto-adjustments or vertical alignments
                very easy. You may want to go through the
                <a
                    href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    target="_blank"
                    >related Bootstrap documentation</a
                >
                in order to check all the offered possibilities.
            </p>
            <p class="lead">
                Also, to get more familiar with the way flexbox works, you can
                read
                <a
                    href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                    target="_blank"
                    >this CSS tricks article</a
                >
                or
                <a
                    href="https://www.smashingmagazine.com/2018/08/flexbox-alignment/"
                    target="_blank"
                    >this introduction</a
                >
                by Rachel Andrews on <em>Smashing Magazine</em> or this
                excellent
                <a href="https://flexboxfroggy.com" target="_blank"
                    >Flexbox Froggy</a
                >
                tutorial.
            </p>
            <div class="doc-links my-5">
                <h3>External docs</h3>
                <a
                    href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    target="_blank"
                    class="btn btn-sm btn-secondary btn-icon-end w-fit"
                >
                    Grid system
                    <img
                        src="../../assets/external-link.svg"
                        alt=""
                        class="ml-2 w-5"
                    />
                </a>
            </div>
            <blockquote>
                <p>
                    To construct a responsive html document with Bootstrap, the
                    first thing to do is set a div element with the
                    <code>.container</code> class to control the responsive
                    width of the containing elements.
                </p>
                <p>
                    You can also set a <code>.container-fluid</code> class to
                    make a full-width fluid page.
                </p>
                <p>
                    Inside this <code>.container</code> class, the Bootstrap
                    grid system uses a div element with a
                    <code>.row</code> class to outline column spans. To create a
                    new row of content, add a new div element to a
                    <code>.row</code> class. The row contains 12 nestable spans
                    for the integration of content.
                </p>
                <small><cite>getbootstrap.com</cite></small>
            </blockquote>
            <div class="my-2">
                <h3>Responsive breakpoints</h3>
                <p>
                    The toolkit uses the Bootstrap breakpoints as a reference.
                    Those breakpoints are <strong>576px</strong>,
                    <strong>768px</strong>, <strong>992px</strong> and
                    <strong>1200px</strong>. All breakpoints may be used going
                    <code>-up</code> or <code>-down</code>, or targeting a
                    specific portion ( <code>-md-only</code> for example).
                </p>
                <p>
                    All breakpoints may be applied in your SCSS files using
                    Bootstrap SASS mixins as:
                </p>
                <prism class="rounded" language="css">
                    {{ code1 }}
                </prism>
            </div>
            <div class="my-5">
                <h3>Grid</h3>
                <p>
                    As you may know the Bootstrap grid system is based on
                    <code>.container</code> elements. Inside that container, you
                    can use <code>.row</code> and <code>.col-</code> classes to
                    set your grid.
                </p>
                <prism language="html">{{ code3 }}</prism>
            </div>
            <div class="my-5">
                <h3>Containers in toolkit</h3>
                <p>
                    Containers are top-level elements and are used, in this
                    toolkit, as first child of the
                    <code>.tk-content</code> element. Containers should not be
                    nested.
                </p>
                <prism language="html">{{ code2 }}</prism>
                <p>We created for this toolkit some specific containers :</p>
                <ul>
                    <li>
                        The <code>.container</code> used in most of these pages,
                        has a flexible <code>max-width</code> and horizontal
                        margins of <code>4vw</code>. (in Bootstrap it has a
                        fixed max-width of 1200px)
                    </li>
                    <li>
                        The <code>.container-fluid</code>, as in Bootstrap, will
                        fit full width of its <code>.tk-content</code> parent.
                    </li>
                    <li>
                        The <code>.container-full-top</code> should stick to the
                        <code>.tk-top</code> menu and fit full width of its
                        <code>.tk-content</code> parent. This is used in our
                        <strong>Profile template</strong> page.
                    </li>
                    <li>
                        The <code>.container-full-height</code> will fit the
                        entire <code>.tk-content</code> both horizontally and
                        vertically. This is used in our
                        <strong>Login template</strong> page.
                    </li>
                </ul>
                <p>
                    Inside thos containers, you can use rows and columns as
                    usual. Use Bootstrap flex utilities for alignments.
                </p>
            </div>
        </div>
        <div
            class="md:masonry-col box-border mx-auto before:box-inherit after:box-inherit"
        ></div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { breadcrumbs } from '../../assets/documentation/breadcrumbs-code'
import Prism from 'vue-prism-component'

export default defineComponent({
    name: 'grid-page',
    components: {
        Prism,
    },
    setup(props) {
        const code1 = ref<string>(`
@include media-breakpoint-down(xs) { ... } 
@include media-breakpoint-down(sm) { ... } 
@include media-breakpoint-down(md) { ... } 
@include media-breakpoint-down(lg) { ... }
`)

        const code2 = ref<string>(
            `<div class="tk-content">
      <div class="container">
          Your content
      </div>
  </div>`
        )
        const code3 = ref<string>(
            `<div class="container">
    <div class="col-sm"> 
        <h5>One of three columns</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero dignissimos, sapiente a suscipit aperiam autem recusandae corrupti.</p>
    </div>
    <div class="col-sm"> 
        <h5>One of three columns</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero dignissimos, sapiente a suscipit aperiam autem recusandae corrupti.</p>
    </div>
    <div class="col-sm"> 
        <h5>One of three columns</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero dignissimos, sapiente a suscipit aperiam autem recusandae corrupti.</p>
    </div>
</div>`
        )

        return {
            Example1Info: breadcrumbs.example1,
            code1,
            code2,
            code3,
        }
    },
})
</script>
