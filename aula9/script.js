const template = document.createElement('template');
template.innerHTML=`
<style>
    /*ELEMENTS*/
    *{
        font-family: system-ui, sans-serif;
    }
    button{
        border:none;
        background-color:green;
        padding: 10px 20px;
        cursor:pointer;
    }
    /*CLASSES*/
    .gallery{
        position:relative;
        display:flex;
        flex-direction: column;
        width:500px;    
        height: 500px;
        gap:10px;
    }

    #images-container{
        position:relative;
        display:flex; 
        flex:1;
        background-color:red;
    }
    /*IDS*/
    #controls{
        display:flex;
        justify-content: space-between;
        background-color:blue;
    }
    
    #play-pause{
        position:absolute;
        left: 10px;
        top:10px;
    }
    </style>
    <div class="gallery">
        <div id="images-container"></div>
        <div id="controls">
            <button id="previous">Previous</button>
            <button id="next">Next</button>
        </div>
        <button id="play-pause">Stop</button>
    </div>`

const itemtemplate = document.createElement('template');
itemtemplate.innerHTML= `
    <style>
        .item{
            width:100%;
            width:100%;
            background-image: url('https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg');
            background-position:center;
            background-size:cover;
        }
    </style>
    <div class="item"></div>
`

class WebGallery extends HTMLElement{

    shadowRoot= null
    constructor(){
        super()
        this.shadowRoot = this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){

        const imageContainer = this.shadowRoot.querySelector('#images-container');
        const image = itemtemplate.content.cloneNode(true);
        imageContainer.appendChild(image);
        
        this.shadowRoot.querySelector('#previous').onclick =() =>{
            console.log('previous clicked');
        }
        this.shadowRoot.querySelector('#next').onclick =() =>{
            console.log('next clicked');
        }
        this.shadowRoot.querySelector('#play-pause').onclick =() =>{
            console.log('play pause clicked');
        }
    }
}
customElements.define('web-gallery' , WebGallery)