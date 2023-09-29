var socket = new WebSocket('ws://localhost:3001'); 

socket.onopen = function(event) {
    console.log('WebSocket connection opened');
};

socket.onmessage = function(event) {
    var status = event.data;
    console.log('Received status:', status);
    // Update status di dashboard driver
    document.getElementById('pickup-status').textContent = status;
};