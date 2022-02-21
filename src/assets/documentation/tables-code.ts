import {IExampleRecord } from "./models";

export const tables: IExampleRecord = {
    example1: {
        title: "Basic use",
        description: "Using the most basic table markup, here’s how .table-based tables look in Bootstrap.",
        reactCode: `
import React, { useState } from 'react';

export default () => {  
  return (
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
  );
};

        `,
        vueCode: `
<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {       
    },
})
<\/script>

       
        `
    },
    example2: {
        title: "Responsive tables",
        description: "Tables can take the Bootstrap .table-responsive for horizontally scrolling tables, or the .table-list class on the table parent element.Content of the th elements should also be added in the related table cells, in a data-label attribute. This attribute will be used to add labels in front of the cells content, on mobile devices. This uses CSS to get the data-attibute content and place it in a CSS :before pseudo-element.",
        reactCode: `
import React, { useState } from 'react';

export default () => {
  const [nbrcols, setNbrCols] = useState<number>(6);
  const [nbrrows, setNbrrows] = useState<Array<number>>(
    [...new Array(15)].map((x, index) => index)
  );
  return (
    <div>
      <div className="table-options mt-4 mb-4">
        <div className="d-flex justify-content-between">
          <div className="results-found d-flex align-items-center">
            <span className="me-2">438</span> results found
          </div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button className="btn btn-primary">Print</button>
            <button className="btn btn-primary">Export</button>
          </div>
        </div>
      </div>
      <div className="table-responsive table-list">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading 1</th>
              <th>Table heading 2</th>
              <th>Table heading 3</th>
              <th>Table heading 4</th>
              <th>Table heading 5</th>
              <th>Table heading 6</th>
            </tr>
          </thead>
          <tbody>
            {nbrrows.map((value, index) => (
              <tr>
                <td data-label="#">{index}</td>
                <td data-label="Table heading 1">Table content {index}.1</td>
                <td data-label="Table heading 2">
                  <a href="#">Table content {index}.2</a>
                </td>
                <td data-label="Table heading 3">Table content {index}.3</td>
                <td data-label="Table heading 4">Table content {index}.4</td>
                <td data-label="Table heading 5">Table content {index}.5</td>
                <td data-label="Table heading 6">Table content {index}.6</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav aria-label="" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              2{' '}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <div class="table-options mt-4 mb-4">
        <div class="d-flex justify-content-between">
            <div class="results-found d-flex align-items-center">
                <span class="me-2">438</span> results found
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-primary">Print</button>
                <button class="btn btn-primary">Export</button>
            </div>
        </div>
    </div>
    <div class="table-responsive table-list">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading 1</th>
                    <th>Table heading 2</th>
                    <th>Table heading 3</th>
                    <th>Table heading 4</th>
                    <th>Table heading 5</th>
                    <th>Table heading 6</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(trow, index) in nbrrows" :key="index">
                    <td data-label="#">{{ index }}</td>
                    <td data-label="Table heading 1">
                        Table content {{ index }}.1
                    </td>
                    <td data-label="Table heading 2">
                        <a href="#">Table content {{ index }}.2</a>
                    </td>
                    <td data-label="Table heading 3">
                        Table content {{ index }}.3
                    </td>
                    <td data-label="Table heading 4">
                        Table content {{ index }}.4
                    </td>
                    <td data-label="Table heading 5">
                        Table content {{ index }}.5
                    </td>
                    <td data-label="Table heading 6">
                        Table content {{ index }}.6
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <nav aria-label="" class="mt-4">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
                <a class="page-link" href="#">2 </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
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
    name: 'Example2',

    setup(props) {
        const nbrcols = ref<number>(6)
        const nbrrows = ref<number>(15)
        return {
            nbrcols,
            nbrrows,
        }
    },
})
<\/script>

  
        `
    },
    
}