Proyecto Servidor HTTPS - Node.js

Este proyecto consiste en un servidor web básico desarrollado en Node.js, que soporta conexiones tanto HTTP como HTTPS.

Estructura del Proyecto

- `public/`: Contiene los archivos estáticos del sitio web (HTML, CSS, JS).
- `server.js`: Archivo principal del servidor.
- `package.json`: Definición de dependencias y scripts del proyecto.
- `.gitignore`: Configuración para omitir archivos sensibles y pesados

Por motivos de seguridad, la carpeta cert/ ha sido excluida del repositorio mediante el archivo .gitignore. Para que el servidor HTTPS funcione, debe:

-Crear una carpeta llamada cert en la raíz del proyecto.

-Añadir sus archivos key.pem y cert.pem dentro de dicha carpeta

Para instalar las dependencias, ejecute el siguiente comando en la raíz del proyecto para generar la carpeta node_modules:
**npm install**


El servidor estará disponible en:
HTTP: http://localhost:3000
HTTPS: https://localhost:8080
