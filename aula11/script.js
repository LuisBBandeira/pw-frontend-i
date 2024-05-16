window.onload = () => {
    const webGallery = document.querySelector("web-gallery");
    webGallery.addEventListener('ready' , (ev) =>{
        console.log('gallery ready', ev.detail.numberOfimages);
    })
    webGallery.currentItem = 2;
    webGallery.dataURL = "assets/gallery_data.json";
} 