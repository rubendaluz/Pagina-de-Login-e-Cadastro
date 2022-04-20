document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#CriarConta");

    document.querySelector("#linkCriarConta").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    })

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    })
})