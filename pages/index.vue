<template>
    <div>
        Telegram Mini App
    </div>
    {{ user }}
</template>

<script lang="ts" setup>
const user = ref("");
onMounted(() => {
    getTelegramUserUpdate(user.value);
});
</script>
