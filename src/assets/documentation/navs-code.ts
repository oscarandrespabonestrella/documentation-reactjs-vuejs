import {IExampleRecord } from "./models";

export const navs: IExampleRecord = {
    example1: {
        title: "Navigation tabs with dropdown",
        description: "Classes are used throughout, so your markup can be super flexible. Use <ul>s like above, <ol> if the order of your items is important, or roll your own with a <nav> element. Because the .nav uses display: flex, the nav links behave the same as nav items would, but without the extra markup.",
        reactCode: `
import React from 'react';

export default () => {
  return (
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Dropdown</a
                >
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
    </div>
  );
};
        `,
        vueCode: `
<template>
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item dropdown">
            <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
            >
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
  },
}
<\/script>        
        `
    },
    example2: {
        title: "Position & nav style",
        description: "Change the horizontal alignment of your nav with flexbox utilities. By default, navs are left-aligned, but you can easily change them to center or right aligned. Stack your navigation by changing the flex item direction with the .flex-column utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., .flex-sm-column).",
        reactCode: `
import React, { useState } from 'react';

const Nav = () => {
  const [position, setPosition] = useState('');
  const [hAlignment, sethAlignment] = useState('justify-content-center');

  const handlehAlignmentChange = (e) => {
    if (e.target.value) {
      sethAlignment(e.target.value);
    }
  };
  const handleStyleChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div>
      <div class="mb-4 inline-flex w-full">
        <select
          class="form-select w-32"
          value={hAlignment}
          onChange={handlehAlignmentChange}
        >
          <option value="justify-content-start">Left</option>
          <option selected value="justify-content-center">
            Center
          </option>
          <option value="justify-content-end">Right</option>
        </select>
        <select
          class="form-select ml-3 w-32"
          value={position}
          onChange={handleStyleChange}
        >
          <option value="">Horizontal</option>
          <option selected value="flex-column">
            Vertical
          </option>
        </select>
      </div>
      <div>
        <ul class="nav" class="[hAlignment, position]">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

        `,
        vueCode: `
<template>
    <div>
        <div class="mb-4 inline-flex w-full">
            <select class="form-select w-32" v-model="hAlignment">
                <option value="justify-content-start">Left</option>
                <option selected value="justify-content-center">Center</option>
                <option value="justify-content-end">Right</option>
            </select>
            <select class="form-select ml-3 w-32" v-model="position">
                <option value="">Horizontal</option>
                <option selected value="flex-column">Vertical</option>
            </select>
        </div>
        <div>
            <ul class="nav" :class="[hAlignment, position]">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                        >Active</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                        >Disabled</a
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',
    setup(props) {
        const hAlignment = ref('justify-content-center')
        const position = ref('')

        return {
            hAlignment,
            position,
        }
    },
})
<\/script>
        
        `
    },
    example3: {
        title: "Pills",
        description: "Take that same HTML, but use .nav-pills instead",
        reactCode: `
import React from 'react';

export default () => {
  return (
   <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
            >
        </li>
    </ul>
  );
};
        `,
        vueCode: `
<template>
   <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
            >
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
  },
}
<\/script>        
        `
    },
    example4: {
        title: "Basic nav",
        description: "Classes are used throughout, so your markup can be super flexible. Use <ul>s like above, <ol> if the order of your items is important, or roll your own with a <nav> element. Because the .nav uses display: flex, the nav links behave the same as nav items would, but without the extra markup.",
        reactCode: `
import React from 'react';

export default () => {
  return (
      <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
            >
        </li>
    </ul>
  );
};
        `,
        vueCode: `
<template>
      <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
            >
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
  },
}
<\/script>        
        `
    }
}