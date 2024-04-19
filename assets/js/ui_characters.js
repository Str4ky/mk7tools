function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");
var slot4 = document.getElementById("slot4");
var slot5 = document.getElementById("slot5");
var slot6 = document.getElementById("slot6");
var slot7 = document.getElementById("slot7");
var slot8 = document.getElementById("slot8");

var nameCharacter = document.getElementById("name");
var nameCharacterBack = document.getElementById("name_back");

var sel1 = document.getElementById("select1");
var sel2 = document.getElementById("select2");
var sel3 = document.getElementById("select3");
var sel4 = document.getElementById("select4");
var sel5 = document.getElementById("select5");
var sel6 = document.getElementById("select6");
var sel7 = document.getElementById("select7");
var sel8 = document.getElementById("select8");

var img1 = document.getElementById("slot_image1");
var img2 = document.getElementById("slot_image2");
var img3 = document.getElementById("slot_image3");
var img4 = document.getElementById("slot_image4");
var img5 = document.getElementById("slot_image5");
var img6 = document.getElementById("slot_image6");
var img7 = document.getElementById("slot_image7");
var img8 = document.getElementById("slot_image8");

var character1 = slot1.value;
var character2 = slot2.value;
var character3 = slot3.value;
var character4 = slot4.value;
var character5 = slot5.value;
var character6 = slot6.value;
var character7 = slot7.value;
var character8 = slot8.value;

let result1;
let result2;
let result3;
let result4;
let result5;
let result6;
let result7;
let result8;

var background = document.getElementById("background");
var preview = document.getElementById('preview');
var select = document.getElementById("select");
var lines = document.getElementById("select_lines");
var lines_img = document.getElementById("lines");

preview.style.opacity = "0";

img1.style.display = "none";
img2.style.display = "none";
img3.style.display = "none";
img4.style.display = "none";
img5.style.display = "none";
img6.style.display = "none";
img7.style.display = "none";
img8.style.display = "none";

slot1.addEventListener("input", function() {
    if (slot1.value !== nameCharacter && slot1.value !== nameCharacterBack && sel1.checked === true) {
        nameCharacter.innerText = htmlEntities(slot1.value);
        nameCharacterBack.innerText = htmlEntities(slot1.value);
    }
    else if (slot1.value === "") {
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
    }
});

slot2.addEventListener("input", function() {
    if (slot2.value !== nameCharacter && slot2.value !== nameCharacterBack && sel2.checked === true) {
        nameCharacter.innerText = htmlEntities(slot2.value);
        nameCharacterBack.innerText = htmlEntities(slot2.value);
    }
    else if (slot2.value === "") {
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
    }
});

slot3.addEventListener("input", function() {
    if (slot3.value !== nameCharacter && slot3.value !== nameCharacterBack && sel3.checked === true) {
        nameCharacter.innerText = htmlEntities(slot3.value);
        nameCharacterBack.innerText = htmlEntities(slot3.value);
    }
    else if (slot3.value === "") {
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
    }
});

slot4.addEventListener("input", function() {
    if (slot4.value !== nameCharacter && slot4.value !== nameCharacterBack && sel4.checked === true) {
        nameCharacter.innerText = htmlEntities(slot4.value);
        nameCharacterBack.innerText = htmlEntities(slot4.value);
    }
    else if (slot4.value === "") {
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
    }
});

slot5.addEventListener("input", function() {
    if (slot5.value !== nameCharacter && slot5.value !== nameCharacterBack && sel5.checked === true) {
        nameCharacter.innerText = htmlEntities(slot5.value);
        nameCharacterBack.innerText = htmlEntities(slot5.value);
    }
    else if (slot5.value === "") {
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
    }
});

slot6.addEventListener("input", function() {
    if (slot6.value !== nameCharacter && slot6.value !== nameCharacterBack && sel6.checked === true) {
        nameCharacter.innerText = htmlEntities(slot6.value);
        nameCharacterBack.innerText = htmlEntities(slot6.value);
    }
    else if (slot6.value === "") {
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
    }
});

slot7.addEventListener("input", function() {
    if (slot7.value !== nameCharacter && slot7.value !== nameCharacterBack && sel7.checked === true) {
        nameCharacter.innerText = htmlEntities(slot7.value);
        nameCharacterBack.innerText = htmlEntities(slot7.value);
    }
    else if (slot7.value === "") {
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
    }
});

slot8.addEventListener("input", function() {
    if (slot8.value !== nameCharacter && slot8.value !== nameCharacterBack && sel8.checked === true) {
        nameCharacter.innerText = htmlEntities(slot8.value);
        nameCharacterBack.innerText = htmlEntities(slot8.value);
    }
    else if (slot8.value === "") {
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
    }
});

