function searchContent() {
    const keyword = document.getElementById("searchInput").value.trim();

    if (keyword === "") {
        alert("Veuillez saisir un mot-clé.");
        return;
    }

    alert("Recherche : " + keyword);
}
