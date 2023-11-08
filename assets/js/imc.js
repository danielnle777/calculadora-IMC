const form = document.getElementById("form");


form.addEventListener("submit", function(event){
    // previne o comportamento padrao do evento submit do JS, ou seja inpede o recarregamento da pagina

    event.preventDefault();
    const peso = document.getElementById("weight").value;
    const altura = document.getElementById("height").value;
    const imc = peso / (altura*altura)
    const campoImc = document.getElementById("value");  // Aonde aperece o IMC
    let descricao;

    document.getElementById("infos").classList.remove("hidden");
    campoImc.classList.add("attention")
    

    // Condições do IMC
    if(imc < 18.5 ){
       descricao = "Cuidado! Você está a baixo do Peso"

    }else if(imc >= 18.5 && imc <= 24.9){
        descricao = "Parabéns! Você esta no Peso Ideal"
        campoImc.classList.remove("attention")
        campoImc.classList.add("normal")

    }else if(imc >= 25 && imc <= 29.9){
        descricao = "Cuidado! Você esta com Sobre Peso"
       
    }else if(imc >= 30 && imc <= 34.9){
        descricao = "Cuidado! Você está com Obesidade I"
    
    }else if(imc >= 35 && imc <= 39.9){
        descricao = "Cuidado! Você está com Obesidade II (Severa)"

    }else{ 
        descricao = "Cuidado! Você está com Obesidade III (Morbida)"

    }    


   
    document.getElementById("description").textContent = descricao
    campoImc.textContent = imc.toFixed("2");

});
