<template>
    <form>
        <h4 class="mb-3">Standard inputs</h4>
        <div class="form-group mb-3">
            <label class="form-label" for="exampleInputEmail1"
                >Email address</label
            >
            <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
                v-model="testForm.email"
            />
            <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
            >
        </div>
        <div class="form-group mb-3">
            <label class="form-label" for="exampleInputPassword1"
                >Password</label
            >
            <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Type your password"
                v-model="testForm.password"
            />
        </div>
        <div class="form-group mb-3">
            <label class="form-label">Readonly</label>
            <input
                class="form-control"
                type="text"
                placeholder="Readonly input here…"
                readonly
            />
        </div>
        <h4>Checkboxes and radios</h4>
        <p>
            Checkbox and radio inputs are improved in Bootstrap 5 with the help
            of a
            <code>.form-check</code> class (instead of
            <code>form-group mb-3</code> class)
        </p>
        <div class="form-group mb-3 form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                v-model="testForm.checked"
            />
            <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
            >
        </div>
        <div class="row form-group mb-3">
            <div class="col-3">Radio inputs</div>
            <div class="col-9">
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        v-model="testForm.radioInput"
                        checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                        Default radio
                    </label>
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        v-model="testForm.radioInput"
                        value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                        Second default radio
                    </label>
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios3"
                        v-model="testForm.radioInput"
                        value="option3"
                        disabled
                    />
                    <label class="form-check-label" for="exampleRadios3">
                        Disabled radio
                    </label>
                </div>
            </div>
        </div>
        <div class="row form-group mb-3">
            <div class="col-3">Inline inputs</div>
            <div class="col-9">
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                        v-model="testForm.inlineInput"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                        >1</label
                    >
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                        v-model="testForm.inlineInput"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                        >2</label
                    >
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="option3"
                        v-model="testForm.inlineInput"
                        disabled
                    />
                    <label class="form-check-label" for="inlineCheckbox3"
                        >3 (disabled)</label
                    >
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example1',

    setup(props) {
        const testForm = ref({
            email: '',
            password: '',
            checked: false,
            radioInput: '',
            inlineInput: [],
        })
        return {
            testForm,
        }
    },
})
</script>
