<template>
    <div class='container'>
        <form class='signup-form'>
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
            text: "This is the first step to ending world hangery."
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