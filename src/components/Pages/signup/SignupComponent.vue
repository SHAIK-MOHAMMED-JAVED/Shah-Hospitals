<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Authenticating...">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
    <h2>SIGN UP</h2>
      <div>
        <form @submit.enter.prevent="submitForm">
          <div
            class="form-control"
            :class="!isFormValid && name === '' ? 'invalid' : ''"
          >
            <label for="name">Name</label>
            <input type="name" id="name" v-model.trim="name" />
            <p v-if="!isFormValid && name === ''">must not be empty.</p>
          </div>
          <div
            class="form-control"
            :class="!isFormValid && email === '' ? 'invalid' : ''"
          >
            <label for="email">Email</label>
            <input type="email" id="email" v-model.trim="email" />
            <p v-if="!isFormValid && email === ''">must not be empty.</p>
          </div>
          <div
            class="form-control"
            :class="!isFormValid && password === '' ? 'invalid' : ''"
          >
            <label for="password">Password</label>
            <input type="password" id="password" v-model.trim="password" />
            <p v-if="!isFormValid && password === ''">must not be empty.</p>
          </div>
          
          <div
            class="form-control"
            :class="!isFormValid && phone === '' ? 'invalid' : ''"
          >
            <label for="phone">Phone Number</label>
            <input type="phone" id="phone" v-model.trim="phone" />
            <p v-if="!isFormValid && phone === ''">must not be empty.</p>
          </div>
          <base-button>Signup</base-button>
        </form>
        <p>Already a user? Click here for <router-link to="/login">Login</router-link></p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,
      email: "",
      password: "",
      name: '',
      phone: '',
      error: null,
      isLoading: false,
      role: "user",
    };
  },
  computed: {
    // isValid() {
    //     return this.email && this.password
    // }
  },

  methods: {
    async submitForm() {
      this.isFormValid = true;
      if (!(this.email && this.password && this.name && this.phone)) {
        this.isFormValid = false;
        console.log("form not valid");
        return;
      }
      this.isLoading = true;
      console.log(this.email, this.password, this.role);
      try {
       await this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
          name: this.name,
          phone: this.phone,
          role: this.role,
        });
        alert('Registered Successfully');
        if (this.role === "admin") {
          this.$router.replace("/");
        } else {
          this.$router.replace("/login");
        }
        // this.$router.replace('/');
        // const redirectUrl = '/' + ()
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>


<style scoped>
h2 {
    text-align: center;
    color: #447a29;
}
form {
  margin: 1rem;
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
input:focus {
  border-color: #4a7729;
  background-color: #faf6ff;
  outline: none;
  border-radius: 10px;
}

.invalid label {
  color: red;
}
.invalid input {
  border: 1px solid red;
}
</style>