<template>
    <div>               
        <form 
            @submit.prevent="login(form)"
            class="max-w-sm mx-auto"
        >
            <h1 class="text-3xl text-slate-200 my-4">Login</h1>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input 
                    v-model="form.email"
                    type="email" 
                    id="email" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"
                >
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                    v-model="form.password"
                    type="password" 
                    id="password" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import axiosInstance from '../../lib/axios';
import { reactive } from 'vue';

interface LoginForm {
    email: string;
    password: string;
}

const form = reactive<LoginForm>({
    email: '',
    password: ''
});

const login = async (payload: LoginForm) => {
    console.log('Login function called');
    await axiosInstance.get('/sanctum/csrf-cookie', {
        baseURL: "http://localhost:9000"
    });
    
    try {
        const response = await axiosInstance.post('/login', payload);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
</script>