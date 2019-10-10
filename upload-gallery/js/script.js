document.addEventListener('DOMContentLoaded', (event) => {

    // gallery setup
    console.log('DOM fully loaded and parsed');
    // debugger;
    const myGallery = cloudinary.galleryWidget({
        container: "#my-gallery",
        cloudName: "pictures77",
        mediaAssets: [{ tag: "fn_unsigned", mediaType: "image" }]

    });
    myGallery.render();

    // upload setup
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'pictures77',
        uploadPreset: 'fn_unsigned'
    },
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
            }
        }
    )

    document.getElementById("upload_widget").addEventListener("click", function () {
        myWidget.open();
    }, false);
});


