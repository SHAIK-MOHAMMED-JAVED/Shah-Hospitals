<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">
                    <div>
                        <img src="https://media1.thehungryjpeg.com/thumbs2/ori_3808931_5filwfdylcyw97qt00p0jyd8hwu9mlyxpm006hfp_monogram-sh-logo-design.jpg" alt="Shah-Hospitals-logo">
                    </div>
                    <span>SHAH-HOSPITALS</span>
                </router-link>
            </h1>
            <ul>
                <li v-if="!isLoggedIn">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-else>
                    <base-button @click="logout">Logout</base-button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch('logout');
            this.$router.replace('/home');
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuth;
        }
    }
}
</script>

<style scoped>
header {
    width: 100%;
    height: 5rem;
    background-color: rgb(233, 233, 233);
    display: flex;
    justify-content: center;
    align-items: center;
}

header a {
    text-decoration: none;
    color: #464646; ;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
    border: 1px solid #7b3b80;
    /* background-color: #7b3b80; */
    /* color: #7b3b80; */
}

h1 {
    margin: 0;
}

h1 a {
    color: #4a7729;
    margin: 0;
    display: flex;
    align-items: center;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
    border-color: transparent;
}

header nav {
    /* width: 90%; */
    /* margin: auto 2rem auto auto; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header a div {
    display: contents;  
}
header a div img {
    width: 6%;
    background-color: whitesmoke;
}

header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 0.5rem;
}

</style>