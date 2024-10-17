const key = 0x00000065; 

function getHash(name, key) {
    let result = 0;
    for (let i = 0; i < name.length; i++) {
        result = (name.charCodeAt(i) + result * key) >>> 0;
    }
    return result;
}

function getName(hash, callback) {
    const hexHash = "0x" + hash.toString(16).toUpperCase(); 

    fetch('../assets/data/hashes.json')
        .then(response => response.json())
        .then(data => {
            const foundName = Object.keys(data).find(key => data[key] === hexHash);
            callback(foundName);
        })
        .catch(error => {
            console.error('Error while fetching JSON data:', error);
            callback(null);
        });
}

function action() {
    const action = document.getElementById("action").value;
    const title = document.getElementById("title");
    const input = document.getElementById("input");
    const button = document.getElementById("button");

    if (action === "hash") {
        title.innerHTML = "<u>Input names</u>:";
        input.placeholder = "Input... (example driver.bcmdl)";
        button.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Convert names`;
    } else if (action === "unhash") {
        title.innerHTML = "<u>Input hashes</u>:";
        input.placeholder = "Input... (example 0xAD517B20)";
        button.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Convert hashes`;
    }
}

function convert() {
    const input = document.getElementById("input").value.trim();
    const action = document.getElementById("action").value;
    const output = document.getElementById("output");

    if (action === "hash") {
        const lines = input.split('\n').filter(line => line.trim().length > 0);
        let result = '';

        lines.forEach(line => {
            const hashValue = getHash(line.trim(), key);
            const hexHash = "0x" + hashValue.toString(16).toUpperCase().padStart(8, '0');
            result += `${hexHash}\n`;
        });

        output.value = result.trim();

    } else if (action === "unhash") {
        const hashInput = parseInt(input, 16);
        getName(hashInput, (foundName) => {
            if (foundName) {
                output.value = foundName;
            } else {
                output.value = 'These hashes aren\'t in the list yet';
            }
        });
    }
}
