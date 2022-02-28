import {IExampleRecord } from "./models";

export const progress: IExampleRecord = {
    example1: {
        title: "Basic use",
        description: "Put that all together, and you have the following examples",
        reactCode: `
import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <div>
      <div className="progress mb-2">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress mb-2">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '25%' }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress mb-2">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '50%' }}
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress mb-2">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '75%' }}
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress mb-2">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '100%' }}
          aria-valuenow={100}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        return {}
    },
})
<\/script>

        `
    },
    example2: {
        title: "Custom width",
        description: "Bootstrap provides a handful of utilities for setting width. Depending on your needs, these may help with quickly configuring progress.",
        reactCode: `
import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar w-75"
          role="progressbar"
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <div class="progress">
        <div
            class="progress-bar w-75"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
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
    example3: {
        title: "Label and height",
        description: "We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingly. Add labels to your progress bars by placing text within the .progress-bar. 25%",
        reactCode: `
import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <div>
     <div className="progress" style={{"height": "20px"}}>
        <div
            className="progress-bar"
            role="progressbar"
            style={{"width": "25%"}}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            25%
        </div>
    </div>
    </div>
  );
};
        `,
        vueCode: `
<template>
    <div class="progress" style="height: 20px">
        <div
            class="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
        >
            25%
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example3',

    setup(props) {
        return {}
    },
})
<\/script>

        `
    },
    example4: {
        title: "Backgrounds",
        description: "Use background utility classes to change the appearance of individual progress bars.",
        reactCode: `
import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: '25%' }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: '50%' }}
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: '75%' }}
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: '100%' }}
          aria-valuenow={100}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <div class="progress">
        <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar bg-info"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar bg-warning"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar bg-danger"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example3',

    setup(props) {
        return {}
    },
})
<\/script>
        
        `
    },
    example5: {
        title: "Multiple bars",
        description: "Include multiple progress bars in a progress component if you need.",
        reactCode: `
import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '15%' }}
          aria-valuenow={15}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: '30%' }}
          aria-valuenow={30}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: '20%' }}
          aria-valuenow={20}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};


        `,
        vueCode: `
<template>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            style="width: 15%"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
        <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 30%"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
        <div
            class="progress-bar bg-info"
            role="progressbar"
            style="width: 20%"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example5',

    setup(props) {
        return {}
    },
})
<\/script>

        
        `
    },
    example6: {
        title: "Animated Stripes",
        description: "The striped gradient can also be animated. Add .progress-bar-animated to .progress-bar to animate the stripes right to left via CSS3 animations.",
        reactCode: `
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  const [animated, setAnimated] = useState(false);
  const toggleAnimation = () => {
    setAnimated(!animated);
  };
  return (
    <div>
      <div className="mb-4">
        <button className="btn btn-primary" onClick={toggleAnimation}>
          Toggle Animation
        </button>
      </div>

      <div className="progress">
        <div
          className={\`progress-bar progress-bar-striped \${
            animated && 'progress-bar-animated'
          }\`}
          role="progressbar"
          style={{ width: '10%' }}
          aria-valuenow={10}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress">
        <div
          className={\`progress-bar progress-bar-striped bg-success \${
            animated && 'progress-bar-animated'
          }\`}
          role="progressbar"
          style={{ width: '25%' }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress">
        <div
          className={\`progress-bar progress-bar-striped bg-info \${
            animated && 'progress-bar-animated'
          }\`}
          role="progressbar"
          style={{ width: '50%' }}
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress">
        <div
          className={\`progress-bar progress-bar-striped bg-warning \${
            animated && 'progress-bar-animated'
          }\`}
          role="progressbar"
          style={{ width: '75%' }}
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="progress">
        <div
          className={\`progress-bar progress-bar-striped bg-danger \${
            animated && 'progress-bar-animated'
          }\`}
          role="progressbar"
          style={{ width: '100%' }}
          aria-valuenow={100}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};



        `,
        vueCode: `
<template>
    <div class="mb-4">
        <button class="btn btn-primary" @click="toggleAnimation()">
            Toggle Animation
        </button>
    </div>

    <div class="progress">
        <div
            class="progress-bar progress-bar-striped"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 10%"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar progress-bar-striped bg-success"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar progress-bar-striped bg-info"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar progress-bar-striped bg-warning"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="progress">
        <div
            class="progress-bar progress-bar-striped bg-danger"
            :class="animated ? 'progress-bar-animated' : ''"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example6',

    setup(props) {
        const animated = ref<boolean>(false)
        const toggleAnimation = () => {
            animated.value = !animated.value
        }
        return {
            animated,
            toggleAnimation,
        }
    },
})
<\/script>


        
        `
    }
}