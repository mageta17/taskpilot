<script setup lang="ts">
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = 'http://localhost:9000';

const register = async () => {
    console.log('Registering...');

    await axios.get('/sanctum/csrf-cookie');

    try {
        const response = await axios.post(
            '/api/register', 
            {
                name: 'John Doe',
                email: 'john@doe.com',
                password: 'password123',
                password_confirmation: 'password123',
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

register();
</script>
<template>
    <h1>Register</h1>
</template>