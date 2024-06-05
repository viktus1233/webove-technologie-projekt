document.getElementById('reservation-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var arrival = document.getElementById('arrival').value;
    var nights = document.getElementById('nights').value;
    var roomType = document.getElementById('room-type').value;

    if (!name || !email || !arrival || !nights || !roomType) {
        alert('Všetky polia sú povinné!');
        event.preventDefault();
        return false;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Zadajte platný email!');
        event.preventDefault();
        return false;
    }

    if (nights <= 0) {
        alert('Počet nocí musí byť väčší ako 0!');
        event.preventDefault();
        return false;
    }
});
