import {IExampleRecord } from "./models";

export const popover: IExampleRecord = {
    example1: {
        title: "Popover",
        description: "One way to initialize all popovers on a page would be to select them by their data-bs-toggle attribute:",
        reactCode: `
import React, { useEffect } from 'react';
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js';

export default () => {
  useEffect(() => {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="popover"]')
    ).forEach((popoverNode) => new Popover(popoverNode));
  });

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover"
      >
        Popover on top
      </button>
      <button
        type="button"
        className="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="Right popover"
      >
        Popover on right
      </button>
      <button
        type="button"
        className="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Bottom popover"
      >
        Popover on bottom
      </button>
      <button
        type="button"
        className="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-content="Left popover"
      >
        Popover on left
      </button>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover"
    >
        Popover on top
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="Right popover"
    >
        Popover on right
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Bottom popover"
    >
        Popover on bottom
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-content="Left popover"
    >
        Popover on left
    </button>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        onMounted(() => {
            Array.from(
                document.querySelectorAll('button[data-bs-toggle="popover"]')
            ).forEach((popoverNode) => new Popover(popoverNode))
        })
    },
})
<\/script>



       
        `
    },
    example2: {
        title: "Tooltip",
        description: "One way to initialize all tooltips on a page would be to select them by their data-bs-toggle attribute",
        reactCode: `
import React, { useEffect } from 'react';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js';

export default () => {
  useEffect(() => {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((popoverNode) => new Tooltip(popoverNode));
  });

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
      >
        Tooltip on top
      </button>
      <button
        type="button"
        className="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Tooltip on right"
      >
        Tooltip on right
      </button>
      <button
        type="button"
        className="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Tooltip on bottom"
      >
        Tooltip on bottom
      </button>
      <button
        type="button"
        className="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Tooltip on left"
      >
        Tooltip on left
      </button>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
    >
        Tooltip on top
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Tooltip on right"
    >
        Tooltip on right
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Tooltip on bottom"
    >
        Tooltip on bottom
    </button>
    <button
        type="button"
        class="btn btn-secondary mr-2 mb-1"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Tooltip on left"
    >
        Tooltip on left
    </button>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',

    setup(props) {
        onMounted(() => {
            Array.from(
                document.querySelectorAll('button[data-bs-toggle="tooltip"]')
            ).forEach((popoverNode) => new Tooltip(popoverNode))
        })
        return {}
    },
})
<\/script>


  
        `
    },
    
}