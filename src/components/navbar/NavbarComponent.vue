<template>
    <nav>
        <ul>
            <li v-if="!isLoggedIn"> <router-link to="/">HOME</router-link> </li>
            <li v-else> <router-link :to=" getRole === 'admin' ? '/adminDash' : '/userDash'">Dashboard</router-link> </li>
            <li> <router-link to="/aboutus">ABOUT US</router-link> </li>
            <li> <router-link to="/specialities">SPECIALITIES</router-link> </li>
            <li v-if="getRole !== 'admin'"> <router-link to="/patient">FOR PATIENTS</router-link> </li>
            <li> <router-link to="/contactus">CONTACT US</router-link> </li>
        </ul>
    </nav>
</template>

<script>
export default {
    computed: {
      isLoggedIn(){
        return this.$store.getters.isAuth;
      },
      getRole(){
        return this.$store.getters.getRole;
      }
    }
}
</script>

<style scoped>
nav {
    /* width: 100%; */
    /* margin: 0.5rem; */
    padding: 0.5rem;
    height: 3rem;
    /* display: flex; */
    background-color: rgb(255, 255, 255);
    justify-content:space-evenly;
    position: sticky;
    top: 0;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.26);
    /* align-items: center; */
}

a {
  text-decoration: none;
  color: #4a7729;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #4a7729;
}

/* nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
} */

ul {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>