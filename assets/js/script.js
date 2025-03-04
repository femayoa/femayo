/**********************
 * Script for Ojfirst Autos
 * Designed by Omojide
 * 
 * Jan 8, 2025
 ***********************/

// Function for navbar translate
const navbar = document.getElementById('nav-menu');
let scrolled = false;

window.onscroll = function() {
    if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-65px)';
        }
        setTimeout (function() {
            navbar.style.transform = 'translateY(0)';
            scrolled = true
        }, 200)
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
   }

//  Contact form Validation
function getformValidation(form) {
    const NAME = form.elements['name']; // Gets user's name
    const EMAIL = form.elements['email'];   // Gets user's email
    const PHONE_NUM = form.elements['phone'];   // Gets user's phine number
    const USER_MSG = form.elements['textarea']; // Gets user's message

    let errorMsg = document.querySelector('#validation') // Displays error message

    if (!form.checkValidity()) {
        errorMsg.textContent = 'Please insert your details';
        if (!NAME.checkValidity() && EMAIL.checkValidity() && PHONE_NUM.checkValidity() && USER_MSG.checkValidity()) {
            errorMsg.textContent = 'Name field is empty';
            NAME.value = '';
        }   else if (NAME.checkValidity() && !EMAIL.checkValidity() && PHONE_NUM.checkValidity() && USER_MSG.checkValidity()) {
            errorMsg.textContent = 'Email field is empty or wrong pattern'
            EMAIL.value = '';
        }   else if (NAME.checkValidity() && EMAIL.checkValidity() && !PHONE_NUM.checkValidity() && USER_MSG.checkValidity()) {
            errorMsg.textContent = 'Please insert your contact number'
            PHONE_NUM.value = '';
        }   else if (NAME.checkValidity() && EMAIL.checkValidity() && PHONE_NUM.checkValidity() && !USER_MSG.checkValidity()) {
            errorMsg.textContent = 'Message field is empty'
            USER_MSG.value = '';
        }
    } else {
        errorMsg.textContent = '';
        NAME = NAME.value;
        EMAIL = EMAIL.value;
        PHONE_NUM = PHONE_NUM.value;
        USER_MSG = USER_MSG.value;
    }
}