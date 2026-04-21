// Importamos Express
const express = require("express");

// Importamos HTTPS y HTTP
const https = require("https");
const http = require("http");

// Importamos FS y Path
const fs = require("fs");
const path = require("path");

// Creamos la aplicación Express
const app = express();

// Puertos
const HTTP_PORT = 3000;
const HTTPS_PORT = 8080;

// Configuración del certificado SSL
const options = {
  key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem"))
};

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Servidor HTTP
http.createServer(app).listen(HTTP_PORT, () => {
  console.log(`Servidor HTTP ejecutándose en http://localhost:${HTTP_PORT}`);
});

// Servidor HTTPS
https.createServer(options, app).listen(HTTPS_PORT, () => {
  console.log(`Servidor HTTPS ejecutándose en https://localhost:${HTTPS_PORT}`);
});