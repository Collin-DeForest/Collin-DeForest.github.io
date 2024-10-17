//Functions for different modes
function setSummerMode() {
    document.getElementById('spring').style.display = 'none';
    document.getElementById('winter').style.display = 'none';
    document.getElementById('fall').style.display = 'none';
    document.getElementById('summer').style.display = 'grid';
    document.body.style.backgroundColor = "#FFD700";  
}

function setSpringMode() {
    document.getElementById('spring').style.display = 'grid';
    document.getElementById('winter').style.display = 'none';
    document.getElementById('fall').style.display = 'none';
    document.getElementById('summer').style.display = 'none';
    document.body.style.backgroundColor = "lightgreen";  
}

function setFallMode() {
    document.getElementById('spring').style.display = 'none';
    document.getElementById('winter').style.display = 'none';
    document.getElementById('fall').style.display = 'grid';
    document.getElementById('summer').style.display = 'none';
    document.body.style.backgroundColor = "orange";  
}

function setWinterMode() {
    document.getElementById('spring').style.display = 'none';
    document.getElementById('winter').style.display = 'grid';
    document.getElementById('fall').style.display = 'none';
    document.getElementById('summer').style.display = 'none';
    document.body.style.backgroundColor = "#C8E9E9";
}
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}
