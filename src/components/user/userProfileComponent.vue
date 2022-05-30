<template>
    <base-button v-if="!this.userData.length" @click="loadUser">Reload</base-button>
  <section v-else v-for="obj in userData" :key="obj.id">
    <h1>USER PROFILE</h1>
    <img
      src="https://media.istockphoto.com/vectors/user-icon-flat-style-isolated-on-white-background-vector-id1084418050?k=20&m=1084418050&s=612x612&w=0&h=pm3Ov7GL8rnKKqe98FEfoya6A6UK-z4Iv60LPbj38GE="
      alt="user profile"
    />
    <div>
        <h1>Name: {{obj.name}}</h1> 
    </div>
    <div>
        <h1>Email: {{obj.email}}</h1>
    </div>
    <div>
        <h1>Phone: {{obj.phone}}</h1>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            userData: []
        }
    },
    methods: {
        async loadUser() {
            this.userData = await this.$store.getters['user/getRegisteredUser'];
            console.log('user reload', this.userData);
        }
    },
    async created() {
        await this.$store.dispatch('user/getUserData', localStorage.getItem('email'));
         this.userData = await this.$store.getters['user/getRegisteredUser'];
        console.log('user Data', this.userData)

    }
}
</script>

<style scoped>
section {
    width: 100%;
    text-align: center;
}
img {
    width: 31%;
}
</style>