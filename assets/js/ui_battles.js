function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");
var slot4 = document.getElementById("slot4");
var slot5 = document.getElementById("slot5");
var slot6 = document.getElementById("slot6");

var name1 = document.getElementById("battle1");
var name2 = document.getElementById("battle2");
var name3 = document.getElementById("battle3");
var name4 = document.getElementById("battle4");
var name5 = document.getElementById("battle5");
var name6 = document.getElementById("battle6");

var id1 = document.getElementById("console1");
var id2 = document.getElementById("console2");
var id3 = document.getElementById("console3");
var id4 = document.getElementById("console4");
var id5 = document.getElementById("console5");
var id6 = document.getElementById("console6");

var sel1 = document.getElementById("select1");
var sel2 = document.getElementById("select2");
var sel3 = document.getElementById("select3");
var sel4 = document.getElementById("select4");
var sel5 = document.getElementById("select5");
var sel6 = document.getElementById("select6");

var battle1 = slot1.value;
var battle2 = slot2.value;
var battle3 = slot3.value;
var battle4 = slot4.value;
var battle5 = slot5.value;
var battle6 = slot6.value;

let result1;
let result2;
let result3;
let result4;
let result5;
let result6;

var background = document.getElementById("background");
var preview = document.getElementById('preview');
var select = document.getElementById("select");

slot1.addEventListener("input", function() {
    if (slot1.value !== battle1) {
        var console1 = id1.options[id1.selectedIndex].value;
        name1.innerHTML = "<span class='console' id='subname1'>" + console1 + "</span> " + htmlEntities(slot1.value);
    }
    else if (slot1.value === "") {
        var console1 = id1.options[id1.selectedIndex].value;
        name1.innerHTML = "<span class='console' id='subname1'>" + console1 + "</span>";
    }
});

slot2.addEventListener("input", function() {
    if (slot2.value !== battle2) {
        var console2 = id2.options[id2.selectedIndex].value;
        name2.innerHTML = "<span class='console' id='subname2'>" + console2 + "</span> " + htmlEntities(slot2.value);
    }
    else if (slot2.value === "") {
        var console2 = id2.options[id2.selectedIndex].value;
        name2.innerHTML = "<span class='console' id='subname2'>" + console2 + "</span>";
    }
});

slot3.addEventListener("input", function() {
    if (slot3.value !== battle3) {
        var console3 = id3.options[id3.selectedIndex].value;
        name3.innerHTML = "<span class='console' id='subname3'>" + console3 + "</span> " + htmlEntities(slot3.value);
    }
    else if (slot3.value === "") {
        var console3 = id3.options[id3.selectedIndex].value;
        name3.innerHTML = "<span class='console' id='subname3'>" + console3 + "</span>";
    }
});

slot4.addEventListener("input", function() {
    if (slot4.value !== battle4) {
        var console4 = id4.options[id4.selectedIndex].value;
        name4.innerHTML = "<span class='console' id='subname4'>" + console4 + "</span> " + htmlEntities(slot4.value);
    }
    else if (slot4.value === "") {
        var console4 = id4.options[id4.selectedIndex].value;
        name4.innerHTML = "<span class='console' id='subname4'>" + console4 + "</span>";
    }
});

slot5.addEventListener("input", function() {
    if (slot5.value !== battle5) {
        var console5 = id5.options[id5.selectedIndex].value;
        name5.innerHTML = "<span class='console' id='subname5'>" + console5 + "</span> " + htmlEntities(slot5.value);
    }
    else if (slot5.value === "") {
        var console5 = id5.options[id5.selectedIndex].value;
        name5.innerHTML = "<span class='console' id='subname5'>" + console5 + "</span>";
    }
});

