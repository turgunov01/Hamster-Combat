<template>
    <div>
        Telegram Mini App
    </div>
</template>

<script lang="ts" setup>
onMounted(() => {
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
        const user = window.Telegram.WebApp.initDataUnsafe.user;
        console.log('Telegram User:', user);
    } else {
        console.warn('No Telegram WebApp user data found');
    }
});
</script>
