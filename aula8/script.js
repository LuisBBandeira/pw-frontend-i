
// class WordCounter{
//     #view

//     constructor(){
//         this.#view = document.querySelector('.word-counter');
//     }

//     get numWords(){
//         return this.#view.querySelector('p').innerText.split(' ').length;
//     }

//     set innerText(text){
//         this.#view.querySelector('p').innerText = text;
//     }
//     get innerText(){
//         return this.#view.querySelector('p').innerText;
//     }
// }

class WordCounter extends HTMLElement{
    static get observedAttributes() {
        return ['my-attribute'];
    }
    constructor(){
        super();
        console.log("component constructed");
    }

    get numWords(){
        return this.querySelector('p').innerText.split(/\s+/g).length;
    }

    createElement(tag,contet){
        const elem = document.createElement(tag);
        this.appendChild(elem);
        elem.innerText=contet;
    }

    createAudio(url){
        const audio = document.createElement("audio");
        audio.src = url
        audio.controls = true;
        this.appendChild(audio)
    }
    
    connectedCallback() {
        console.log("Custom element added to page.");
    }
    
    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }
    
    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}
customElements.define('word-counter' , WordCounter);

window.onload = () =>{

    const wordCounter = document.querySelector('word-counter');
    // const wordCounter = new WordCounter();
    // console.log(wordCounter.numWords);
    // wordCounter.innerHTML = "<p>hello world </p>";
    // const p = wordCounter.querySelector('p');
    // console.log(p);
    // console.log(wordCounter.numWords);
    // wordCounter.createElement("label" , "totot");
    // wordCounter.createElement("br");
    // wordCounter.createAudio("https://cdn.freesound.org/previews/735/735411_1648170-lq.mp3");
    // document.body.removeChild(document.querySelector("word-counter"));
    wordCounter.setAttribute('my-attribute', 'new-value')
} 