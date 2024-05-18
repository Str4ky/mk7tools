function screenshot() {
    let container = document.querySelector(".image-container");
    let screenshot = document.getElementById("screenshot");
    let images = container.querySelectorAll('img');

    for (let img of images) {
        if (!img.src) {
            img.src = '../../assets/img/blank.png';
        }
    }

    clipboard.innerHTML = '<i class="fa-solid fa-check"></i> Done';
    setTimeout(() => {
        clipboard.innerHTML = '<i class="fa-solid fa-camera"></i> Save render';
    }, 2000);

    domtoimage.toBlob(container)
        .then(function (blob) {
            saveAs(blob, 'screenshot.png');
    });

}

function clipboard() {
    let container = document.querySelector(".image-container");
    let clipboard = document.getElementById('clipboard');
    let images = container.querySelectorAll('img');

    for (let img of images) {
        if (!img.src) {
            img.src = '../../assets/img/blank.png';
        }
    }

    clipboard.innerHTML = '<i class="fa-solid fa-check"></i> Done';
    setTimeout(() => {
        clipboard.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy render';
    }, 2000);

    domtoimage.toBlob(container)
        .then(function(blob) {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blob
                })
            ])
        });
}