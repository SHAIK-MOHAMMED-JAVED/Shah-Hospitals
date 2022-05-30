<template>
    <div>
        <form @submit.enter.prevent="submitForm">
            <div class="form-control" :class="!isFormValid && email === '' ? 'invalid' : ''" >
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email">
                <p v-if=" !isFormValid && email === ''"> must not be empty.</p>
            </div>
            <div class="form-control" :class="!isFormValid && password === '' ? 'invalid' : ''" >
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password">
                <p v-if=" !isFormValid && password === '' "> must not be empty.</p>
            </div>
            <base-button>Login</base-button>
        </form>
        <p>New User? Click here for <router-link to="/signup">signup</router-link></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFormValid: true,
            email: '',
            password: '',
            error: null,
            isLoading: false,
            role: ''
        }
    },
    // computed: {
    //     redirectURL() {
    //         console.log('redirect URL')
    //         return this.$state.getters['isAuth'] && this.$state.getters['role'] === 'user' ? this.$router.replace('/userDash') : this.$router.replace('/adminDash');
    //     }
    // },

    methods: {
        async submitForm() {
            this.isFormValid = true;
            if(!(this.email && this.password)){
                this.isFormValid = false;
                console.log("form not valid")
                return;
            }
            this.isLoading = true;
            console.log(this.email, this.password, this.role);
            try {
                if(this.email==="admin@shahosp.com"){
                    this.role = 'admin';
                }else{
                    this.role = 'user';
                }
                const result = await this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                    role: this.role
                });
                console.log(result);
                if(this.role === 'admin'){
                    console.log("route to Admin");
                    this.$router.replace('/adminDash');

                }else{
                    console.log("route to user");
                    this.$router.replace('/userDash');
                }
                // this.$router.replace('/');
                // const redirectUrl = '/' + ()

            }
            catch(error) {
                this.error = error.message;
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    },
    
}
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

.invalid label{
    color: red;
}
.invalid input {
    border: 1px solid red;
}
</style>