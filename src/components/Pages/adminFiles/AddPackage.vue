<template>
    <h2>Add package</h2>
    <section id="spacing">
        <form @submit.prevent="AddTreatment">
            <div class="form-control">
                <label for="location">Location</label>
                <input type="text" ref="location">
            </div>
            <div class="form-control">
                <label for="treatmentType">Treatment Type</label>
                <input type="text" ref="treatmentType">
            </div>
            <base-button>Add</base-button>
        </form>
    </section>
</template>

<script>
export default {
    methods: {
         AddTreatment(){
            const location = this.$refs.location.value;
            const treatmentType = this.$refs.treatmentType.value;
            const addTreatment = {
                location,
                treatmentType,
                state: true
            }
            console.log(addTreatment);
            try {
                this.$store.dispatch('admin/addTreatment', addTreatment);
                alert('Package added successfully.')
                this.$refs['location'].value = '';
                this.$refs['treatmentType'].value = '';
            }
            catch(error){
                console.log("error in addpackage", error);
            }
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
}
form {
  margin: 1rem;
  padding: 1rem;
}
.form-control {
  margin: 0.75rem 0;
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
</style>