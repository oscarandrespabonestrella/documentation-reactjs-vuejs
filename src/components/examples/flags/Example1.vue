<template>
    <div class="inline-flex flex-wrap justify-center">
        <div
            v-for="flag in flags"
            :key="flag"
            class="inline-flex mb-3 mr-3 border-gray-50 border-solid border px-3 flex-column"
        >
            <EpIcon :type="flag" :size="68"></EpIcon>
            <p class="text-center">{{ flag }}</p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import EpIcon from '../../EPIcon.vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',
    components: { EpIcon },

    setup(props) {
        const flags = ref<Array<string>>([
            'flag_eu',
            'flag_al',
            'flag_at',
            'flag_be',
            'flag_bg',
            'flag_hr',
            'flag_cy',
            'flag_cz',
            'flag_dk',
            'flag_ee',
            'flag_fi',
            'flag_fr',
            'flag_de',
            'flag_gr',
            'flag_hu',
            'flag_ie',
            'flag_is',
            'flag_it',
            'flag_lv',
            'flag_lt',
            'flag_lu',
            'flag_me',
            'flag_mk',
            'flag_mt',
            'flag_nl',
            'flag_pl',
            'flag_pt',
            'flag_ro',
            'flag_rs',
            'flag_sk',
            'flag_si',
            'flag_es',
            'flag_se',
            'flag_tr',
            'flag_uk',
        ])
        const selectedFlag = ref<string>('flag_eu')
        return {
            flags,
            selectedFlag,
        }
    },
})
</script>
