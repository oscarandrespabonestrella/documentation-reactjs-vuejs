import {IExampleRecord } from "./models";

export const collapse: IExampleRecord = {
    example1: {
        title: "Basic use",
        description: "Generally, we recommend using a button with the data-bs-target attribute. While not recommended from a semantic point of view, you can also use a link with the href attribute (and a role='button'). In both cases, the data-bs-toggle='collapse' is required.",
        reactCode: `
import React, { useState } from 'react';

export default () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <p>
        <a
          class="btn btn-primary mr-2"
          data-bs-toggle="collapse"
          onClick={toggleCollapsed}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          onClick={toggleCollapsed}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </p>
      {!collapsed && (
        <div>
          <div class="card card-body p-3">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      )}
    </div>
  );
};

        `,
        vueCode: `
<template>
    <div>
        <p>
            <a
                class="btn btn-primary mr-2"
                data-bs-toggle="collapse"
                onclick="toggleCollapsed"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
            >
                Link with href
            </a>
            <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                @click="toggleCollapsed"
                aria-expanded="false"
                aria-controls="collapseExample"
            >
                Button with data-bs-target
            </button>
        </p>
        <div v-if="!collapsed">
            <div class="card card-body p-3">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        const collapsed = ref<boolean>(true)
        const toggleCollapsed = () => {
            collapsed.value = !collapsed.value
        }
        return {
            collapsed,
            toggleCollapsed,
        }
    },
})
<\/script>

       
        `
    },
    example2: {
        title: "Accordion",
        description: "We created a simple accordion with a basic markup, that we use at the bottom of our landing page. This uses a .tk-accordion along with the Bootstrap .accordion class.",
        reactCode: `
import React, { useState } from 'react';

const accordion = () => {  
  return (
    <div class="accordion tk-accordion" id="accordionExample">
        <div>
            <h5
                id="headingOne"
                class="mb-0 d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
            >
                Developers
                <i class="material-icons md-18">add</i>
            </h5>
            <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch.
                </p>
            </div>
        </div>
        <div>
            <h5
                id="headingTwo"
                class="mb-0 d-flex justify-content-between align-items-center collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
            >
                Project Managers
                <i class="material-icons md-18">add</i>
            </h5>
            <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                </p>
            </div>
        </div>
        <div>
            <h5
                id="headingThree"
                class="mb-0 d-flex justify-content-between align-items-center collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
            >
                Designers
                <i class="material-icons md-18">add</i>
            </h5>
            <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
            >
                <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch.
                </p>
            </div>
        </div>
    </div>
  );
};

export default accordion;
        `,
        vueCode: `
<template>
    <div class="accordion tk-accordion" id="accordionExample">
        <div>
            <h5
                id="headingOne"
                class="mb-0 d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
            >
                Developers
                <i class="material-icons md-18">add</i>
            </h5>
            <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch.
                </p>
            </div>
        </div>
        <div>
            <h5
                id="headingTwo"
                class="mb-0 d-flex justify-content-between align-items-center collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
            >
                Project Managers
                <i class="material-icons md-18">add</i>
            </h5>
            <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                </p>
            </div>
        </div>
        <div>
            <h5
                id="headingThree"
                class="mb-0 d-flex justify-content-between align-items-center collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
            >
                Designers
                <i class="material-icons md-18">add</i>
            </h5>
            <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
            >
                <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch.
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',

    setup(props) {
        return {}
    },
})
<\/script>
  
        `
    },
    
}