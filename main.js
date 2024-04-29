document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the values of the input fields
    var numA = parseInt(document.getElementById('numberA').value);
    var numB = parseInt(document.getElementById('numberB').value);
    
    // Check if B is greater than A
    if (numB > numA) {
        document.getElementById('result').innerHTML = "Formulário válido!";
    } else {
        document.getElementById('result').innerHTML = "O número B deve ser maior que o número A. Formulário inválido.";
    }
});