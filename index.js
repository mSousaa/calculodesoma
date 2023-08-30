const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    var medida1 = document.getElementById('medida1').value
    var medida2 = document.getElementById('medida2').value
    var medida3 = document.getElementById('medida3').value
    var medida4 = document.getElementById('medida4').value

    var resultado = parseInt(medida1) + parseInt(medida2) + parseInt(medida3) + parseInt(medida4)

    const valor = document.getElementById('valor')

    valor.textContent = resultado

})