function select1() {
    if (sel1.checked) {
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/characters/background_1.png";
        nameCharacter.innerText = htmlEntities(slot1.value);
        nameCharacterBack.innerText = htmlEntities(slot1.value);
        if(result1 != undefined) {
            preview.src = result1;
            preview.style.opacity = "1";
        }
        else {
            preview.src == "";
            preview.style.opacity = "0";
        }
        if(preview.src === "") {
            preview.style.display = "none";
        }
        else {
            preview.style.display = "block";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any character yet"
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
        background.src = "../../assets/img/characters/background.png";
        preview.style.opacity = "0";
    }
}

function select2() {
    if (sel2.checked) {
        sel1.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/characters/background_2.png";
        nameCharacter.innerText = htmlEntities(slot2.value);
        nameCharacterBack.innerText = htmlEntities(slot2.value);
        if(result2 != undefined) {
            preview.src = result2;
            preview.style.opacity = "1";
        }
        else {
            preview.src = "";
            preview.style.opacity = "0";
        }
        if(preview.src === "") {
            preview.style.display = "none";
        }
        else {
            preview.style.display = "block";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any character yet"
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
        background.src = "../../assets/img/characters/background.png";
        preview.style.opacity = "0";
    }
}

function select3() {
    if (sel3.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/characters/background_3.png";
        nameCharacter.innerText = htmlEntities(slot3.value);
        nameCharacterBack.innerText = htmlEntities(slot3.value);
        if(result3 != undefined) {
            preview.src = result3;
            preview.style.opacity = "1";
        }
        else {
            preview.src = "";
            preview.style.opacity = "0";
        }
        if(preview.src === "") {
            preview.style.display = "none";
        }
        else {
            preview.style.display = "block";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any character yet"
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
        background.src = "../../assets/img/characters/background.png";
        preview.style.opacity = "0";
    }
}

function select4() {
    if (sel4.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/characters/background_4.png";
        nameCharacter.innerText = htmlEntities(slot4.value);
        nameCharacterBack.innerText = htmlEntities(slot4.value);
        if(result4 != undefined) {
            preview.src = result4;
            preview.style.opacity = "1";
        }
        else {
            preview.src = "";
            preview.style.opacity = "0";
        }
        if(preview.src === "") {
            preview.style.display = "none";
        }
        else {
            preview.style.display = "block";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any character yet"
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
        background.src = "../../assets/img/characters/background.png";
        preview.style.opacity = "0";
    }
}

function select5() {
    if (sel5.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/characters/background_5.png";
        nameCharacter.innerText = htmlEntities(slot5.value);
        nameCharacterBack.innerText = htmlEntities(slot5.value);
        if(result5 != undefined) {
            preview.src = result5;
            preview.style.opacity = "1";
        }
        else {
            preview.src = "";
            preview.style.opacity = "0";
        }
        if(preview.src === "") {
            preview.style.display = "none";
        }
        else {
            preview.style.display = "block";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any character yet"
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
        background.src = "../../assets/img/characters/background.png";
        preview.style.opacity = "0";
    }
}

function select6() {
    if (sel6.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/characters/background_6.png";
        nameCharacter.innerText = htmlEntities(slot6.value);
        nameCharacterBack.innerText = htmlEntities(slot6.value);
        if(result6 != undefined) {
            preview.src = result6;
            preview.style.opacity = "1";
        }
        else {
            preview.src = "";
            preview.style.opacity = "0";
        }
        if(preview.src === "") {
            preview.style.display = "none";
        }
        else {
            preview.style.display = "block";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any character yet"
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
        background.src = "../../assets/img/characters/background.png";
        preview.style.opacity = "0";
    }
}

function select7() {
    if (sel7.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel8.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/characters/background_7.png";
        nameCharacter.innerText = htmlEntities(slot7.value);
        nameCharacterBack.innerText = htmlEntities(slot7.value);
        if(result7 != undefined) {
            preview.src = result7;
            preview.style.opacity = "1";
        }
        else {
            preview.src = "";
            preview.style.opacity = "0";
        }
        if(preview.src === "") {
            preview.style.display = "none";
        }
        else {
            preview.style.display = "block";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any character yet"
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
        background.src = "../../assets/img/characters/background.png";
        preview.style.opacity = "0";
    }
}

function select8() {
    if (sel8.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/characters/background_8.png";
        nameCharacter.innerText = htmlEntities(slot8.value);
        nameCharacterBack.innerText = htmlEntities(slot8.value);
        if(result8 != undefined) {
            preview.src = result8;
            preview.style.opacity = "1";
        }
        else {
            preview.src = "";
            preview.style.opacity = "0";
        }
        if(preview.src === "") {
            preview.style.display = "none";
        }
        else {
            preview.style.display = "block";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any character yet"
        nameCharacter.innerText = "";
        nameCharacterBack.innerText = "";
        background.src = "../../assets/img/characters/background.png";
        preview.style.opacity = "0";
    }
}

function previewImage(input) {
    preview.style.display = "block";
    preview.style.opacity = "1";
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            if(sel1.checked) {
                result1 = e.target.result;
            }
            if(sel2.checked) {
                result2 = e.target.result;
            }
            if(sel3.checked) {
                result3 = e.target.result;
            }
            if(sel4.checked) {
                result4 = e.target.result;
            }
            if(sel5.checked) {
                result5 = e.target.result;
            }
            if(sel6.checked) {
                result6 = e.target.result;
            }
            if(sel7.checked) {
                result7 = e.target.result;
            }
            if(sel8.checked) {
                result8 = e.target.result;
            }
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function char_slot1(input) {
    img1.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img1.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function char_slot2(input) {
    img2.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img2.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function char_slot3(input) {
    img3.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img3.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function char_slot4(input) {
    img4.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img4.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function char_slot5(input) {
    img5.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img5.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function char_slot6(input) {
    img6.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img6.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function char_slot7(input) {
    img7.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img7.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function char_slot8(input) {
    img8.style.display = "block";
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            img8.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function select_lines() {
    if(lines.checked === true) {
        lines_img.style.display = "none";
    }
    else {
        lines_img.style.display = "block";
    }
}