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

var img1 = document.getElementById("slot_name1");
var img2 = document.getElementById("slot_name2");
var img3 = document.getElementById("slot_name3");
var img4 = document.getElementById("slot_name4");
var img5 = document.getElementById("slot_name5");
var img6 = document.getElementById("slot_name6");
var img7 = document.getElementById("slot_name7");
var img8 = document.getElementById("slot_name8");

var file1 = document.getElementById("slot_race1");
var file2 = document.getElementById("slot_race2");
var file3 = document.getElementById("slot_race3");
var file4 = document.getElementById("slot_race4");
var file5 = document.getElementById("slot_race5");
var file6 = document.getElementById("slot_race6");
var file7 = document.getElementById("slot_race7");
var file8 = document.getElementById("slot_race8");

var character1 = slot1.value;
var character2 = slot2.value;
var character3 = slot3.value;
var character4 = slot4.value;
var character5 = slot5.value;
var character6 = slot6.value;
var character7 = slot7.value;
var character8 = slot8.value;

var background = document.getElementById("background");

var select = document.getElementById("select");

img1.style.display = "none";
img2.style.display = "none";
img3.style.display = "none";
img4.style.display = "none";
img5.style.display = "none";
img6.style.display = "none";
img7.style.display = "none";
img8.style.display = "none";

function select1() {
    if (sel1.checked) {
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        sel7.checked = false;
        sel8.checked = false;
        if(select.value === "race") {
            background.src = "../../assets/img/race/background_race_1.png";
        }
        else if(select.value === "results") {
            background.src = "../../assets/img/race/background_results_1.png";
        }
    }
    else {
        resetSelection();
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
        if(select.value === "race") {
            background.src = "../../assets/img/race/background_race_2.png";
        }
        else if(select.value === "results") {
            background.src = "../../assets/img/race/background_results_2.png";
        }
    }
    else {
        resetSelection();
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
        if(select.value === "race") {
            background.src = "../../assets/img/race/background_race_3.png";
        }
        else if(select.value === "results") {
            background.src = "../../assets/img/race/background_results_3.png";
        }
    }
    else {
        resetSelection();
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
        if(select.value === "race") {
            background.src = "../../assets/img/race/background_race_4.png";
        }
        else if(select.value === "results") {
            background.src = "../../assets/img/race/background_results_4.png";
        }
    }
    else {
        resetSelection();
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
        if(select.value === "race") {
            background.src = "../../assets/img/race/background_race_5.png";
        }
        else if(select.value === "results") {
            background.src = "../../assets/img/race/background_results_5.png";
        }
    }
    else {
        resetSelection();
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
        if(select.value === "race") {
            background.src = "../../assets/img/race/background_race_6.png";
        }
        else if(select.value === "results") {
            background.src = "../../assets/img/race/background_results_6.png";
        }
    }
    else {
        resetSelection();
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
        if(select.value === "race") {
            background.src = "../../assets/img/race/background_race_7.png";
        }
        else if(select.value === "results") {
            background.src = "../../assets/img/race/background_results_7.png";
        }
    }
    else {
        resetSelection();
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
        if(select.value === "race") {
            background.src = "../../assets/img/race/background_race_8.png";
        }
        else if(select.value === "results") {
            background.src = "../../assets/img/race/background_results_8.png";
        }
    }
    else {
        resetSelection();
    }
}

function resetSelection() {
    sel1.checked = false;
    sel2.checked = false;
    sel3.checked = false;
    sel4.checked = false;
    sel5.checked = false;
    sel6.checked = false;
    sel7.checked = false;
    sel8.checked = false;
    if(select.value === "race") {
        background.src = "../../assets/img/race/background_race.png";
    }
    else if(select.value === "results") {
        background.src = "../../assets/img/race/background_results.png";
    }
}

slot1.addEventListener("input", function() {
    name1.innerText = htmlEntities(slot1.value);
});

slot2.addEventListener("input", function() {
    name2.innerText = htmlEntities(slot2.value);
});

slot3.addEventListener("input", function() {
    name3.innerText = htmlEntities(slot3.value);
});

slot4.addEventListener("input", function() {
    name4.innerText = htmlEntities(slot4.value);
});

slot5.addEventListener("input", function() {
    name5.innerText = htmlEntities(slot5.value);
});

slot6.addEventListener("input", function() {
    name6.innerText = htmlEntities(slot6.value);
});

slot7.addEventListener("input", function() {
    name7.innerText = htmlEntities(slot7.value);
});

slot8.addEventListener("input", function() {
    name8.innerText = htmlEntities(slot8.value);
});

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

