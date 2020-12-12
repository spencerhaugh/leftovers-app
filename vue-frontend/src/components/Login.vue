<template>
    <div class='container'>
        <button type='button' class='btn btn-outline-danger'>Login</button>
        <button type='button' class='btn btn-outline-warning'>Signup</button>
        <p>{{ text }}</p>
        <p>{{ msg }}</p> 
    </div>
</template>

<script>

export default {
    name: 'Login',
    props: {
        msg: String
    },
    data() {
        return {
            text: "This is Login Text return defined in Login.vue"
        };
    },
    // methods: {
    //     getMessage() {
    //         const path = 'http://localhost:8000/ping';
    //         axios.get(path)
    //         .then((res) => {
    //             this.msg = res.data;
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    //     },
    // },
    // created() {
    //     this.getMessage();
    // },
};
</script>

<style scoped>
button {
    margin-right: 5px;
    margin-left: 5px;
}
</style>