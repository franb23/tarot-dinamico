const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Ruta para servir archivos estáticos desde la carpeta 'estructura'
app.use(express.static(path.join(__dirname, 'estructura')));

// Ruta para servir archivos estáticos desde la carpeta 'estructura/menu'
app.use('/menu', express.static(path.join(__dirname, 'estructura', 'menu')));

// Rutas específicas para cada sección del menú
app.get('/tiradas-personalizadas', (req, res) => {
    res.sendFile(path.join(__dirname, 'estructura', 'menu', 'tiradas.html'));
});

app.get('/arcanos-mayores', (req, res) => {
    res.sendFile(path.join(__dirname, 'estructura', 'menu', 'arcanos_mayores.html'));
});

app.get('/arcanos-menores', (req, res) => {
    res.sendFile(path.join(__dirname, 'estructura', 'menu', 'arcanos_menores.html'));
});

// Ruta principal para cargar el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'estructura', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
