<template>
  <base-card>
    <h1 class="alignCenter">Find a Doctor</h1>
    <form @submit.prevent="searchDoctors">
      <div class="form-control">
        <label for="location">Select Location</label>
        <select
          name="location"
          id="location"
          @change="getTreatment"
          v-model="selectedLoc"
        >
          <option
            v-for="location in locations"
            :key="location"
            :value="location"
          >
            {{ location }}
          </option>
        </select>
      </div>
      <div class="form-control">
        <label for="treatment">Select treatment</label>
        <select name="treatment" id="treatment" v-model="selectedtreatment">
          <option
            v-for="treatment in treatments"
            :key="treatment.id"
            :value="treatment.treatment"
          >
            {{ treatment.treatment }}
          </option>
        </select>
      </div>
      <base-button mode="flat">Search</base-button>
    </form>
  </base-card>
  <hr />
  <section v-if="docsList.length">
    <h1 class="heading alignCenter">{{heading}}</h1>
    <ul>
      <li v-for="doctor in docsList" :key="doctor.id">
        <base-card>
          <ul class="docsSpacing">
            <li>
              <h2>{{ doctor.name }}</h2>
            </li>
            <li>Qualificaion: {{ doctor.qualification }}</li>
            <li>Specialization: {{ doctor.specialization }}</li>
            <li v-if="doctor.achievements">
              Achievements: {{ doctor.achievements }}
            </li>
            <li v-if="doctor.experience">
              Experience: {{ doctor.experience }} Years
            </li>
            <li>Location: {{ doctor.location }}</li>
            <li>
              <p>{{ doctor.description }}</p>
            </li>
          </ul>
          <div class="alignCenter">
          <base-button v-if="doctor.id === enableAppointment" @click="toggleAppointment(doctor)">Cancel</base-button>
          <base-button v-else @click="toggleAppointment(doctor)">Book Appiontment</base-button>
          </div>
          <base-card class="alignCenter timer" v-if="doctor.id === enableAppointment">
            <base-button class="timerSpacing" v-for="time of timings" :key="time" @click="bookAppointment(doctor, time)">{{time}}</base-button>
          </base-card>
        </base-card>
      </li>
    </ul>
  </section>
  <section class="alignCenter" v-if="isListAvailable">
    <base-card>
      <h5>No Doctors Available at the movement. Please try for other Location.</h5>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      locations: [],
      treatments: [],
      selectedLoc: "",
      selectedtreatment: "",
      heading: "",
      docsList: [],
      isListAvailable: false,
      enableAppointment: '',
      appointMentTime: '',
      timings: ["1:00 PM - 1:15 PM", "1:15 PM - 1:30 PM", "1:30 PM - 1:45 PM", "1:45 PM - 2:00 PM", "2:00 PM - 2:15 PM", "2:15 PM - 2:30 PM", "2:30 PM - 2:45 PM"]
    };
  },
  async created() {
    console.log("created");
    await this.$store.dispatch("admin/getTreatment");
    await this.getLocations();
  },
  methods: {
    getLocations() {
      this.locations = this.$store.getters["admin/getLocations"];
      this.locations.unshift("Select Location");
      this.treatments.push("Select Speciality");
      console.log(this.locations, "locks");
    },
    getTreatment() {
      console.log(this.selectedLoc);
      if (this.selectedLoc !== "Select Location") {
        this.$store.dispatch("admin/getTreatmentValues", this.selectedLoc);
        this.treatments = this.$store.getters["admin/getTreatments"];
      }
    },
    async searchDoctors() {
      // this.$router.push({path: '/patient/:location', params: {location: this.selectedLoc}});
      // console.log(this.$route.params);
      this.isListAvailable = false;
      console.log(this.selectedtreatment + " in " + this.selectedLoc);
      this.heading = this.selectedtreatment + " in " + this.selectedLoc;
      const obj = {
        specialization: this.selectedtreatment,
        location: this.selectedLoc,
      };
      await this.$store.dispatch("admin/getDoctorsList", obj);
      const resp = await this.$store.getters["admin/getDocsList"];
      console.log("Doctors", resp);
      this.docsList = resp;
      if(this.docsList.length <= 0){
        this.isListAvailable = true;
      }
    },
    async bookAppointment(docObj, time){
      console.log(docObj, time);
      // if( this.enableAppointment === docObj.id){
      //   this.enableAppointment = '';
      // }else{
      //   this.enableAppointment = docObj.id;
      // }
      const userMail = localStorage.getItem('email');
         await this.$store.dispatch('user/getUserData', userMail);
         const userData = await this.$store.getters['user/getRegisteredUser'];
        console.log('user Data', userData)
        const AppointmentObj = {
          docsData: docObj,
          userData,
          appointmentTime: time
        }
      console.log(AppointmentObj);
      await this.$store.dispatch('admin/setAppointment', AppointmentObj);
      const id = await this.$store.getters['admin/getCurrentBookId']
      this.$router.push({name:'Appointment', params: {id}});
      // this.$router.push('/thanksPage');
    },
    toggleAppointment(docObj){
       if( this.enableAppointment === docObj.id){
        this.enableAppointment = '';
      }else{
        this.enableAppointment = docObj.id;
      }
    }
  },
  computed: {
    //   searchDoctors() {
    //     // console.log(this.selectedtreatment + ' in ' + this.selectedLoc)
    //     return this.selectedtreatment + ' in ' + this.selectedLoc;
    // }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.docsSpacing li {
  padding: 0.3rem;
}
.heading {
  color: #4a7729;
  background-color: antiquewhite;
}
.alignCenter {
  text-align: center;

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
select {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}
/* .timer {
  display: flex;
  margin: 2em;
} */
.timerSpacing {
  /* justify-content: space-between; */
  margin: 5px;
}
</style>