function showSidebar(isShown) {
    const sidebar = document.querySelector(".sidebar")
    if (isShown === true) {
        sidebar.style.display = "flex"
    } else {
        sidebar.style.display = "none"
    }
}

document.getElementById("hamburger").onclick = function() {
    showSidebar(true)
}

document.getElementById("close").onclick = function() {
    showSidebar(false)
}

function redirect(url) {
    window.open(url, '_blank');
}

window.addEventListener('load', function () {
    const heroImage = document.querySelector('.hero-img-container');
    heroImage.classList.add('hero-img-loaded'); // Add the class after the page is fully loaded
});

// Redirect 
document.getElementById("cv").onclick = function () {
    redirect("https://drive.google.com/file/d/1lXG3qQ2X3BQAgv8GFUuHlKp3_sKt5yBg/view?usp=drivesdk")
}

document.getElementById("github").onclick = function () {
    redirect("https://github.com/jbberbon")
}

document.getElementById("linkedin").onclick = function () {
    redirect("https://www.linkedin.com/in/jbberbon-843916219/")
}