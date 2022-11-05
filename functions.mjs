function magicalAct(text) {
    let magic = document.querySelector("h1");
    if (text) {
        magic.innerHTML = text;
    } else {
        magic.innerHTML = "Check the js code of this lesson!";
    }
}