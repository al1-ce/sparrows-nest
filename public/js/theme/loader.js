function loadTheme() {
    const themeName = getOrInitCookie("theme", "light");
    if (document.querySelector("#theme-css") === null) {
        let link = document.createElement("link");
        document.head.append(link);
        link.outerHTML = `<link rel="stylesheet" type="text/css" id="theme-css">`;
    }
    document.querySelector("#theme-css").setAttribute("href", `/public/css/theme-${themeName}.css`)
}

