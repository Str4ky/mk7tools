function screenshot() {
    let container = document.querySelector(".image-container");
    let images = container.querySelectorAll('img');

    for (let img of images) {
        if (!img.src) {
            img.src = '../../assets/img/blank.png';
        }
    }

    domtoimage.toBlob(container)
        .then(function (blob) {
            saveAs(blob, 'screenshot.png');
    });

}