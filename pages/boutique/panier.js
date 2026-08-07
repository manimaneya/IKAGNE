// Panier Ikagne

let panier = [];

function ajouterPanier(produit) {
    panier.push(produit);
    alert(produit + " ajouté au panier !");
}

function ouvrirPanier() {

    if (panier.length === 0) {
        alert("Votre panier est vide.");
    } else {
        alert(
            "Votre panier :\n\n" +
            panier.join("\n")
        );
    }

}
