<template>
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
        :class="!isFormValid && qualification === '' ? 'invalid' : ''"
      >
        <label for="qualification">Qualification</label>
        <input
          type="qualification"
          id="qualification"
          v-model.trim="qualification"
        />
        <p v-if="!isFormValid && qualification === ''">must not be empty.</p>
      </div>
      <div
        class="form-control"
        :class="!isFormValid && specialization === '' ? 'invalid' : ''"
      >
        <label for="specialization">Specialization</label>
        <input
          type="specialization"
          id="specialization"
          v-model.trim="specialization"
        />
        <p v-if="!isFormValid && specialization === ''">must not be empty.</p>
      </div>
      <div class="form-control">
        <label for="achievements">Achievements</label>
        <input
          type="achievements"
          id="achievements"
          v-model.trim="achievements"
        />
        <!-- <p v-if=" !isFormValid && achievements === '' "> must not be empty.</p>:class="!isFormValid && achievements === '' ? 'invalid' : ''" -->
      </div>
      <div class="form-control">
        <label for="experience">Experience</label>
        <input type="experience" id="experience" v-model.trim="experience" />
        <!-- <p v-if=" !isFormValid && experience === '' "> must not be empty.</p>:class="!isFormValid && experience === '' ? 'invalid' : ''" -->
      </div>
      <div
        class="form-control"
        :class="!isFormValid && location === '' ? 'invalid' : ''"
      >
        <label for="location">Location</label>
        <input type="location" id="location" v-model.trim="location" />
        <p v-if="!isFormValid && location === ''">must not be empty.</p>
      </div>
      <div
        class="form-control"
        :class="!isFormValid && description === '' ? 'invalid' : ''"
      >
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="2"
          rows="3"
          v-model.trim="description"
        ></textarea>
        <!-- <input type="description" id="description" v-model.trim="description"> -->
        <p v-if="!isFormValid && description === ''">must not be empty.</p>
      </div>
      <base-button>Add Doctor</base-button>
    </form>
    <!-- <p>New User? Click here for <router-link to="/signup">signup</router-link></p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,
      name: "",
      qualification: "",
      specialization: "",
      achievements: "",
      experience: "",
      location: "",
      description: "",
      error: null,
      isLoading: false,
      status: true,
      role: "Dr. ",
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
      if (
        !(
          this.name &&
          this.qualification &&
          this.specialization &&
          this.location &&
          this.description
        )
      ) {
        this.isFormValid = false;
        console.log("form not valid");
        return;
      }
      // this.isLoading = true;
      console.log(
        this.name &&
          this.qualification &&
          this.specialization &&
          this.location &&
          this.description
      );
      try {
        // if(this.email==="admin@shahosp.com"){
        //     this.role = 'admin';
        // }else{
        //     this.role = 'user';
        // }
        const doctorObj = {
          name: this.role + this.name,
          qualification: this.qualification,
          specialization: this.specialization,
          achievements: this.achievements,
          experience: this.experience,
          location: this.location,
          description: this.description,
          status: this.status,
        };
        await this.$store.dispatch("admin/registerDoctor", doctorObj);

        // if (this.role === "admin") {
        //   console.log("route to Admin");
        //   this.$router.replace("/home");
        // } else {
        //   console.log("route to user");
        //   this.$router.replace("/home");
        // }
        // this.$router.replace('/');
        // const redirectUrl = '/' + ()
        alert('Registered Successfully');
        this.resetForm();
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    resetForm() {
      this.name= "";
      this.qualification= "";
      this.specialization= "";
      this.achievements= "";
      this.experience= "";
      this.location= "";
      this.description= "";
    }
  },
};
</script>


<style scoped>
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
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
input:focus,
textarea:focus {
  border-color: #4a7729;
  background-color: #faf6ff;
  outline: none;
  border-radius: 10px;
}

.invalid label {
  color: red;
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>