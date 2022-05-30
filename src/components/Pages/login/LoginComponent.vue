<template>
    <section>
        <base-card>
            <h2>LOGIN</h2>
            <login-form></login-form>
            <p></p>
        </base-card>
    </section>
</template>

<script>
import LoginForm from '../../forms/LoginFormComponent.vue';

export default {
    components: {
        LoginForm
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    color: #447a29;
}
</style>