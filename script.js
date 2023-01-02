let buttomElement = document.querySelector('.add');
buttomElement.innerHTML = "adicionar";

let container = document.querySelector("#container");
let inputElement = document.createElement("input");
inputElement.classList = ("texto");
inputElement.placeholder = "Digite aqui:"
container.appendChild(inputElement);
container.insertBefore(inputElement, buttomElement);






function adicionar() {
    if (inputElement.value){
    var container = document.querySelector("#container");
    var divElement = document.createElement("div");

    

    var textElement = document.querySelector(".texto");
    
    divElement.textContent = textElement.value;

    container.appendChild(divElement);

    var btnElement = document.createElement("buttom");
    btnElement.classList = "remove-btn";
    btnElement.innerHTML = "remover";
    
    divElement.appendChild(btnElement);

    textElement.value = ""
    

    

}

    btnElement.onclick = () => {
        container.removeChild(divElement);
    }

}
