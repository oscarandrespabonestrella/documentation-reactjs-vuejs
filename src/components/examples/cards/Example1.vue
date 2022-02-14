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

    setup(props) {},
})
</script>
