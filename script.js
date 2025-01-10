const navtoggle = document.querySelector('.nav-toggle');
const navlist = document.querySelector('.nav_list');
const navlink = document.querySelectorAll('.nav_link');

navtoggle.addEventListener('click', () => {
    navlist.classList.toggle('show');
    navtoggle.querySelector('i').classList.toggle('fa-xmark');
    navtoggle.querySelector('i').classList.item('fa-bars');
})
navlink.forEach(link => {
    link.addEventListener('click', function () {

        if (window.innerWidth <= 768) {
            navlist.classList.toggle('show');
            navtoggle.querySelector('i').classList.toggle('fa-xmark');
            navtoggle.querySelector('i').classList.item('fa-bars');
        }
    })
});
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent form from refreshing the page

//     const formData = new FormData(this);

//     const data = {
//         from_name: formData.get('name'),        // Maps to {{from_name}} in the template
//         from_email: formData.get('email'),      // Maps to {{from_email}} if added to template
//         message: formData.get('message'),       // Maps to {{message}} in the template
//         service_id: 'service_portfolio',        // Your service ID (from EmailJS dashboard)
//         template_id: 'template_y15kmg9',        // Your template ID (from EmailJS dashboard)
//         user_id: 'eQvWJFCF2qPI5ZAgi'           // Your User ID (from EmailJS dashboard)
//     };

//     const headers = {
//         'Content-Type': 'application/json'
//     };

//     console.log("Data being sent to EmailJS:", data);  // Log data to console for debugging

//     fetch('https://api.emailjs.com/api/v1.0/email/send', {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         console.log("Response status:", response.status);  // Log the response status code

//         if (!response.ok) {
//             return response.text();  // Read it as text for detailed error
//         }

//         return response.json();  // Parse as JSON if response is okay
//     })
//     .then(responseData => {
//         if (typeof responseData === 'string') {
//             // If response is text (likely an error message)
//             console.error("Error response from EmailJS:", responseData);
//             alert("Error: " + responseData);  // Alert the error message
//         } else {
//             // Success
//             alert("Message sent successfully!");
//         }
//     })
//     .catch((error) => {
//         console.error("Error:", error);  // Log error details
//         alert("An error occurred: " + error.message);  // Display the error message in an alert
//     });
// });
