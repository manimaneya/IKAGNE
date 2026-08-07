// Ikagne - Publication de vidéos

function publierVideo() {
    const titre = document.getElementById("titreVideo").value;

    if (titre.trim() === "") {
        alert("Veuillez saisir un titre pour la vidéo.");
        return;
    }

    alert("Votre vidéo \"" + titre + "\" est prête à être publiée !");
}
