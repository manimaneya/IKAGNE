// Connexion Ikagne

function connexion() {

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if(email && password) {
        alert("Connexion réussie sur Ikagne !");
    } else {
        alert("Remplis tous les champs");
    }

}
