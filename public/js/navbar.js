function loadPage(pagename) {
    fetch(`/public/${pagename}.html`)
        .then(res => res.text())
        .then(text => document.getElementById("content").innerHTML = text);
    setCookie("last-page", pagename);
}

function loadLastPage() {
    const page = getOrInitCookie("last-page", "home");
    loadPage(page);
}

onLoad(() => {
    const buttons = $(".nav-button");
    for (let b of buttons) {
        b.addEventListener("click", () => {
            if (b.id == "nav-theme") {
                setCookie("theme", getCookie("theme") == "light" ? "dark" : "light");
                loadTheme();
            } else {
                loadPage(b.id.substr(4));
            }
        });
    }

    loadLastPage();
});
