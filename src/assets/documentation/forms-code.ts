import {IExampleRecord } from "./models";

export const forms: IExampleRecord = {
    example1: {
        title: "Standard input",
        description: "Textual form controls—like <input>s, <select>s, and <textarea>s—are styled with the .form-control class. Included are styles for general appearance, focus state, sizing, and more.",
        reactCode: `
import React, { Component } from 'react';

interface IProps {}
interface IState {
  [key: string]: any;
  email: string;
  password: string;
  checked: boolean;
  radioInput: string;
  inlineInput: Array<any>;
}

class Forms extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
      radioInput: '',
      inlineInput: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (target.name !== 'inlineInput') {      
      this.setState({
        [name]: value,
      });
    } else {      
      if (target.checked) {
        this.setState({
          inlineInput: [...this.state.inlineInput, target.value],
        });
      } else {
        const index = this.state.inlineInput.indexOf(target.value);
        this.state.inlineInput.splice(index, 1);
        this.setState({
          inlineInput: this.state.inlineInput,
        });
      }
    }   
  }

  render() {
    return (
      <form>
        <h4 className="mb-3">Standard inputs</h4>
        <div className="form-group mb-3">
          <label className="form-label" for="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email address"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mb-3">
          <label className="form-label" for="exampleInputPassword1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Type your password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Readonly</label>
          <input
            className="form-control"
            type="text"
            placeholder="Readonly input here…"
            readonly
          />
        </div>
        <h4>Checkboxes and radios</h4>
        <p>
          Checkbox and radio inputs are improved in Bootstrap 5 with the help of
          a<code>.form-check</code> className (instead of
          <code>form-group mb-3</code> className)
        </p>
        <div className="form-group mb-3 form-check">
          <input
            type="checkbox"
            name="checked"
            className="form-check-input"
            id="exampleCheck1"
            checked={this.state.checked}
            onChange={this.handleInputChange}
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="row form-group mb-3">
          <div className="col-3">Radio inputs</div>
          <div className="col-9">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radioInput"
                id="exampleRadios1"
                value="option1"
                checked={this.state.radioInput === 'option1'}
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" for="exampleRadios1">
                Default radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radioInput"
                id="exampleRadios2"
                value="option2"
                checked={this.state.radioInput === 'option2'}
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" for="exampleRadios2">
                Second default radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radioInput"
                id="exampleRadios3"
                value="option3"
                checked={this.state.radioInput === 'option3'}
                onChange={this.handleInputChange}
                disabled
              />
              <label className="form-check-label" for="exampleRadios3">
                Disabled radio
              </label>
            </div>
          </div>
        </div>
        <div className="row form-group mb-3">
          <div className="col-3">Inline inputs</div>
          <div className="col-9">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineInput"
                id="inlineCheckbox1"
                value="option1"
                checked={this.state.inlineInput.find((x) => x === 'option1')}
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" for="inlineCheckbox1">
                1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineInput"
                id="inlineCheckbox2"
                value="option2"
                checked={this.state.inlineInput.find((x) => x === 'option2')}
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" for="inlineCheckbox2">
                2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineInput"
                id="inlineCheckbox3"
                value="option3"
                checked={this.state.inlineInput.find((x) => x === 'option3')}
                onChange={this.handleInputChange}
                disabled
              />
              <label className="form-check-label" for="inlineCheckbox3">
                3 (disabled)
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {this.state.inlineInput}
      </form>
    );
  }
}

export default Forms;


        `,
        vueCode: `
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
<\/script>



       
        `
    },
    example2: {
        title: "Input groups",
        description: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place <label>s outside the input group.",
        reactCode: `
import React, { useState } from 'react';

const FormGroup = () => {  
  return (
    <form>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"
                        >@example.com</span
                    >
                </div>
            </div>
            <label for="basic-url">Your vanity URL</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3"
                        >https://example.com/users/</span
                    >
                </div>
                <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">With textarea</span>
                </div>
                <textarea
                    class="form-control"
                    aria-label="With textarea"
                ></textarea>
            </div>
        </div>
    </form>
  );
};

export default FormGroup;
        `,
        vueCode: `
<template>
    <form>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"
                        >@example.com</span
                    >
                </div>
            </div>
            <label for="basic-url">Your vanity URL</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3"
                        >https://example.com/users/</span
                    >
                </div>
                <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">With textarea</span>
                </div>
                <textarea
                    class="form-control"
                    aria-label="With textarea"
                ></textarea>
            </div>
        </div>
    </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example2',

    setup(props) {},
})
<\/script>

  
        `
    },
    example3: {
        title: "Validation styles",
        description: "Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.",
        reactCode: `
import React, { useState } from 'react';

const FormGroup = () => {  
  return (
     <form>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationServer01">First name</label>
                <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer01"
                    placeholder="First name"
                    value="Mark"
                    required
                />
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationServer02">Last name</label>
                <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer02"
                    placeholder="Last name"
                    value="Otto"
                    required
                />
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationServerUsername">Username</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend3"
                            >@</span
                        >
                    </div>
                    <input
                        type="text"
                        class="form-control is-invalid"
                        id="validationServerUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend3"
                        required
                    />
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-6 mb-3">
                <label for="validationServer03">City</label>
                <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer03"
                    placeholder="City"
                    required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-3 mb-3">
                <label for="validationServer04">State</label>
                <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer04"
                    placeholder="State"
                    required
                />
                <div class="invalid-feedback">
                    Please provide a valid state.
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <label for="validationServer05">Zip</label>
                <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer05"
                    placeholder="Zip"
                    required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input
                    class="form-check-input is-invalid"
                    type="checkbox"
                    value
                    id="invalidCheck3"
                    required
                />
                <label class="form-check-label" for="invalidCheck3"
                    >Agree to terms and conditions</label
                >
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
  );
};

export default FormGroup;
        `,
        vueCode: `
<template>
    <form>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationServer01">First name</label>
                <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer01"
                    placeholder="First name"
                    value="Mark"
                    required
                />
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationServer02">Last name</label>
                <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer02"
                    placeholder="Last name"
                    value="Otto"
                    required
                />
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
                <label for="validationServerUsername">Username</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend3"
                            >@</span
                        >
                    </div>
                    <input
                        type="text"
                        class="form-control is-invalid"
                        id="validationServerUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend3"
                        required
                    />
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-6 mb-3">
                <label for="validationServer03">City</label>
                <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer03"
                    placeholder="City"
                    required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-3 mb-3">
                <label for="validationServer04">State</label>
                <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer04"
                    placeholder="State"
                    required
                />
                <div class="invalid-feedback">
                    Please provide a valid state.
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <label for="validationServer05">Zip</label>
                <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer05"
                    placeholder="Zip"
                    required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input
                    class="form-check-input is-invalid"
                    type="checkbox"
                    value
                    id="invalidCheck3"
                    required
                />
                <label class="form-check-label" for="invalidCheck3"
                    >Agree to terms and conditions</label
                >
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Example3',

    setup(props) {},
})
<\/script>


  
        `
    },
    
}