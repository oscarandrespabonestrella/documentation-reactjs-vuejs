import {IExampleRecord } from "./models";

export const modal: IExampleRecord = {
    example1: {
        title: "Basic use",
        description: "Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.",
        reactCode: `
import React, { useState } from 'react';

export default () => {  
  return (
    <div>
        <button
            type="button"
            class="btn btn-primary my-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            Launch basic modal
        </button>
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-dismiss="modal"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <div>
        <button
            type="button"
            class="btn btn-primary my-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            Launch basic modal
        </button>
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-dismiss="modal"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
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
    },
})
<\/script>


       
        `
    },
    example2: {
        title: "Vertical centered",
        description: "Add .modal-dialog-centered to .modal-dialog to vertically center the modal.",
        reactCode: `
import React, { useState } from 'react';

const modal = () => {  
  return (
    <div>
        <button
            type="button"
            class="btn btn-primary my-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
        >
            Launch centered modal
        </button>

        <!-- Modal -->
        <div
            class="modal"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-dismiss="modal"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-light"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default modal;
        `,
        vueCode: `
<template>
    <div>
        <button
            type="button"
            class="btn btn-primary my-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
        >
            Launch centered modal
        </button>

        <!-- Modal -->
        <div
            class="modal"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-dismiss="modal"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-light"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
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
    example3: {
        title: "Static backdrop",
        description: "When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.",
        reactCode: `
import React, { useState } from 'react';

const modal = () => {  
  return (
    <div>
        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
        >
            Launch static backdrop modal
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Understood
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default modal;
        `,
        vueCode: `
<template>
    <div>
        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
        >
            Launch static backdrop modal
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Understood
                        </button>
                    </div>
                </div>
            </div>
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
        title: "Scrollable",
        description: "You can also create a scrollable modal that allows scroll the modal body by adding .modal-dialog-scrollable to .modal-dialog.",
        reactCode: `
import React, { useState } from 'react';

const modal = () => {  
  return (
    <div>
        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#scrollable"
        >
            Launch scrollable modal
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="scrollable"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Modal title 7
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Understood
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default modal;
        `,
        vueCode: `
<template>
    <div>
        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#scrollable"
        >
            Launch scrollable modal
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="scrollable"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Modal title 7
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Understood
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example4',

    setup(props) {
        return {}
    },
})
<\/script>
  
        `
    },
    example5: {
        title: "Modal size",
        description: "Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.",
        reactCode: `
import React, { useState } from 'react';

export default () => {
  const [size, setSize] = useState('modal-lg');
  const changeSize = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
        <div>
            <div className="mb-4 inline-flex w-full">
                <select className="form-select w-32" onChange={changeSize}>
                    <option value="modal-xl">Extra large</option>
                    <option value="modal-lg">Large</option>
                    <option value="">Default</option>
                    <option value="modal-sm">Small</option>
                </select>
            </div>
        </div>

        <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#sizeModal"
        >
            Modal
        </button>

        
        <div
            className="modal fade"
            id="sizeModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"            
            aria-labelledby="sizeModal"
            aria-hidden="true"
        >
            <div className=\{\`modal-dialog \${size}\`\}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            Modal title 7
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p className="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Understood
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <div>
        <!-- Button trigger modal -->
        <div>
            <div class="mb-4 inline-flex w-full">
                <select class="form-select w-32" v-model="size">
                    <option value="modal-xl">Extra large</option>
                    <option value="modal-lg">Large</option>
                    <option value="">Default</option>
                    <option value="modal-sm">Small</option>
                </select>
            </div>
        </div>

        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#sizeModal"
        >
            Modal
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="sizeModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="sizeModal"
            aria-hidden="true"
        >
            <div :class="\`modal-dialog \${size}\`">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Modal title 7
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-5">
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Understood
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example5',

    setup(props) {
        const size = ref('modal-lg')

        return {
            size,
        }
    },
})
<\/script>

  
        `
    },
    
    
}