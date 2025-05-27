document.addEventListener("DOMContentLoaded", function () {
    alert("Страница загружена!");

    let counter = 0;
    const counterElement = document.getElementById("counter");

    document.getElementById("increment").onclick = function () {
        counter++;
        counterElement.textContent = counter;
    };

    document.getElementById("decrement").addEventListener("click", function () {
        counter--;
        counterElement.textContent = counter;
    });

    const authForm = document.getElementById("authForm");
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const authMessage = document.getElementById("authMessage");

    if (localStorage.getItem("login")) {
        loginInput.value = localStorage.getItem("login");
    }
    if (localStorage.getItem("password")) {
        passwordInput.value = localStorage.getItem("password");
    }

    document.getElementById("clearForm").onclick = function () {
        const formData = new FormData(authForm);
        formData.set("login", "");
        formData.set("password", "");
        loginInput.value = formData.get("login");
        passwordInput.value = formData.get("password");
        localStorage.removeItem("login");
        localStorage.removeItem("password");
    };

    authForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(authForm);
        const login = formData.get("login").trim();
        const password = formData.get("password").trim();

        if (login === "admin" && password === "admin") {
            authMessage.textContent = "Вход выполнен успешно!";
            formData.set("login", login);
            formData.set("password", password);
            localStorage.setItem("login", formData.get("login"));
            localStorage.setItem("password", formData.get("password"));
        } else {
            authMessage.textContent = "Ошибка входа!";
        }
    });
});