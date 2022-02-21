import {IExampleRecord } from "./models";

export const notification: IExampleRecord = {
    example1: {
        title: "Basic use",
        description: "Simple default notification",
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
    <button
        type="button"
        class="btn btn-primary"
        id="liveToastBtn"
        @click="showNotification1()"
    >
        Simple notification
    </button>

    <div class="position-fixed top-0 end-0 p-3" style="z-index: 9999">
        <div
            ref="simpleToast"
            id="liveToast"
            class="toast hide"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div class="toast-header">
                <strong class="me-auto">Notification Box</strong>
                <small>11 mins ago</small>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button>
            </div>
            <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',
    components: {},

    setup(props) {
        const simpleToast = ref(null)
        const showNotification1 = () => {
            const toast = new Toast(simpleToast.value, {
                autohide: true,
                duration: 3000,
            })

            toast.show()
        }
        onMounted(() => {})
        return {
            simpleToast,
            showNotification1,
        }
    },
})
<\/script>



       
        `
    },
    example2: {
        title: "Placement",
        description: "Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the .toast.",
        reactCode: `
import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min.js';

export default () => {
  const positionToast = useRef(null);
  const [toastPosition, setToastPosition] = useState(null);
  const showNotificationPosition = (position) => {
    setToastPosition(position);
    const positionToastAux = new Toast(positionToast.current, {
      autohide: true,
      duration: 6000,
    });
    positionToastAux.show();
  };

  return (
    <div>
      <div className="row mb-2">
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() => showNotificationPosition('top-0 start-0')}
          >
            Top Left
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() =>
              showNotificationPosition('top-0 start-50 translate-middle-x')
            }
          >
            Top
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() => showNotificationPosition('top-0 end-0')}
          >
            Top Right
          </button>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() =>
              showNotificationPosition('top-50 start-0 translate-middle-y')
            }
          >
            Left
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() =>
              showNotificationPosition('top-50 start-50 translate-middle')
            }
          >
            Middle
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() =>
              showNotificationPosition('top-50 end-0 translate-middle-y')
            }
          >
            Right
          </button>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() => showNotificationPosition('bottom-0 start-0')}
          >
            Bottom Left
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() =>
              showNotificationPosition('bottom-0 start-50 translate-middle-x')
            }
          >
            Bottom
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-dashed me-1"
            onClick={() => showNotificationPosition('bottom-0 end-0')}
          >
            Bottom Right
          </button>
        </div>
      </div>
      <div
        className={\`position-fixed p-3 \${toastPosition}\`}
        style={{ 'z-index': '9999' }}
      >
        <div
          ref={positionToast}
          id="positionToast"
          className="toast hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Notification Box</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </div>
  );
};

        `,
        vueCode: `
<template>
    <div class="row mb-2">
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="showNotificationPosition('top-0 start-0')"
            >
                Top Left
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition(
                        'top-0 start-50 translate-middle-x'
                    )
                "
            >
                Top
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="showNotificationPosition('top-0 end-0')"
            >
                Top Right
            </button>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition(
                        'top-50 start-0 translate-middle-y'
                    )
                "
            >
                Left
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition('top-50 start-50 translate-middle')
                "
            >
                Middle
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition('top-50 end-0 translate-middle-y')
                "
            >
                Right
            </button>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="showNotificationPosition('bottom-0 start-0')"
            >
                Bottom Left
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="
                    showNotificationPosition(
                        'bottom-0 start-50 translate-middle-x'
                    )
                "
            >
                Bottom
            </button>
        </div>
        <div class="col-4">
            <button
                class="btn btn-dashed me-1"
                @click="showNotificationPosition('bottom-0 end-0')"
            >
                Bottom Right
            </button>
        </div>
    </div>
    {{ toastPosition }}
    <div
        class="position-fixed p-3"
        :class="toastPosition"
        style="z-index: 9999"
    >
        <div
            ref="positionToast"
            id="positionToast"
            class="toast hide"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div class="toast-header">
                <strong class="me-auto">Notification Box</strong>
                <small>11 mins ago</small>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button>
            </div>
            <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',
    components: {},
    setup(props) {
        const simpleToast = ref(null)
        const toastPosition = ref<string>('top-0 start-0')
        const positionToast = ref(null)

        const showNotificationPosition = (position: string) => {
            toastPosition.value = position
            const positionToastAux = new Toast(positionToast.value, {
                autohide: true,
                duration: 6000,
            })
            positionToastAux.show()
        }

        return {
            simpleToast,
            showNotificationPosition,
            positionToast,
            toastPosition,
        }
    },
})
<\/script>


  
        `
    },
    
}