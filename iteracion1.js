// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
let boton = document.querySelector("button");

boton.onclick = function () {  
    console.log(boton.getAttribute("id"));
}

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let inputFocus = document.querySelector("input[class='focus']");
inputFocus.onfocus = function () {  
    console.log(inputFocus.value);
}

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let inputValue = document.querySelector("input[class='value']");

inputValue.oninput = function(){
    console.log(inputValue.value);
}