<template></template>
<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { EpCalendar } from 'ep-feather-icons/build/Ep-calendar.icon'
import { epIcons } from 'ep-feather-icons'

export default defineComponent({
    name: 'EpIcon',
    props: ['name', 'color', 'stroke', 'size'],
    setup(props) {
        let svgIcon = ''

        const svgElementFromString = (
            svgContent: string | undefined,
            iconName: string
        ): SVGAElement => {
            const div = this.document.createElement('DIV')
            div.innerHTML = svgContent
            // eslint-disable-next-line prefer-const
            let svg = div.querySelector('svg')
            svg.classList.add(`ep-icon`)
            if (iconName === 'loading') svg.classList.add(`anticon-spin`)

            return (
                svg ||
                this.document.createElementNS(
                    'http://www.w3.org/2000/svg',
                    'path'
                )
            )
        }

        const initIcon = (iconName: epIcons | string) => {
            if (svgIcon) {
                this.elem.nativeElement.removeChild(svgIcon)
            }
            const svgData = this.iconRegistry.getIcon(iconName)
            if (svgData) {
                svgIcon = this.svgElementFromString(svgData, iconName)
                this.elem.nativeElement.classList.add(`anticon-${iconName}`)
                this.elem.nativeElement.appendChild(svgIcon)
            }
        }

        return {}
    },
})
</script>
