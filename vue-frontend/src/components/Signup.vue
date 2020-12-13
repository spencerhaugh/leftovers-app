<template>
    <div class='container'>
        <form>
            <label for="username" />
                <input type="text" id="username" placeholder="Username">
            <label for="email" />
                <input type="email" id="email" placeholder="Email">
            <label for="password" />
                <input type="password" id="password" placeholder="Password">
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
            text: "This is Signup Text return defined in Signup.vue"
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