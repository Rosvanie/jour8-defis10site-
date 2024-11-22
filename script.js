document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});






// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    const calendar = document.getElementById('calendar');
    
    // Simule des dates indisponibles
    const unavailableDates = ['2024-12-25', '2024-12-31'];

    // Gestion du formulaire
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const date = formData.get('date');
        const guests = formData.get('guests');

        if (unavailableDates.includes(date)) {
            alert(`Désolé, la date ${date} est déjà réservée.`);
            return;
        }

        alert(`Merci ${name}, votre réservation pour ${guests} personne(s) le ${date} a été confirmée.`);
        form.reset();
    });

    // Générer un calendrier simple
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    let calendarHTML = '<div class="days">';
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(today.getFullYear(), today.getMonth(), i);
        const dateString = date.toISOString().split('T')[0];
        const isUnavailable = unavailableDates.includes(dateString);

        calendarHTML += `<div class="day ${isUnavailable ? 'unavailable' : ''}">
            ${i}
        </div>`;
    }
    calendarHTML += '</div>';
    calendar.innerHTML = calendarHTML;
});



