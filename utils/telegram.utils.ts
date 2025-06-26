export const getTelegramUserUpdate = (user: Ref<string>) => {
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
        const tgUser = window.Telegram.WebApp.initDataUnsafe.user;
        console.log('Telegram User:', tgUser);
        user.value = tgUser;
    } else {
        console.warn('No Telegram WebApp user data found');
    }
}

export default getTelegramUserUpdate;