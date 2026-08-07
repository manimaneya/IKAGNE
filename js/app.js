// Ikagne Application JavaScript

console.log("Ikagne est lancé !");

// Message de bienvenue
function bienvenue() {
    alert("Bienvenue sur Ikagne !");
}

// Activation du mode application mobile
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        console.log("Service Worker prêt");
    });
}
