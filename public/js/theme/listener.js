// window.parent.postMessage("message_theme_switch", "*");

window.addEventListener("message", (e) => {
    if (e.data == "message_theme_switch") loadTheme();
});

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
});


