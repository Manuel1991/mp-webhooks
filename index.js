const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/status", (req, res) => {
    res.status(200).send("API funcionando correctamente");
});

app.post("/webhooks/mercadopago", (req, res) => {
    console.log("\n===============\n");
    
    console.log("=== HEADERS ===");
    console.log(req.headers);

    console.log("=== APPLICATION_NUMBER ===");
    console.log(req.query.applicationNumber);
    
    console.log("=== BODY ===");
    console.log(req.body);
    
    res.status(200).send("Webhook recibido");
});

app.post("/webhooks/mercadopago", (req, res) => {
    console.log("=== HEADERS ===");
    console.log(req.headers);

    console.log("=== BODY ===");
    console.log(req.body);

    res.status(200).send("Webhook recibido");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
