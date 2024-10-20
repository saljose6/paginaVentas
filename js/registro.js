document.getElementById('switch-link').addEventListener('click', function(event) {
    event.preventDefault();

    const formTitle = document.getElementById('welcome-line-2');
    const submitButton = document.getElementById('submit-button');
    const switchLink = document.getElementById('switch-link');
    const emailGroup = document.getElementById('email-group');
    const formElement = document.getElementById('form');
    const indicatorLeft = document.getElementById('indicator-left');
    const indicatorMiddle = document.getElementById('indicator-middle');
    const indicatorRight = document.getElementById('indicator-right');

    if (submitButton.textContent === "Login") {
        // Cambiar a formulario de registro
        formTitle.textContent = "Create Your Account";
        submitButton.textContent = "Sign Up";
        switchLink.textContent = "Already have an account? Login";
        emailGroup.style.display = "block";
        formElement.style.height = "580px";

        // Cambiar sombra a rojo y actualizar los indicadores
        formElement.style.boxShadow = "0px 15px 60px #FF6347";
        indicatorLeft.classList.remove("active-login");
        indicatorMiddle.classList.add("active-register");
        indicatorRight.classList.remove("active-login");
    } else {
        // Cambiar a formulario de login
        formTitle.textContent = "Welcome Back, User";
        submitButton.textContent = "Login";
        switchLink.textContent = "Don’t have an account? Sign Up";
        emailGroup.style.display = "none";
        formElement.style.height = "520px";

        // Cambiar sombra a azul y actualizar los indicadores
        formElement.style.boxShadow = "0px 15px 60px #0000FF";
        indicatorMiddle.classList.remove("active-register");
        indicatorLeft.classList.add("active-login");
        indicatorRight.classList.remove("active-login");
    }
});
