// Ikagne Application JavaScript

console.log("Ikagne est lancé !");

// Message de bienvenue
function bienvenue() {
    alert("Bienvenue sur Ikagne !");
}

// Activation du Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
        .then(() => {
            console.log("Service Worker activé !");
        })
        .catch((error) => {
            console.log("Erreur Service Worker :", error);
        });
    });
}
