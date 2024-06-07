document.getElementById('reservation-form').addEventListener('submit', function(event) {
    // Získanie hodnôt z formulára
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let arrival = document.getElementById('arrival').value;
    let nights = document.getElementById('nights').value;
    let roomType = document.getElementById('room-type').value;

    // Reset chýb
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('arrivalError').style.display = 'none';
    document.getElementById('nightsError').style.display = 'none';
    document.getElementById('roomTypeError').style.display = 'none';

    // Flag pre validitu
    let valid = true;

    // Validácia mena
    if (name.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Validácia emailu
    if (email.trim() === '') {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').textContent = 'Prosím, zadajte platný email.';
        valid = false;
    }

    // Validácia dátumu príchodu
    if (arrival.trim() === '') {
        document.getElementById('arrivalError').style.display = 'block';
        valid = false;
    }

    // Validácia počtu nocí
    if (nights.trim() === '' || parseInt(nights) < 1) {
        document.getElementById('nightsError').style.display = 'block';
        valid = false;
    }

    // Validácia typu izby
    if (roomType.trim() === '') {
        document.getElementById('roomTypeError').style.display = 'block';
        valid = false;
    }

    // Ak je formulár neplatný, zastavíme odosielanie
    if (!valid) {
        event.preventDefault();
    }
});
