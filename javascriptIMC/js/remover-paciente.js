var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    
//remove com um delay de 400 milessegundos, e o evento de clique para remover 
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();

        
    },400)
    

});
