/// Adds .glitch class for making text "glitchy"

function random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    const head = document.head;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.setAttribute("href", "/css/scripted/glitch.css");
    head.append(link);

    const glitch_elements = document.getElementsByClassName("glitch");

    for (let el of glitch_elements) {
        el.setAttribute("data-text", el.innerText);
        const closure_el = el;
        setTimeout(() => {
            closure_el.classList.remove("glitch");
            closure_el.classList.add("glitch-animate");
        }, random_int(1, 1000));
    }
});