slot6.addEventListener("input", function() {
    if (slot6.value !== battle6) {
        var console6 = id6.options[id6.selectedIndex].value;
        name6.innerHTML = "<span class='console' id='subname6'>" + console6 + "</span> " + htmlEntities(slot6.value);
    }
    else if (slot4.value === "") {
        var console6 = id6.options[id6.selectedIndex].value;
        name6.innerHTML = "<span class='console' id='subname6'>" + console6 + "</span>";
    }
});

function change_console1() {
    var console1 = id1.options[id1.selectedIndex].value;
    var span = document.getElementById("subname1");
    span.innerHTML = console1;
}

  function change_console2() {
    var console2 = id2.options[id2.selectedIndex].value;
    var span = document.getElementById("subname2");
    span.innerHTML = console2;
}

  function change_console3() {
    var console3 = id3.options[id3.selectedIndex].value;
    var span = document.getElementById("subname3");
    span.innerHTML = console3;
}

  function change_console4() {
    var console4 = id4.options[id4.selectedIndex].value;
    var span = document.getElementById("subname4");
    span.innerHTML = console4;
}

function change_console5() {
    var console5 = id5.options[id5.selectedIndex].value;
    var span = document.getElementById("subname5");
    span.innerHTML = console5;
}

function change_console6() {
    var console6 = id6.options[id6.selectedIndex].value;
    var span = document.getElementById("subname6");
    span.innerHTML = console6;
}

function select1() {
    if (sel1.checked) {
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/battles/background_1.png";
        if(result1 != undefined) {
            preview.src = result1;
        }
        else {
            preview.src = "../../assets/img/battles/dummy_preview.png";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any battle yet"
        background.src = "../../assets/img/battles/background.png";
        preview.src = "../../assets/img/battles/dummy_preview.png";
    }
}

function select2() {
    if (sel2.checked) {
        sel1.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/battles/background_2.png";
        if(result2 != undefined) {
            preview.src = result2;
        }
        else {
            preview.src = "../../assets/img/battles/dummy_preview.png";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any battle yet"
        background.src = "../../assets/img/background.png";
        preview.src = "../../assets/img/battles/dummy_preview.png";
    }
}

function select3() {
    if (sel3.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/battles/background_3.png";
        if(result3 != undefined) {
            preview.src = result3;
        }
        else {
            preview.src = "../../assets/img/battles/dummy_preview.png";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any battle yet"
        background.src = "../../assets/img/battles/background.png";
        preview.src = "../../assets/img/battles/dummy_preview.png";
    }
}

function select4() {
    if (sel4.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/battles/background_4.png";
        if(result4 != undefined) {
            preview.src = result4;
        }
        else {
            preview.src = "../../assets/img/battles/dummy_preview.png";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any battle yet"
        background.src = "../../assets/img/battles/background.png";
        preview.src = "../../assets/img/battles/dummy_preview.png";
    }
}

function select5() {
    if (sel5.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel6.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/battles/background_5.png";
        if(result5 != undefined) {
            preview.src = result5;
        }
        else {
            preview.src = "../../assets/img/battles/dummy_preview.png";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any battle yet"
        background.src = "../../assets/img/battles/background.png";
        preview.src = "../../assets/img/battles/dummy_preview.png";
    }
}

function select6() {
    if (sel6.checked) {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        select.disabled = false;
        select.style = "cursor: pointer;"
        select.title = "Click to select a preview image"
        background.src = "../../assets/img/battles/background_6.png";
        if(result6 != undefined) {
            preview.src = result6;
        }
        else {
            preview.src = "../../assets/img/battles/dummy_preview.png";
        }
    }
    else {
        sel1.checked = false;
        sel2.checked = false;
        sel3.checked = false;
        sel4.checked = false;
        sel5.checked = false;
        sel6.checked = false;
        select.disabled = true;
        select.style = "cursor: not-allowed;"
        select.title = "You haven't selected any battle yet"
        background.src = "../../assets/img/battles/background.png";
        preview.src = "../../assets/img/battles/dummy_preview.png";
    }
}

function previewImage(input) {
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
        };

        reader.readAsDataURL(input.files[0]);
    }
}