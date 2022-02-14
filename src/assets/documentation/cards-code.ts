import {IExampleRecord } from "./models";

export const cards: IExampleRecord = {
  example1: {
    title: "Card types",
    description: "Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.",
    reactCode: `
import React, { useState } from 'react';

const Cards = () => {
  return (
    <div class="row">
        <div class="col">
            <div class="card">
                <img
                    class="card-img-top"
                    src="../../../assets/carousel/carousel1.jpg"
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header">Featured</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Cards;

        `,
    vueCode: `
<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <img
                    class="card-img-top"
                    src="../../../assets/carousel/carousel1.jpg"
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header">Featured</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        
    },
})
<\/script>

       
        `
  },
  example2: {
    title: "Kitchen sink",
    description: "Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.",
    reactCode: `
import React, { useState } from 'react';

const Card = () => {
 
  return (
     <div class="card" style="width: 18rem">
        <img
            src="../../../assets/carousel/carousel1.jpg"
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
            </p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
  );
};

export default Card;
        `,
    vueCode: `
<template>
     <div class="card" style="width: 18rem">
        <img
            src="../../../assets/carousel/carousel1.jpg"
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
            </p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',

    setup(props) {        
        return {            
        }
    },
})
<\/script>
  
        `
  },
  example3: {
    title: "Navigation",
    description: "dd some navigation to a card’s header (or block) with Bootstrap’s nav components.",
    reactCode: `
import React, { useState } from 'react';

const Card = () => {
 
  return (
      <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="true" href="#"
                        >Active</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                        >Disabled</a
                    >
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
};

export default Card;
        `,
    vueCode: `
<template>
      <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="true" href="#"
                        >Active</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                        >Disabled</a
                    >
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',

    setup(props) {        
        return {            
        }
    },
})
<\/script>
  
        `
    
  }
}