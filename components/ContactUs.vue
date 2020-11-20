<template>
  <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with me?</h2>
        <p class="description">Your project is very important to me.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <button class="btn btn-primary btn-round btn-lg contact-btn"
                >Send Message</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {  FormGroupInput } from '@/components';
export default {
    components: {
        [FormGroupInput.name]: FormGroupInput
    },
    data() {
        return {
            form: {
                firstName: '',
                email: '',
                message: ''
            }
        };
    }
  }
</script>

<style>

</style>