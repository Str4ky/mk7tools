function generate_name() {
    var track = document.getElementById("track").value;
    var name = document.getElementById("name").value;
    var laps = document.getElementById("laps").value;
    var final = document.getElementById("final");
    var file = document.getElementById("file");

    if(name == "") {
        final.value = "You need to enter a name for your track...";
        file.innerHTML = "";
    }
    else if(laps != "") {
        final.value = track + "." + name + "." + laps;
        file.innerHTML = "The name of the file will be " + track + "." + name + "." + laps + ".szs";
    }
    else {
        final.value = track + "." + name;
        file.innerHTML = "The name of the file will be " + track + "." + name + ".szs";
    }
}