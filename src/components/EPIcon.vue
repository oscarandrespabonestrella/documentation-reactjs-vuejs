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
                    throw new Error(`"${type}" is not an available icon type.`)
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
        return h(
            this.tag as string,
            {
                ...this.$attrs,
                'data-name': type,
                'data-type': type,
                class: {
                    'vue-feather': true,
                    [`vue-feather--${type}`]: type,
                    [`vue-feather--${animation}`]: animation,
                    [`vue-feather--${animationSpeed}`]: animationSpeed,
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
                    // XXX: The `width` and `height` attributes do not support the `rem` unit in Safari (#13).
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
</script>

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
</style>
