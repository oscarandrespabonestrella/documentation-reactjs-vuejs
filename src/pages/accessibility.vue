<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1 class="mb-4">Accessibility</h1>
            <p>
                Web accessibility (also known as a11y) refers to the practice of
                creating websites that can be used by anyone — be that a person
                with a disability, a slow connection, outdated or broken
                hardware or simply someone in an unfavorable environment. For
                example, adding subtitles to a video would help both your deaf
                and hard-of-hearing users and your users who are in a loud
                environment and can't hear their phone. Similarly, making sure
                your text isn't too low contrast will help both your low-vision
                users and your users who are trying to use their phone in bright
                sunlight. Ready to start but aren’t sure where?
            </p>
            <p>
                Checkout the
                <a
                    href="https://www.w3.org/WAI/planning-and-managing/"
                    target="_blank"
                    class="text-blue-600"
                >
                    Planning and managing web accessibility guide</a
                >
                provided by
                <a
                    href="https://www.w3.org/"
                    target="_blank"
                    class="text-blue-600"
                >
                    World Wide Web Consortium (W3C)</a
                >
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
        <div class="grid">
            <div class="w-full px-4">
                <div class="bg-white">
                    <nav class="flex flex-col sm:flex-row">
                        <button
                            class="bg-transparent text-gray-600 py-2 px-4 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-transparent border-blue-500/0"
                            :class="{ 'border-blue-500/100': showReact }"
                            @click="showReact = true"
                        >
                            React JS</button
                        ><button
                            class="bg-transparent text-gray-600 py-2 px-4 block hover:text-blue-500 border-b-2 focus:outline-none border-transparent border-blue-500/0"
                            :class="{ 'border-blue-500/100': !showReact }"
                            @click="showReact = false"
                        >
                            Vue Js
                        </button>
                    </nav>
                </div>
            </div>
            <div v-if="showReact" class="w-full px-4 React grid">
                <h3 class="mt-3">Semantic HTML</h3>
                <p>Semantic HTML is the foundation of accessibility in a web application. Using the various HTML elements to reinforce the meaning of information in our websites will often give us accessibility 
                    for free.
                    MDN HTML elements reference Sometimes we break HTML semantics when we add &lt;div&gt; elements to our JSX to make our React code work, especially when working with lists (&lt;ol&gt;,
                    &lt;ul&gt; and &lt;dl&gt;) and the HTML &lt;table&gt;. In these cases we should rather use React Fragments to group together multiple elements. For example,
                </p>
                <Prism language="javascript">
                    {{`
import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
                    `}}
                </Prism>
                <p class="my-3">You can map a collection of items to an array of fragments as you would any other type of element as well:</p>
                <Prism language="javascript">{{`
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Fragments should also have a \`key\` prop when mapping collections
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
                    `}}</Prism>
                    <p class="my-3">When you don’t need any props on the Fragment tag you can use the short syntax, if your tooling supports it:</p>
                    <Prism language="javascript">{{`
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}
                        `}}
                    </Prism>
                    <p class="my-3">For more info, see the <a href="https://reactjs.org/docs/fragments.html" class="text-blue-600" target="_blank"> Fragments documentation.</a></p>
                    <h3 class="my-3">Accessible Forms</h3>
                    <h4>Labeling</h4>
                    <p>Every HTML form control, such as &lt;input&gt; and &lt;textarea&gt;, needs to be labeled accessibly. We need to provide descriptive labels that are also exposed to screen readers. The following resources show us how to do this:</p>
                    <ul class="list-disc pl-4 my-3">
                        <li>The W3C shows us how to label elements</li>
                        <li>WebAIM shows us how to label elements</li>
                        <li>The Paciello Group explains accessible names</li>
                    </ul>
                    <p class="mt-3">
                        Although these standard HTML practices can be directly used in React, note that the for attribute is written as htmlFor in JSX:
                    </p>
                    <Prism language="html">{{`
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>  
                        `}}</Prism>
                     <a
                        href="https://reactjs.org/docs/accessibility.html"
                        target="_blank"
                        class="btn btn-sm btn-secondary btn-icon-end w-fit mt-6"
                    >
                        Read More about Reactjs Accessibility
                        <img
                            src="../assets/external-link.svg"
                            alt=""
                            class="ml-2 w-5"
                        />
                    </a>


            </div>
            <div v-else class="w-full px-4 Vuejs grid">
                <h3 class="mt-3">Skip link</h3>
                <p>
                    You should add a link at the top of each page that goes
                    directly to the main content area so users can skip content
                    that is repeated on multiple Web pages. Typically this is
                    done on the top of App.vue as it will be the first focusable
                    element on all your pages:
                </p>
                <Prism language="html">
                    {{ `
<ul class="skip-links">
    <li>
        <a href="#main" ref="skipLink"
            >Skip to main content</a
        >
    </li>
</ul>
                    ` }}
                </Prism>
                <p class="my-3">To hide the link unless it is focused, you can add the following style:</p>
                  <Prism language="css">
                    {{ `
.skipLink {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}
.skipLink:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
                    ` }}
                </Prism>
                <p class="my-3">Once a user changes route, bring focus back to the skip link. This can be achieved by calling focus on the skip link's template ref (assuming usage of vue-router):</p>
                  <Prism language="javascript">
                    {{ `
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const skipLink = ref()

watch(
  () => route.path,
  () => {
    skipLink.value.focus()
  }
)
</script>
                    ` }}
                </Prism>
                <a class="text-blue-600" href="https://www.w3.org/WAI/WCAG21/Techniques/general/G1.html" target="_blank">Read documentation on skip link to main content</a>
                <h3 class="mt-5">Content Structure</h3>
                <p class="my-3">One of the most important pieces of accessibility is making sure that design can support accessible implementation. Design should consider not only color contrast, font selection, text sizing, and language, but also how the content is structured in the application.</p>
                <h4>Headings</h4>
                <p>Users can navigate an application through headings. Having descriptive headings for every section of your application makes it easier for users to predict the content of each section. When it comes to headings, there are a couple of recommended accessibility practices:</p>
                <ul class="list-disc pl-4">
                    <li>Nest headings in their ranking order: 	&lt;h1&gt; - 	&lt;h6&gt;	&lt;/h6&gt;	</li>
                    <li>Don’t skip headings within a section</li>
                    <li>Use actual heading tags instead of styling text to give the visual appearance of headings</li>
                </ul>
                <Prism language="html">
                    {{`
<main role="main" aria-labelledby="main-title">
  <h1 id="main-title">Main title</h1>
  <section aria-labelledby="section-title">
    <h2 id="section-title"> Section Title </h2>
    <h3>Section Subtitle</h3>
    <!-- Content -->
  </section>
  <section aria-labelledby="section-title">
    <h2 id="section-title"> Section Title </h2>
    <h3>Section Subtitle</h3>
    <!-- Content -->
    <h3>Section Subtitle</h3>
    <!-- Content -->
  </section>
</main>
                    `}}
                </Prism>
                <h3 class="my-3">
                    Landmarks
                </h3>
                <p>
                    Landmarks provide programmatic access to sections within an application. Users who rely on assistive technology can navigate to each section of the application and skip over content. You can use ARIA roles to help you achieve this.
                </p>
                <a href="https://www.w3.org/TR/wai-aria-1.2/#landmark_roles" target="_blank" class="text-blue-600">Read more about landmarks</a>
                <a
                    href="https://vuejs.org/guide/best-practices/accessibility.html"
                    target="_blank"
                    class="btn btn-sm btn-secondary btn-icon-end w-fit mt-6"
                >
                    Read More about VueJs Accessibility
                    <img
                        src="../assets/external-link.svg"
                        alt=""
                        class="ml-2 w-5"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Prism from 'vue-prism-component'

export default defineComponent({
    name: 'breadcrumbs-page',
    components: { Prism },
    setup(props) {
        const showReact = ref<boolean>(true)
        return {
            showReact,
        }
    },
})
</script>
