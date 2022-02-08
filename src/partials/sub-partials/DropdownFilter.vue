<template>
    <li
        class="py-2 rounded-sm mb-0.5 last:mb-0"
        :class="activeCondition && 'bg-gray-900'"
    >
        <slot :handleClick="handleClick" :expanded="expanded" />
    </li>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    name: 'SidebarLinkGroup',
    props: ['activeCondition'],
    setup(props: any) {
        const expanded = ref(props.activeCondition)
        const handleClick = () => {
            expanded.value = !expanded.value
        }
        return {
            expanded,
            handleClick,
        }
    },
}
</script>
