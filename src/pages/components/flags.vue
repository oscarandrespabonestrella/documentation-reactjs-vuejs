<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Flags</h1>
            <p>
                In order to Use the pictures, ou need to create an extra
                component in vuejs/react in order to render the respective icon
                on it from the ep-feather icons-library.
            </p>

            <div class="w-full px-4">
                <div class="bg-white">
                    <nav class="flex flex-col sm:flex-row">
                        <button
                            class="bg-transparent text-gray-600 py-2 px-4 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-transparent border-blue-500/0"
                            :class="{ 'border-blue-500/100': showReact }"
                            @click="showReact = true"
                        >
                            React JS</button
                        ><button
                            class="bg-transparent text-gray-600 py-2 px-4 block hover:text-blue-500 border-b-2 focus:outline-none border-transparent border-blue-500/0"
                            :class="{ 'border-blue-500/100': !showReact }"
                            @click="showReact = false"
                        >
                            Vue Js
                        </button>
                    </nav>
                </div>
            </div>
            <div v-if="showReact" class="w-full px-4 React grid">
                <prism class="rounded" language="javascript">{{
                    reactJsCode
                }}</prism>
            </div>
            <div v-else class="w-full px-4 Vuejs grid">
                <prism class="rounded" language="javascript">{{
                    vueJsCode
                }}</prism>
            </div>
        </div>
        <div
            class="md:masonry-col box-border mx-auto before:box-inherit after:box-inherit"
        >
            <CodeBox
                class="break-inside"
                :maintitle="Example1Info.title"
                :reactJsCode="Example1Info.reactCode"
                :vue-js-code="Example1Info.vueCode"
                :description="Example1Info.description"
            >
                <Example1></Example1>
            </CodeBox>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CodeBox from '../../components/CodeBox.vue'
import Example1 from '../../components/examples/flags/Example1.vue'
import { flags } from '../../assets/documentation/flags-code'
import Prism from 'vue-prism-component'
export default defineComponent({
    name: 'buttons-page',
    components: {
        CodeBox,
        Example1,
        Prism,
    },
    setup(props) {
        const showReact = ref<boolean>(true)
        const reactJsCode = ref<string>(`
//IconInner component

import React from 'react';
import PropTypes from 'prop-types';
import {completeIconSet} from 'ep-feather-icons';

const createMarkup = (markup) => {  
  return { __html: markup };
};

const IconInner = ({ icon }) => {  
  const iconMarkup = completeIconSet.find(iconLoop => iconLoop.name === icon);
  
  if (iconMarkup) {    
    return <g dangerouslySetInnerHTML={createMarkup(iconMarkup.data)} />;
  }
  return null;
};

IconInner.propTypes = {
  icon: PropTypes.string.isRequired
};

export default IconInner;

//EpIcon component

import React from 'react';
import PropTypes from 'prop-types';
import IconInner from './IconInner';

const EpIcon = ({
  icon,
  size = 24,
  className = '',
  fill = 'none',
  ...otherProps
}) => {
  if (!icon) {
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={\`feather feather-\${icon} \${className}\`}
      {...otherProps}
    >
      <IconInner icon={icon} />
    </svg>
  );
};

EpIcon.propTypes = {
  icon: PropTypes.string.isRequired, 
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  fill: PropTypes.string,
};

export default EpIcon;
        `)
        const vueJsCode = ref<string>(`
<script lang="ts">
import { defineComponent, h } from 'vue'
import { completeIconSet } from 'ep-feather-icons'
export default defineComponent({
    name: 'EpIcon',
    props: {
        animation: {
            type: String,
            default: undefined,
        },
        animationSpeed: {
            type: String,
            default: undefined,
        },
        fill: {
            type: String,
            default: 'none',
        },
        size: {
            type: [Number, String],
            default: 24,
        },
        stroke: {
            type: String,
            default: 'currentColor',
        },
        strokeLinecap: {
            type: String,
            default: 'round',
        },
        strokeLinejoin: {
            type: String,
            default: 'round',
        },
        strokeWidth: {
            type: [Number, String],
            default: 2,
        },
        tag: {
            type: String,
            default: 'i',
        },
        type: {
            type: String,
            default: 'feather',
            validator(type: string) {
                if (!completeIconSet) {
                    throw new Error('The Feather icons is required.')
                }
                if (!completeIconSet.find((x) => x.name === type)) {
                    throw new Error(\`"\${type}" is not an available icon type.\`)
                }
                return true
            },
        },
    },
    computed: {
        isRemSize(): boolean {
            return typeof this.size === 'string' && this.size.endsWith('rem')
        },
    },
    render() {
        const { animation, animationSpeed, isRemSize, size, type } = this
        const icon = completeIconSet.find((x) => x.name === type)
        console.log(icon)
        return h(
            this.tag as string,
            {
                ...this.$attrs,
                'data-name': type,
                'data-type': type,
                class: {
                    'vue-feather': true,
                    [\`vue-feather--\${type}\`]: type,
                    [\`vue-feather--\${animation}\`]: animation,
                    [\`vue-feather--\${animationSpeed}\`]: animationSpeed,
                },
                style: isRemSize
                    ? {
                          height: size,
                          width: size,
                      }
                    : undefined,
            },
            [
                h(
                    'svg',
                    // XXX: The \`width\` and \`height\` attributes do not support the \`rem\` unit in Safari (#13).
                    {
                        fill: this.fill,
                        height: isRemSize ? undefined : size,
                        'stroke-linecap': this.strokeLinecap,
                        'stroke-linejoin': this.strokeLinejoin,
                        'stroke-width': this.strokeWidth,
                        width: isRemSize ? undefined : size,
                        class: ['vue-feather__content'],
                        innerHTML: icon.data,
                    }
                ),
            ]
        )
    },
})
<\/script>

<style lang="scss">
@keyframes vue-feather--spin {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
.vue-feather {
    display: inline-block;
    overflow: hidden;
    &--spin {
        animation: vue-feather--spin 2s linear infinite;
    }
    &--pulse {
        animation: vue-feather--spin 2s infinite steps(8);
    }
    &--slow {
        animation-duration: 3s;
    }
    &--fast {
        animation-duration: 1s;
    }
    &__content {
        display: block;
        height: inherit;
        width: inherit;
    }
}
<\/style>

        `)
        return {
            showReact,
            reactJsCode,
            vueJsCode,
            Example1Info: flags.example1,
        }
    },
})
</script>
