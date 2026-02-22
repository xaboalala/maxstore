// تهيئة Telegram WebApp
Telegram.WebApp.ready();
Telegram.WebApp.expand();
Telegram.WebApp.setHeaderColor("#0A0A0A");

// تبديل الشاشات
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// نسخ عنوان المحفظة
function copyWallet() {
    navigator.clipboard.writeText("7ee806564d3aa36d87667cad636b6788");
    Telegram.WebApp.showPopup({ message: "✅ تم نسخ العنوان" });
}

// شحن سريع
function completeCharge() {
    Telegram.WebApp.showAlert("🎉 تم الشحن بنجاح!\nالرصيد سيصل خلال ثوانٍ");
}

// تشغيل عند فتح التطبيق
window.onload = () => {
    switchScreen('home');
};