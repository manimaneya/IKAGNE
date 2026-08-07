const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        app: "IKAGNE",
        version: "1.0",
        status: "Serveur en ligne"
    });
});

app.listen(PORT, () => {
    console.log(`Serveur IKAGNE démarré sur le port ${PORT}`);
});
