// API Backend Ikagne

const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Bienvenue dans l'API Ikagne",
        status: "active"
    }));

});

server.listen(3000, () => {
    console.log("Serveur Ikagne démarré sur le port 3000");
});
