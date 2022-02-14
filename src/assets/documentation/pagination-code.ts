import {IExampleRecord } from "./models";

export const pagination: IExampleRecord = {
    example1: {
        title: "Basic use",
        description: "This examples has a .justify-content-center class. It then uses Flexbox to align the pagination to the center. Default placement is on the left. ",
        reactCode: `
import React, { useState } from 'react';

const Pagination = () => {
  const [pages, setPages] = useState([...Array(10).keys()].map((x) => ++x));
  const [randomPage, setRandomPage] = useState(Math.floor(Math.random() * 11));

  return (
    <nav aria-label="" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">
            Previous
          </a>
        </li>
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              class={page === randomPage ? 'page-item active' : 'page-item'}
            >
              <a class="page-link" href="#">
                {page}
              </a>
            </li>
          );
        })}
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

        `,
        vueCode: `
<template>
    <nav aria-label="" class="mt-4">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li
                class="page-item"
                v-for="page in pages"
                :key="page"
                :class="{ active: page === randomPage }"
            >
                <a class="page-link" href="#">{{ page }}</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        const pages = ref<Array<number>>([...Array(10).keys()].map((x) => ++x))
        const randomPage = ref<number>(Math.floor(Math.random() * 11))
        return {
            pages,
            randomPage,
        }
    },
})
<\/script>
       
        `
    },
    example2: {
        title: "Sizing",
        description: "Fancy larger or smaller pagination? Add .pagination-lg or .pagination-sm for additional sizes",
        reactCode: `
import React, { useState } from 'react';

const Pagination = () => {
  const [pages, setPages] = useState([...Array(10).keys()].map((x) => ++x));
  const [randomPage, setRandomPage] = useState(Math.floor(Math.random() * 11));
  const [size, setSize] = useState('pagination-lg');

  const handleOnChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <div class="mb-4 inline-flex w-full">
        <select class="form-select w-32" value={size} onChange={handleOnChange}>
          <option value="pagination-sm">Small</option>
          <option value="">Default</option>
          <option value="pagination-lg">Large</option>
        </select>
      </div>
      <div>
        <nav aria-label="" class="mt-4">
          <ul class={'pagination justify-content-center ' + size}>
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            {pages.map((page, index) => {
              return (
                <li
                  key={index}
                  class={page === randomPage ? 'page-item active' : 'page-item'}
                >
                  <a class="page-link" href="#">
                    {page}
                  </a>
                </li>
              );
            })}
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
        `,
        vueCode: `
<template>
    <div>
        <div class="mb-4 inline-flex w-full">
            <select class="form-select w-32" v-model="size">
                <option value="pagination-sm">Small</option>
                <option value="">Default</option>
                <option value="pagination-lg">Large</option>
            </select>
        </div>
        <div>
            <nav aria-label="" class="mt-4">
                <ul class="pagination justify-content-center" :class="[size]">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li
                        class="page-item"
                        v-for="page in pages"
                        :key="page"
                        :class="{ active: page === randomPage }"
                    >
                        <a class="page-link" href="#">{{ page }}</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',

    setup(props) {
        const pages = ref<Array<number>>([...Array(10).keys()].map((x) => ++x))
        const randomPage = ref<number>(Math.floor(Math.random() * 11))
        const size = ref<string>('pagination-lg')
        return {
            pages,
            randomPage,
            size,
        }
    },
})
<\/script>
  
        `
    },
    
}