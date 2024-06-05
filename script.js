document.addEventListener('DOMContentLoaded', function() {
    // Načítanie existujúcich rezervácií po načítaní stránky
    loadReservations();

    // Spracovanie formulára pre vytvorenie novej rezervácie
    document.getElementById("reservationForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var arrivalDate = document.getElementById("arrivalDate").value;
        var numberOfNights = document.getElementById("numberOfNights").value;
        var roomType = document.getElementById("roomType").value;
        var breakfast = document.getElementById("breakfast").checked;
        var specialRequests = document.getElementById("specialRequests").value;

        // Vytvorenie nového objektu rezervácie
        var newReservation = {
            "name": name,
            "email": email,
            "arrivalDate": arrivalDate,
            "numberOfNights": numberOfNights,
            "roomType": roomType,
            "breakfast": breakfast,
            "specialRequests": specialRequests
        };

        // Pridanie novej rezervácie do JSON súboru
        addReservation(newReservation);

        // Aktualizácia zobrazenia rezervácií
        loadReservations();

        // Vyčistenie formulára
        this.reset();
    });
});

// Funkcia načítania existujúcich rezervácií z JSON súboru
function loadReservations() {
    fetch('reservation.json')
        .then(response => response.json())
        .then(data => displayReservations(data.reservations))
        .catch(error => console.error('Nastala chyba:', error));
}

// Funkcia pridania novej rezervácie do JSON súboru
function addReservation(newReservation) {
    fetch('reservation.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReservation)
    })
    .then(response => response.json())
    .then(data => console.log('Rezervácia bola úspešne vyt