function select_type() {
    if (select.value === "race") {
        if(sel1.checked) {
            background.src = "../../assets/img/race/background_race_1.png";
        }
        else if(sel2.checked) {
            background.src = "../../assets/img/race/background_race_2.png";
        }
        else if(sel3.checked) {
            background.src = "../../assets/img/race/background_race_3.png";
        }
        else if(sel4.checked) {
            background.src = "../../assets/img/race/background_race_4.png";
        }
        else if(sel5.checked) {
            background.src = "../../assets/img/race/background_race_5.png";
        }
        else if(sel6.checked) {
            background.src = "../../assets/img/race/background_race_6.png";
        }
        else if(sel7.checked) {
            background.src = "../../assets/img/race/background_race_7.png";
        }
        else if(sel8.checked) {
            background.src = "../../assets/img/race/background_race_8.png";
        }
        else {
            background.src = "../../assets/img/race/background_race.png";
        }

        name1.style.bottom = "78.5%";
        name1.style.left = "14%";
        name2.style.top = "8.8%";
        name2.style.left = "14%";
        name3.style.top = "20.5%";
        name3.style.left = "14%";
        name4.style.top = "32.3%";
        name4.style.left = "14%";
        name5.style.top = "44%";
        name5.style.left = "14%";
        name6.style.top = "55.7%";
        name6.style.left = "14%";
        name7.style.top = "67.2%";
        name7.style.left = "14%";
        name8.style.top = "79%";
        name8.style.left = "14%";
        img1.style.top = "5%";
        img1.style.left = "6.5%";
        file1.style.top = "5%";
        file1.style.left = "6.5%";
        img2.style.top = "16.5%";
        img2.style.left = "6.5%";
        file2.style.top = "16.5%";
        file2.style.left = "6.5%";
        img3.style.top = "28.1%";
        img3.style.left = "6.5%";
        file3.style.top = "28.1%";
        file3.style.left = "6.5%";
        img4.style.top = "39.8%";
        img4.style.left = "6.5%";
        file4.style.top = "39.8%";
        file4.style.left = "6.5%";
        img5.style.top = "51.5%";
        img5.style.left = "6.5%";
        file5.style.top = "51.5%";
        file5.style.left = "6.5%";
        img6.style.top = "63.3%";
        img6.style.left = "6.5%";
        file6.style.top = "63.3%";
        file6.style.left = "6.5%";
        img7.style.top = "74.8%";
        img7.style.left = "6.5%";
        file7.style.top = "74.8%";
        file7.style.left = "6.5%";
        img8.style.top = "86.5%";
        img8.style.left = "6.5%";
        file8.style.top = "86.5%";
        file8.style.left = "6.5%";
    }
    else if (select.value === "results") {
        if(sel1.checked) {
            background.src = "../../assets/img/race/background_results_1.png";
        }
        else if(sel2.checked) {
            background.src = "../../assets/img/race/background_results_2.png";
        }
        else if(sel3.checked) {
            background.src = "../../assets/img/race/background_results_3.png";
        }
        else if(sel4.checked) {
            background.src = "../../assets/img/race/background_results_4.png";
        }
        else if(sel5.checked) {
            background.src = "../../assets/img/race/background_results_5.png";
        }
        else if(sel6.checked) {
            background.src = "../../assets/img/race/background_results_6.png";
        }
        else if(sel7.checked) {
            background.src = "../../assets/img/race/background_results_7.png";
        }
        else if(sel8.checked) {
            background.src = "../../assets/img/race/background_results_8.png";
        }
        else {
            background.src = "../../assets/img/race/background_results.png";
        }

        name1.style.bottom = "69%";
        name1.style.left = "19%";
        name2.style.top = "17%";
        name2.style.left = "19%";
        name3.style.top = "27.5%";
        name3.style.left = "19%";
        name4.style.top = "38%";
        name4.style.left = "19%";
        name5.style.top = "48.5%";
        name5.style.left = "19%";
        name6.style.top = "59%";
        name6.style.left = "19%";
        name7.style.top = "69.5%";
        name7.style.left = "19%";
        name8.style.top = "80%";
        name8.style.left = "19%";

        img1.style.top = "14.5%";
        img1.style.left = "11%";
        file1.style.top = "14.5%";
        file1.style.left = "11%";
        img2.style.top = "25%";
        img2.style.left = "11%";
        file2.style.top = "25%";
        file2.style.left = "11%";
        img3.style.top = "35.5%";
        img3.style.left = "11%";
        file3.style.top = "35.5%";
        file3.style.left = "11%";
        img4.style.top = "46%";
        img4.style.left = "11%";
        file4.style.top = "46%";
        file4.style.left = "11%";
        img5.style.top = "56.5%";
        img5.style.left = "11%";
        file5.style.top = "56.5%";
        file5.style.left = "11%";
        img6.style.top = "66.8%";
        img6.style.left = "11%";
        file6.style.top = "66.8%";
        file6.style.left = "11%";
        img7.style.top = "77.3%";
        img7.style.left = "11%";
        file7.style.top = "77.3%";
        file7.style.left = "11%";
        img8.style.top = "87.8%";
        img8.style.left = "11%";
        file8.style.top = "87.8%";
        file8.style.left = "11%";
    }
}