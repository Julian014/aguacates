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


// Verificar la conexión


// Ruta para la página principal
app.get('/producto', (req, res) => {
    res.render('productos/todo.hbs'); // Renderiza la vista 'home.hbs'
});




// Ruta para la página principal
app.get('/principal', (req, res) => {
    res.render('principal/principal.hbs'); // Renderiza la vista 'home.hbs'
});



// Ruta para la página principal
app.get('/servicios', (req, res) => {
    res.render('servicios/servicios.hbs'); // Renderiza la vista 'home.hbs'
});



// Endpoint para recibir mensajes del chatbot
app.post('/chatbot', (req, res) => {
    const message = req.body.message;

    // Aquí puedes implementar la lógica del chatbot para procesar el mensaje y generar una respuesta
    const response = generateResponse(message);

    res.json({ response });
});






function generateResponse(message) {
    // Aquí puedes implementar la lógica para generar la respuesta del chatbot
    // Por ejemplo, puedes usar una librería de procesamiento del lenguaje natural (NLP) como Natural o comprender la intención del usuario y generar una respuesta apropiada.
    // Por ahora, simplemente devolveremos un mensaje de ejemplo
    return "¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?";
}


app.post('/finalizar-compra', (req, res) => {
    const carrito = req.body;
    console.log('Carrito recibido:', carrito);
    // Aquí puedes agregar la lógica para procesar el carrito, como guardar en la base de datos o procesar pagos
    res.send('Compra finalizada con éxito!');
});























// Iniciar el servidor
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
