document.addEventListener('DOMContentLoaded', function () {
    const eyeElement = document.querySelector(".feather-eye")
    const eyeClosedElement = document.querySelector(".feather-eye-off")
    eyeElement.addEventListener('click', toggleEye)
    eyeClosedElement.addEventListener('click', toggleEye)

    function toggleEye() {
        const passwordInput = document.getElementById("id_password")
        passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
        eyeElement.classList.toggle("hide")
        eyeClosedElement.classList.toggle("hide")
    }
})