// DOM Elements
const loginContainer = document.querySelector(".login-container");
const loginUsername = document.getElementById("loginUsername");
const loginForm = document.getElementById("loginForm");

const showPasswordIcon = document.querySelector("i.far.fa-eye");
const loginPassword = document.getElementById("loginPassword");
const hideshowLabel = document.getElementById("showLabel");


// *Show/Hide Password
showPasswordIcon.addEventListener("click", showPassword);
function showPassword(){
    if (loginPassword.type === "password"){
        loginPassword.type = "text";
        hideshowLabel.innerHTML = "Hide password"
    }
    else{
        loginPassword.type = "password";
        showPasswordIcon.style.color = "#ddd";
        hideshowLabel.innerHTML = "Show password"
    }
    showPasswordIcon.classList.toggle("fa-eye-slash");
    showPasswordIcon.classList.toggle("fa-eye");
}

// *Simple Validation

loginForm.addEventListener("submit", submitValidation);

function submitValidation(event){
    event.preventDefault();
    // Username validation
    if (loginUsername.value === "" || loginUsername.value.length < 3){
        showError(loginUsername, "Username cannot be empty and must be larger than 3");
    }else{
        showSuccess(loginUsername);
    }
    //Password validation
    if (loginPassword.value === "" || loginPassword.value.length < 6){
        showError(loginPassword, "Password cannot be empty and must be larger than 6");
    }else{
        showSuccess(loginPassword);
    }
}

function showError(input, message){
    const formField = input.parentElement;
    formField.className = 'form-field error';
    if((formField.className = "form-field error")){
        const alert_message = formField.querySelector(".alert-message");
        alert_message.style.visibility = "visible";
        alert_message.style.color = "red";
        alert_message.innerHTML = message;
    }
}

function showSuccess(input){
    const formField = input.parentElement;
    formField.className = 'form-field success';
    if((formField.className = "form-field success")){
        const alert_message = formField.querySelector(".alert-message");
        alert_message.style.visibility = "hidden";
    }
}

// Request Form

const requestForm = document.querySelector(".form-request");

requestForm.style.display='none';

const showRequestForm = document.querySelector(".reset-password");

showRequestForm.addEventListener('click', function(e){
    e.preventDefault();
    if(requestForm.style.display !== "block"){
        loginContainer.style.minHeight = "650px";
        requestForm.style.display = "block";
    }else{
        requestForm.style.display = "none";
        loginContainer.style.minHeight = "initial";
    }
});

requestForm.addEventListener('submit', request);

function request(e){
    e.preventDefault();

    if (requestForm.style.display === "block"){
        const requestEmail = document.getElementById('requestEmail');
        if (requestEmail.value === ""){
            showError(requestEmail, 'Email can not be empty');
        }else{
            showSuccess(requestEmail);
        }
    }
}