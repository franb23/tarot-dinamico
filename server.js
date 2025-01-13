const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Datos de las cartas
const tarotCards = [
    { name: "El Loco", file: "cartas/arcanos_mayores/0.html" },
    { name: "El Mago", file: "cartas/arcanos_mayores/1.html" },
    { name: "La Sacerdotisa", file: "cartas/arcanos_mayores/2.html" },
    { name: "La Emperatriz", file: "cartas/arcanos_mayores/3.html" },
    { name: "El Emperador", file: "cartas/arcanos_mayores/4.html" },
    { name: "El Sumo Sacerdote", file: "cartas/arcanos_mayores/5.html" },
    { name: "Los Enamorados", file: "cartas/arcanos_mayores/6.html" },
    { name: "El Carro", file: "cartas/arcanos_mayores/7.html" },
    { name: "La Justicia", file: "cartas/arcanos_mayores/8.html" },
    { name: "El Ermitaño", file: "cartas/arcanos_mayores/9.html" },
    { name: "La Rueda de la Fortuna", file: "cartas/arcanos_mayores/10.html" },
    { name: "La Fuerza", file: "cartas/arcanos_mayores/11.html" },
    { name: "El Colgado", file: "cartas/arcanos_mayores/12.html" },
    { name: "La Muerte", file: "cartas/arcanos_mayores/13.html" },
    { name: "La Templanza", file: "cartas/arcanos_mayores/14.html" },
    { name: "El Diablo", file: "cartas/arcanos_mayores/15.html" },
    { name: "La Torre", file: "cartas/arcanos_mayores/16.html" },
    { name: "La Estrella", file: "cartas/arcanos_mayores/17.html" },
    { name: "La Luna", file: "cartas/arcanos_mayores/18.html" },
    { name: "El Sol", file: "cartas/arcanos_mayores/19.html" },
    { name: "El Juicio", file: "cartas/arcanos_mayores/20.html" },
    { name: "El Mundo", file: "cartas/arcanos_mayores/21.html" }
];

// Ruta para servir archivos estáticos desde la carpeta 'estructura'
app.use(express.static(path.join(__dirname, 'estructura')));

// Ruta para manejar las búsquedas
app.get('/buscar', (req, res) => {
    const cardName = req.query.name; // Obtiene el nombre de la carta desde la URL

    // Verifica si el nombre fue proporcionado
    if (!cardName) {
        return res.status(400).send('El nombre de la carta es obligatorio');
    }

    // Busca la carta por su nombre
    const card = tarotCards.find(c => c.name.toLowerCase() === cardName.toLowerCase());

    if (card) {
        // Redirige al archivo HTML correspondiente
        res.redirect(`/${card.file}`);
    } else {
        // Si no encuentra la carta, muestra un mensaje de error
        res.status(404).send('Carta no encontrada');
    }
});

// Ruta principal para cargar el archivo principal.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'estructura', 'principal.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);

});
