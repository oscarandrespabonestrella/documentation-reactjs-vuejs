<template>
    <div>
        <div class="grid mx-2 mb-3">
            <h1>Getting started</h1>
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                    <p>
                        This website contains multiple examples build usign the Mcc Boostrap skin, in order to have the boostrap component working on ReactJs and VueJs, without installing extra libraries.
                        You will find below some information to get started with the toolkit. 
                    </p>
                </div>
                <div class="col-span-1">
                    <a class="btn btn-primary w-full" href="/download/MCCBootstrapVue-React.zip" download>
                        <span class="mr-2">Download File</span>
                        <EpIcon type="download" :size="17"></EpIcon>
                    </a>
                </div>
            </div>

            <h3>CSS</h3>
            <p class="my-3">
                Our main mcc.css stylesheet also includes all Bootstrap styles. We defined some SCSS variables before compiling the Bootstrap source files. The material-icons.css stylesheet is the 
                first to be loaded. Just load our main stylesheet before your my-custom.css where you will add your own styles.
            </p>
            <Prism language="html">
                {{`
<link rel="stylesheet" href="css/material-icons.css" />
<link rel="stylesheet" href="css/mcc.css" />
<link rel="stylesheet" href="css/my-custom.css" />                
                `}}
            </Prism>

            <h3 class="my-3">Javascript</h3>
            <p class="my-3">
                Ou have to import the respective dependencies: Popper.js, Bootstrap.js, and the respective framework that you are planing to use. Below, you will find the required javascript libraries to load. You may want to add
                also some additional libraries, as flatpickr.js. 
            </p>
            <Prism language="javascript">
                {{`
npm i --save @popperjs/core 
npm i --save bootstrap 
npm i --save faltpickr 
                `}}
            </Prism>



        </div>
      
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import EpIcon from "../components/EPIcon.vue"
import Prism from 'vue-prism-component'

export default defineComponent({
    name: 'buttons-page',
    components: {
        EpIcon,
        Prism
    },
    setup(props) {
        

        
        return {
        
        }
    },
})
</script>
