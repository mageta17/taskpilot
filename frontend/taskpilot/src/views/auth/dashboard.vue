<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import axiosInstance from '../../lib/axios';

const user = async () => {
    try {
        const response = await axiosInstance.get('/user');
        console.log('User data:', response.data);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
};

const logout = async () => {
    try {
        await axiosInstance.post('/logout');
        console.log('Logged out successfully');
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

user();
</script>