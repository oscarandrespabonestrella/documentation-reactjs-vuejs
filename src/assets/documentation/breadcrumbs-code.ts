import {IExampleRecord } from "./models";

export const breadcrumbs: IExampleRecord = {
    example1: {
        title: "Basic use",
        description: "Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use our utilities to add additional styles as desired.",
        reactCode: `
import React from 'react';

export default () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
      </nav>

      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
      </nav>

      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
      </nav>
    </div>
  );
};
        `,
        vueCode: `
<template>
   <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
    </nav>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
    </nav>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>
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