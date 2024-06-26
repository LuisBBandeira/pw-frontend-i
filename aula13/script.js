window.onload = () => {
    const webGallery = document.querySelector("web-gallery");
    const webGalleryDetail = document.querySelector("web-gallery-detail");

    webGallery.addEventListener("item-clicked", (event) => {
        webGalleryDetail.data = event.detail.data;



        webGallery.style.opacity=0;
        webGallery.style.transform = "rotateY(-180deg)";
        webGallery.style.pointerEvents = "none";

        webGalleryDetail.style.opacity=1;
        webGalleryDetail.style.transform = "rotateY(0deg)";
        webGalleryDetail.style.pointerEvents = "initial";
    });


    webGalleryDetail.addEventListener("close-detail", () => {
        webGallery.style.opacity=1;
        webGallery.style.transform = "rotateY(0deg)";
        webGallery.style.pointerEvents = "initial";

        webGalleryDetail.style.opacity=0;
        webGalleryDetail.style.transform = "rotateY(180deg)";
        webGalleryDetail.style.pointerEvents = "none";

    });


    webGallery.currentItem = 2;
    webGallery.dataURL = "assets/gallery_data.json";
}