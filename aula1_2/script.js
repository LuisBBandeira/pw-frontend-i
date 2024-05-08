import TestA from "./testa.js";
import TestB from "./testb.js";

window.onload = () =>{
    // new TestA()
    // new TestB()

    let divA = document.querySelector("#a")

    let button = document.querySelector("button")
    button.onclick = () => {
        divA.style.backgroundColor = "yellow"
        divA.style.backgroundImage = "url(https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400)"
        divA.onmouseover = () => {
            divA.classList.toggle = "clickable"
        }
    }
}