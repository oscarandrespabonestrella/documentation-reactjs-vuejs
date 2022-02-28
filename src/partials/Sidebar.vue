<template>
    <div>
        <!-- Sidebar backdrop (mobile only) -->
        <div
            class="fixed inset-0 bg-[gray-900] bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
            :class="
                sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            "
            aria-hidden="true"
        ></div>

        <!-- Sidebar -->
        <div
            id="sidebar"
            ref="sidebar"
            class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#4f5588] transition-all duration-200 ease-in-out"
            :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
        >
            <!-- Sidebar header -->
            <div class="flex justify-between mb-10 pr-3 p-4">
                <!-- Close button -->
                <button
                    ref="trigger"
                    class="lg:hidden text-gray-500 hover:text-gray-400"
                    @click.stop="$emit('close-sidebar')"
                    aria-controls="sidebar"
                    :aria-expanded="sidebarOpen"
                >
                    <span class="sr-only">Close sidebar</span>
                    <svg
                        class="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
                        />
                    </svg>
                </button>
                <!-- Logo -->
                <router-link class="block" to="/">
                    <img src="../assets/logo.svg" alt="" />
                </router-link>

                <Menu as="div" class="relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="border-0 inline-flex justify-center w-full rounded-md  px-2 py bg-transparent text-sm font-medium text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-transparent"
                        >
                            Reactjs/ Vuejs
                            <svg
                                class="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </MenuButton>
                    </div>

                    <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                    >
                        <MenuItems
                            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <a
                                        href="#"
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'flex items-center px-4 py-2 text-sm',
                                        ]"
                                    >
                                        <img
                                            src="../assets/angular_logo.svg"
                                            alt=""
                                            class="h-7 mr-3"
                                        />
                                        Angular</a
                                    >
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a
                                        href="#"
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'flex items-center px-4 py-2 text-sm',
                                        ]"
                                    >
                                        <img
                                            src="../assets/BootStraplogo.svg"
                                            alt=""
                                            class="w-7 mr-3"
                                        />
                                        Bootstrap</a
                                    >
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>

            <!-- Links -->
            <div class="space-y-8 overflow-y-auto">
                <!-- Pages group -->
                <div>
                    <ul class="mt-3">
                        <MenuItemLocal path="/getting-started">
                            Getting Started
                        </MenuItemLocal>
                        <DropwdownFilter
                            v-slot="parentLink"
                            :activeCondition="
                                currentRoute.fullPath.includes('components')
                            "
                        >
                            <a
                                class="block px-3 text-gray-200 hover:text-white truncate transition duration-150"
                                :class="
                                    currentRoute.fullPath.includes(
                                        'components'
                                    ) && 'hover:text-gray-200'
                                "
                                href="#0"
                                @click.prevent="
                                    sidebarExpanded
                                        ? parentLink.handleClick()
                                        : (sidebarExpanded = true)
                                "
                            >
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <span
                                            class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                                            >Components
                                        </span>
                                    </div>
                                    <!-- Icon -->
                                    <div class="flex shrink-0 ml-2">
                                        <svg
                                            class="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400"
                                            :class="
                                                parentLink.expanded &&
                                                'transform rotate-180'
                                            "
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <div
                                class="bg-[#3e436b] px-3 lg:hidden lg:sidebar-expanded:block 2xl:block mt-2"
                            >
                                <ul
                                    class="inline-block list-components sidebar-filtered-list my-4 w-full"
                                    :class="!parentLink.expanded && 'hidden'"
                                >
                                    <label
                                        class="relative text-gray-400 focus-within:text-gray-600 block mb-4"
                                    >
                                        <svg
                                            class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-1"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 30 30"
                                        >
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                            />
                                        </svg>

                                        <input
                                            v-model="searchQuery"
                                            type="text"
                                            name="search"
                                            placeholder="Search..."
                                            class="form-input border border-gray-900 py-2 pl-2 pr-10 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block focus:outline-none"
                                        />
                                    </label>
                                    <li
                                        class="inline-block my-1 mx-1"
                                        v-for="(
                                            item, index
                                        ) in filteredComponents"
                                        :key="index + '-menu-second'"
                                        :class="{
                                            active: currentRoute.fullPath.includes(
                                                item.path
                                            ),
                                        }"
                                    >
                                        <router-link :to="item.path">{{
                                            item.title
                                        }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </DropwdownFilter>
                        <MenuItemLocal path="/accessibility" >
                            Accessibility
                        </MenuItemLocal>
                        <MenuItemLocal path="/changelog"> Changelog </MenuItemLocal>
                        <MenuItemLocal :mail="true" path="itecmcc@europarl.europa.eu"> Contact </MenuItemLocal>
                    </ul>
                </div>
            </div>

            <!-- Expand / collapse button -->
            <div
                class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto"
            >
                <div class="px-3 py-2">
                    <button @click.prevent="sidebarExpanded = !sidebarExpanded">
                        <span class="sr-only">Expand / collapse sidebar</span>
                        <svg
                            class="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                            viewBox="0 0 24 24"
                        >
                            <path
                                class="text-gray-400"
                                d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                            />
                            <path class="text-gray-600" d="M3 23H1V1h2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    ref,
    onMounted,
    onUnmounted,
    watch,
    defineComponent,
    computed,
} from 'vue'
import { useRouter } from 'vue-router'
import MenuItemLocal from './sub-partials/SIngle-menu-item.vue'
import DropwdownFilter from './sub-partials/DropdownFilter.vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export default defineComponent({
    name: 'sidebar-partial',
    props: ['sidebarOpen'],
    components: {
        MenuItemLocal,
        DropwdownFilter,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
    },
    setup(props, { emit }) {
        const components = [
            {
                title: 'Grid and Alingments',
                path: '/grid',
            },
            {
                title: 'Buttons',
                path: '/buttons',
            },
            {
                title: 'Navs & Tabs',
                path: '/navs',
            },
            {
                title: 'Breadcrumbs',
                path: '/breadcrumbs',
            },
            {
                title: 'Pagination',
                path: '/pagination',
            },
            {
                title: 'Cards',
                path: '/card',
            },
            {
                title: 'Collapse',
                path: '/collapse',
            },
            {
                title: 'Modal',
                path: '/modal',
            },
            {
                title: 'Table',
                path: '/table',
            },
            {
                title: 'Forms',
                path: '/form',
            },
            {
                title: 'Datepicker',
                path: '/datepicker',
            },
            {
                title: 'Flags',
                path: '/flags',
            },
            {
                title: 'Popover & Tooltip',
                path: '/popover',
            },
            {
                title: 'Notification',
                path: '/Notification',
            },

            {
                title: 'Progress',
                path: '/progress',
            },
        ]

        let searchQuery = ref('')
        const filteredComponents = computed(() => {
            return components.filter((component) =>
                component.title
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase().trim())
            )
        })

        const trigger = ref<any>(null)
        const sidebar = ref<any>(null)
        const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
        const sidebarExpanded = ref<boolean>(
            storedSidebarExpanded === null
                ? false
                : storedSidebarExpanded === 'true'
        )
        const route = useRouter()
        const currentRoute = route.currentRoute.value

        const clickHandler = ({ target }) => {
            if (!sidebar.value || !trigger.value) return
            if (
                !props.sidebarOpen ||
                sidebar.value.contains(target) ||
                trigger.value.contains(target)
            )
                return
            emit('close-sidebar')
        }
        // close if the esc key is pressed
        const keyHandler = ({ keyCode }) => {
            if (!props.sidebarOpen || keyCode !== 27) return
            emit('close-sidebar')
        }
        onMounted(() => {
            document.addEventListener('click', clickHandler)
            document.addEventListener('keydown', keyHandler)
        })
        onUnmounted(() => {
            document.removeEventListener('click', clickHandler)
            document.removeEventListener('keydown', keyHandler)
        })
        watch(sidebarExpanded, () => {
            localStorage.setItem(
                'sidebar-expanded',
                String(sidebarExpanded.value)
            )
            if (sidebarExpanded.value) {
                document
                    .querySelector('body')
                    ?.classList.add('sidebar-expanded')
            } else {
                document
                    .querySelector('body')
                    ?.classList.remove('sidebar-expanded')
            }
        })

        return {
            trigger,
            sidebar,
            sidebarExpanded,
            currentRoute,
            searchQuery,
            filteredComponents,
        }
    },
})
</script>
