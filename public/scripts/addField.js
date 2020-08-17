//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)


//Quando clicar no botao

//Executar uma acao
function cloneField(){
    
    //duplicar os campos
   const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')


    //para cada campo limpar

    fields.forEach(function(field) {
        
        field.value = ""
    });

   

    console.log(fields)

    //colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)


}

    