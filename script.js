const bookingForm = document.getElementById("booking-form")

bookingForm.addEventListener("submit", function(event)  {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    const salonNumber = "94771234567";

    const whatsappMessage = 
        `Hello Glow & Grace Salon!

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
Time: ${time}
Message: ${message}`;

    const encodeMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = 
        `https://wa.me/${salonNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
});