document.getElementById("surpriseButton").addEventListener("click", function() {
    var surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");
    if (!surprise.classList.contains("hidden")) {
        this.textContent = "Ocultar sorpresa";
    } else {
        this.textContent = "Click aqui preciosa ♡";
    }
});
