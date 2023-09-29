document.getElementById('approveButton').addEventListener('click', function() {
    // Kirim pesan bahwa penjemputan disetujui
    sendMessage('Penjemputan disetujui');
});

document.getElementById('rejectButton').addEventListener('click', function() {
    // Kirim pesan bahwa penjemputan ditolak
    sendMessage('Penjemputan ditolak');
});

function sendMessage(message) {
    // Kirim pesan ke dashboard driver menggunakan WebSocket
    // Anda perlu mengganti URL WebSocket sesuai dengan server Anda
    var socket = new WebSocket('ws://localhost:3001');
    socket.onopen = function(event) {
        socket.send(message);
        socket.close(); // Tutup koneksi setelah mengirim pesan
    };
}