<template>
    <router-link :to="path" custom v-slot="{ href, navigate, isExactActive }">
        <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
            :class="isExactActive"
        >
            <a
                class="block text-gray-400 hover:text-white truncate transition duration-150"
                :class="isExactActive && 'hover:text-white'"
                :href="href"
                @click="navigate"
            >
                <div class="flex items-center">
                    <span
                        class="text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                    >
                        <slot></slot>
                    </span>
                </div>
            </a>
        </li>
    </router-link>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
    name: 'menu-item-local',
    props: ['path', 'title'],
    components: {},
    setup() {},
})
</script>
