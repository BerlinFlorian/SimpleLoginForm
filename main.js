// DOM Elements
const showPasswordIcon = document.querySelector("i.far.fa-eye");
const loginPassword = document.getElementById("loginPassword");

showPasswordIcon.addEventListener("click", showPassword);

function showPassword(){
    if (loginPassword.type === "password"){
        loginPassword.type = "text";
    }
    else{
        loginPassword.type = "password";
        showPasswordIcon.style.color = "#ddd";
    }
    showPasswordIcon.classList.toggle("fa-eye-slash");
    showPasswordIcon.classList.toggle("fa-eye");
}