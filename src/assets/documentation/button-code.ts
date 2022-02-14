import { IExampleRecord } from "./models";

export const buttons: IExampleRecord = {
    example1: {
        title: "Button Styles",
        description: "Basic buttons. The options available are primary | secondary | success | danger|  warning | link | text |dark",
        reactCode: `
import React from 'react';

export default () => {
  return (
    <div>
      <button type="button" class="mr-1 mb-1 btn btn-primary">
        Primary
      </button>
      <button type="button" class="mr-1 mb-1 btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="mr-1 mb-1 btn btn-success">
        Success
      </button>
      <button type="button" class="mr-1 mb-1 btn btn-danger">
        Danger
      </button>
      <button type="button" class="mr-1 mb-1 btn btn-warning">
        Warning
      </button>
      <button type="button" class="mr-1 mb-1 btn btn-info">
        Info
      </button>
      <button type="button" class="mr-1 mb-1 btn btn-light">
        Light
      </button>
      <button type="button" class="mr-1 mb-1 btn btn-dark">
        Dark
      </button>
      <button type="button" class="mr-1 mb-1 btn btn-link">
        Link
      </button>
    </div>
  );
};
        `,
        vueCode: `
<template>
  <button type="button" class="mr-1 mb-1 btn btn-primary">Primary</button>
  <button type="button" class="mr-1 mb-1 btn btn-secondary">Secondary</button>
  <button type="button" class="mr-1 mb-1 btn btn-success">Success</button>
  <button type="button" class="mr-1 mb-1 btn btn-danger">Danger</button>
  <button type="button" class="mr-1 mb-1 btn btn-warning">Warning</button>
  <button type="button" class="mr-1 mb-1 btn btn-info">Info</button>
  <button type="button" class="mr-1 mb-1 btn btn-light">Light</button>
  <button type="button" class="mr-1 mb-1 btn btn-dark">Dark</button>
  <button type="button" class="mr-1 mb-1 btn btn-link">Link</button>
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
        title: "Outline Buttons",
        description: "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.",
        reactCode: `
import React from 'react';

export default () => {
  return (
    <div>
        <button type="button" class="mr-1 btn btn-outline-primary">Primary</button>
        <button type="button" class="mr-1 btn btn-outline-secondary">
            Secondary
        </button>
        <button type="button" class="mr-1 btn btn-outline-success">Success</button>
        <button type="button" class="mr-1 btn btn-outline-danger">Danger</button>
        <button type="button" class="mr-1 btn btn-outline-warning">Warning</button>
        <button type="button" class="mr-1 btn btn-outline-info">Info</button>
        <button type="button" class="mr-1 btn btn-outline-light">Light</button>
        <button type="button" class="mr-1 btn btn-outline-dark">Dark</button>
    </div>
  );
};
        `,
        vueCode: `
<template>
    <button type="button" class="mr-1 btn btn-outline-primary">Primary</button>
    <button type="button" class="mr-1 btn btn-outline-secondary">
        Secondary
    </button>
    <button type="button" class="mr-1 btn btn-outline-success">Success</button>
    <button type="button" class="mr-1 btn btn-outline-danger">Danger</button>
    <button type="button" class="mr-1 btn btn-outline-warning">Warning</button>
    <button type="button" class="mr-1 btn btn-outline-info">Info</button>
    <button type="button" class="mr-1 btn btn-outline-light">Light</button>
    <button type="button" class="mr-1 btn btn-outline-dark">Dark</button>
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
    example3: {
        title: "Sizes",
        description: "Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.",
        reactCode: `
import React from 'react';

export default () => {
  return (
    <div>
        <button type="button" class="btn mr-1 mb-1 btn-primary btn-lg">
            Large button
        </button>
        <button type="button" class="btn mr-1 mb-1 btn-secondary btn-lg">
            Large button
        </button>

        <button type="button" class="btn mr-1 mb-1 btn-primary btn-sm">
            Small button
        </button>
        <button type="button" class="btn mr-1 mb-1 btn-secondary btn-sm">
            Small button
        </button>
    </div>
  );
};
        `,
        vueCode: `
<template>
    <button type="button" class="btn mr-1 mb-1 btn-primary btn-lg">
        Large button
    </button>
    <button type="button" class="btn mr-1 mb-1 btn-secondary btn-lg">
        Large button
    </button>

    <button type="button" class="btn mr-1 mb-1 btn-primary btn-sm">
        Small button
    </button>
    <button type="button" class="btn mr-1 mb-1 btn-secondary btn-sm">
        Small button
    </button>
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
        title: "Block Buttons",
        description: "Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.",
        reactCode: `
import React from 'react';

export default () => {
  return (
     <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Button</button>
        <button class="btn btn-primary" type="button">Button</button>
    </div>
  );
};
        `,
        vueCode: `
<template>
     <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Button</button>
        <button class="btn btn-primary" type="button">Button</button>
    </div>
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