function screenshot() {
    let container = document.querySelector(".image-container");

    let images = container.querySelectorAll('img');

    for (let img of images) {
        if (!img.src) {
            img.src = '../../assets/img/blank.png';
        }
    }

    domtoimage.toPng(container)
    .then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = dataUrl;
        link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}