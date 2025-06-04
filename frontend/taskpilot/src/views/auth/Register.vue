<script setup lang="ts">
import axios from "axios";

const register = async () => {
    console.log("Registering...");

    try {
        const response = await axios.post("http://localhost:3000/api/register", {
            name: "John Doe",
            email: "john@doe.com",
            password: "password123",
            password_confirmation: "password123"
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
</script>
<template>
    <h1>Register</h1>
</template>