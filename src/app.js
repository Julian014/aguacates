const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const exphbs = require("express-handlebars"); // Importa express-handlebars

const app = express();
const cron = require('node-cron');
const http = require('http');
// Configuración de Handlebars
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");
app.use(express.static(path.join(__dirname, "public")));

// Conección a la base de datos

app.use(express.json());  // Asegúrate de que esta línea esté antes de las rutas

// Verificar la conexión


// Ruta para la página principal
app.get('/servientrega', (req, res) => {
    res.render('servientrega.hbs');
});




app.post('/enviar-ubicacion', (req, res) => {
    const { latitud, longitud } = req.body;

    // Verificar que se hayan recibido correctamente los datos
    if (!latitud || !longitud) {
        return res.status(400).json({ error: 'Latitud y longitud son requeridas' });
    }

    console.log(`Ubicación recibida: Latitud - ${latitud}, Longitud - ${longitud}`);

    // Puedes realizar cualquier acción con la ubicación aquí
    res.status(200).json({ message: 'Ubicación recibida correctamente' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
