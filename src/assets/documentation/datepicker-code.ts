import {IExampleRecord } from "./models";

export const datepicker: IExampleRecord = {
    example1: {
        title: "Basic use",
        description: "Simple input datepicker functionality",
        reactCode: `
import React, { useState } from 'react';
import 'flatpickr/dist/flatpickr.css';

import Flatpickr from 'react-flatpickr';

export default () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <Flatpickr
      data-enable-time
      value={date}
      onChange={(date) => {
        setDate(date);
      }}
    />
  );
};


        `,
        vueCode: `
<template>
    <div>
        <flat-pickr
            v-model="date"
            placeholder="Choose date"
            class="form-control"
        ></flat-pickr>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',
    components: {
        flatPickr,
    },

    setup(props) {
        const date = ref<Date | null>(null)
        return {
            date,
        }
    },
})
<\/script>


       
        `
    },
    example2: {
        title: "Datepicker with a range",
        description: "Datepicker usable to select a range",
        reactCode: `
import React, { useState } from 'react';
import 'flatpickr/dist/flatpickr.css';

import Flatpickr from 'react-flatpickr';

export default () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [config, setConfig] = useState<any>({      
    mode: 'range',
    wrap: true, // set wrap to true only when using 'input-group'
    altFormat: 'M j, Y',
    altInput: true,
    dateFormat: 'Y-m-d',      
  });


  return (
    <section>
        <div class="form-group">
            <label>Select a date</label>
            <div class="input-group">
                <flat-pickr
                    value={date}
                    onChange={(date) => {
                        setDate(date);
                    }}
                    config={config}
                    class="form-control"
                    placeholder="Select date"
                    name="date"
                />
            </div>
        </div>
        <pre>Selected date is - {{ date }}</pre>
    </section>
    <Flatpickr
      data-enable-time
      value={date}
      onChange={(date) => {
        setDate(date);
      }}
    />
  );
};
        `,
        vueCode: `
<template>
    <section>
        <div class="form-group">
            <label>Select a date</label>
            <div class="input-group">
                <flat-pickr
                    v-model="date"
                    :config="config"
                    class="form-control"
                    placeholder="Select date"
                    name="date"
                />
            </div>
        </div>
        <pre>Selected date is - {{ date }}</pre>
    </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',
    components: {
        flatPickr,
    },
    setup(props) {
        const date = ref<Date | null>(new Date())
        const config = ref<any>({
            mode: 'range',
            wrap: true, // set wrap to true only when using 'input-group'
            altFormat: 'M j, Y',
            altInput: true,
            dateFormat: 'Y-m-d',
        })
        return {
            date,
            config,
        }
    },
})
<\/script>

  
        `
    },
    
}