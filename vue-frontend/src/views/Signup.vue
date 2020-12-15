<template>
    <div class='container'>
        <form class='signup-form' @submit="createUser">
            <label for="username" />
                <input type="text" v-model="username" id="username" placeholder="Username">
            <label for="email" />
                <input type="email" v-model="email" id="email" placeholder="Email">
            <label for="password" />
                <input type="password" v-model="password" id="password" placeholder="Password">
            <button type='submit' class='btn btn-outline-warning'>Signup</button>
        </form>
        
        <p>{{ text }}</p>
        <p>{{ msg }}</p> 
    </div>
</template>

<script>

export default {
    name: 'Signup',
    props: {
        msg: String
    },
    data() {
        return {
            text: "This is the first step to ending world hangery.",
            username: '',
            password: '',
            email: ''
        }
    },
    // methods: {
    //     createUser() {
    //         axios.post()
    //         .then((res) => {
    //             this.msg = res.data;
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    //     }}, 
        // created() {
        //     this.createUser();
        // },
};
</script>

<style scoped>
button {
    width: 30%;
    margin-bottom: 3%;
}
input {
    padding: 1%;
    margin-bottom: 1%;
    width: 30%;
}
.signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
}
</style>