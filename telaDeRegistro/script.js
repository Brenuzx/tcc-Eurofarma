function validateForm(event) {
    // Obter valores dos campos
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validar se os campos estão preenchidos
    if (firstName === "" || lastName === "" || email === "" || password === "") {
        alert("Todos os campos são obrigatórios");
        event.preventDefault(); // Impede o envio do formulário se campos estiverem vazios
        return;
    }

    // Outras lógicas de validação podem ser adicionadas conforme necessário

    // Se todos os campos estão preenchidos, o formulário será enviado
    alert("Registrado com sucesso!");
}