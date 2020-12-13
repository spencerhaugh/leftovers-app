<template>
    <div class='container'>
        <form>
            <label for="username" />
                <input type="text" id="username" placeholder="Username">
            <label for="email" />
                <input type="password" id="password" placeholder="Password">
            <button type='submit' class='btn btn-outline-danger'>Login</button>
        </form>
        
        <p>{{ text }}</p>
        <p>{{ msg }}</p> 
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    props: {
        msg: String
    },
    data() {
        return {
            text: "Need an account? Sign up for free!"
        };
    },
    methods: {
        loginUser() {
            const path = 'http://localhost:3003/users/login';
            axios.get(path)
            .then((res) => {
                this.msg = res.data;
            })
            .catch((error) => {
                console.error(error);
            });
        },
    },
    created() {
        this.getMessage();
    },
};
</script>

<style scoped>
button {
    margin-right: 5px;
    margin-left: 5px;
}
</style>