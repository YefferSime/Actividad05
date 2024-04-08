const express = require('express');
const app = express();
const port = 3000;

// Configuración de Handlebars
//app.set('view engine', 'hbs');

// Configuración de EJS
 //app.set('view engine', 'ejs');

// Configuración de Pug
 app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { message: 'Bienvenidos a los motores de plantilla' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
