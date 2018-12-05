const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res
        .status(404)
        .send({
            error: 'Page not found.',
            name: 'Todo App v1.0'
        });

});

app.get('/users', (req, res) => {
    res.status(200)
        .send([
            {
                age: 41,
                name: 'Carlos'
            },
            {
                age: 42,
                name: 'Catarina'
            }
        ]);
});

app.listen(7000);

module.exports.app = app;