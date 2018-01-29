let socket = io();
socket.on('connect', function () {
    console.log("Connected to server");

    socket.emit('createMessage', {
        to: "sushant mahajan",
        text:"Hi, lets have sex tonight?"
    })

});

socket.on('disconnect', function () {
    console.log("Disconnected from server");
});

socket.on('newMessage', function (message) {
    console.log("received new message", message);
});