<template>
  <section class="spacing">
    <base-card>
      <!-- <h2>Preview</h2> -->
        <h1>Appointment Booked</h1>
        <h5>( <span> {{getaDay }} {{ appointmentTime }}</span> )</h5>
      <div>
        <h3>Doctor Details</h3>
        
        <div class="alignStraight">
          <div>
            <p>Doctor:</p>
            <p>{{dName}}</p>
          </div>
          <div>
            <p>Speciality:</p>
            <p>{{dSpeciality}}</p>
          </div>
          <div>
            <p>Location:</p>
            <p>{{dLocation}}</p>
          </div>
        </div>
      </div>
      <div>
        <h3>User Details</h3>
        <div class="alignStraight">
          <div>
            <p>Name:</p>
            <p>{{pName}}</p>
          </div>
          <div>
            <p>Email:</p>
            <p>{{pEmail}}</p>
          </div>
          <div>
            <p>Phone:</p>
            <p>{{pPhone}}</p>
          </div>
        </div>
      </div>
      <br>
      <!-- <base-button>Book</base-button> -->
    </base-card>
      

  </section>
</template>

<script>
export default {
    data() {
        return {
            appointmentObj: [],
            appointmentId: '',
            appointmentTime: '',
            dName: '',
            dSpeciality: '',
            dLocation: '',
            pName: '',
            pEmail: '',
            pPhone: '',
            weakdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            
        }
    },
    computed:{
        getaDay(){
            return new Date().toISOString().slice(0, 10)+' '+this.weakdays[new Date().getDay()];
        }
    },
    async created() {
        this.appointmentId = this.$route.params.id;
        console.log("Id appoint",this.appointmentId);
        await this.$store.dispatch('admin/getAppointmentList', this.appointmentId);
        this.appointmentObj = await this.$store.getters['admin/getCurrentBooKObj'];
        // this.appointmentObj = this.appointmentObj.map( obj => obj);
        this.appointmentTime = this.appointmentObj[0]['appointmentTime'];
        this.dName= this.appointmentObj[0].docsData.name,
            this.dSpeciality= this.appointmentObj[0].docsData.specialization,
            this.dLocation= this.appointmentObj[0].docsData.location,
            this.pName= this.appointmentObj[0].userData[0].name,
            this.pEmail= this.appointmentObj[0].userData[0].email,
            this.pPhone= this.appointmentObj[0].userData[0].phone
        console.log('appointObj', this.appointmentObj[0]['appointmentTime'],  this.appointmentObj[0].docsData.name,  this.appointmentObj[0].userData[0].phone);

        setTimeout(()=>{
           this.$router.push('/thanksPage');
        }, 8000);
    }
}
</script>

<style scoped>
section {
    text-align: center;
}
.alignStraight {
    display: flex;
    justify-content: space-around;
    text-align: left;
}
.alignStraight p:first-child {
    text-align: left;
}
.alignStraight p:last-child {
    font-weight: bold;
}
h3 {
    padding: 1rem;
}
.spacing {
  margin: 3em;
}
</style>