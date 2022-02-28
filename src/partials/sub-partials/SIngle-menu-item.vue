<template>
    <li
        v-if="mail"
        class="px-3 py-2 rounded-sm mb-0.5 last:mb-0"        
    >
        <a
            class="block text-gray-400 hover:text-white truncate transition duration-150"
            :href="`mailto:${path}`"
            target="_blank"
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
    
    <router-link v-else :to="path" custom v-slot="{ href, navigate, isActive, isExactActive }">
        <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
            :class="isExactActive"
        >
            <a
                class="block text-gray-400 hover:text-white truncate transition duration-150"
                :class="isActive && 'text-white'"
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
    props: ['path', 'title', "active", "mail"],
    components: {},
    setup() {},
})
</script>
