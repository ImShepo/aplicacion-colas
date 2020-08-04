// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', (client) => {
    console.log('Conectado');
});

socket.on('disconnect', () => {
    console.log('Desconectado');
});

socket.on('estadoActual', (resp) => {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
})