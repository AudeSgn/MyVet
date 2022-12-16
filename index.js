let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    let myInput = document.getElementById('nom');
    let myRegex = /^[a-zA-Z-\s]+$/;

    if (MyInput.value = "") {
        let myError = document.getElementById("error");
        myError.innerHTML = "Le champs est requis";
        myError.style.color = 'red';
        e.preventDeFault();
    } else if (myRegex.test(myInput.value) = false) {
        let myError = document.getElementById("error");
        myError.innerHTML = "Le nom doit comporter des lettres ou des tirets uniquement";
        myError.style.color = 'red';
        e.preventDeFault();
    }
});