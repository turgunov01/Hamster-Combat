<template>
    <div>
        Telegram Mini App
    </div>
    {{ user }}
</template>

<script lang="ts" setup>
const user = ref("");
onMounted(() => {

    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
        const tgUser = window.Telegram.WebApp.initDataUnsafe.user;
        console.log('Telegram User:', tgUser);
        user.value = tgUser;
    } else {
        console.warn('No Telegram WebApp user data found');
    }
});
</script>
