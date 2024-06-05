$(document).ready(function() {
    $.ajax({
        url: 'reservation.json',
        dataType: 'json',
        success: function(data) {
            var reservations = data.reservations;
            var tableBody = $('#reservations-table tbody');
            reservations.forEach(function(reservation) {
                var row = '<tr>' +
                    '<td>' + reservation.name + '</td>' +
                    '<td>' + reservation.email + '</td>' +
                    '<td>' + reservation.arrival + '</td>' +
                    '<td>' + reservation.nights + '</td>' +
                    '<td>' + reservation.roomType + '</td>' +
                    '<td>' + (reservation.breakfast ? 'Áno' : 'Nie') + '</td>' +
                    '<td>' + reservation.requests + '</td>' +
                    '<td>' + (reservation.status.confirmed ? 'Áno' : 'Nie') + '</td>' +
                    '<td>' + (reservation.status.paid ? 'Áno' : 'Nie') + '</td>' +
                    '</tr>';
                tableBody.append(row);
            });
        },
        error: function() {
            alert('Nepodarilo sa načítať dáta o rezerváciách.');
        }
    });
});
