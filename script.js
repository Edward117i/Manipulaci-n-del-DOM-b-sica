/*CSS
h1{}
.parrafito{...}
#pip{...}*/

const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const inpu1 = document.querySelector("#calculo1");
const inpu2 = document.querySelector("#calculo2");
const suma = document.querySelector("#btnCalcular");
const resta = document.querySelector("#btnCalcular1");
const Divicion = document.querySelector("#btnCalcular2");
const Multiplicacion = document.querySelector("#btnCalcular3");
const pResult = document.querySelector("#pResult");

suma.addEventListener('click', btnOnClickSuma);
resta.addEventListener('click', btnOnClickResta);
Divicion.addEventListener('click', btnOnClickDivicion);
Multiplicacion.addEventListener('click', btnOnClickMultiplicacion);
//form.addEventListener('submit', btnOnClickResta);

function btnOnClickSuma(){
    //console.log(event)
    //event.preventDefault();
    const sumaInputs = Number(inpu1.value) + Number(inpu2.value);
    pResult.innerText = "El resultado es: " + sumaInputs;
}
function btnOnClickResta(){
    //event.preventDefault();
    const restaInputs = Number(inpu1.value) - Number(inpu2.value);
    pResult.innerText = "El resultado es: " + restaInputs;
}
function btnOnClickDivicion(){
    //event.preventDefault();
    const DivicionInputs = Number(inpu1.value) / Number(inpu2.value);
    pResult.innerText = "El resultado es: " + DivicionInputs;
}
function btnOnClickMultiplicacion(){
    //event.preventDefault();
    const MultiplicacionInputs = Number(inpu1.value) * Number(inpu2.value);
    pResult.innerText = "El resultado es: " + MultiplicacionInputs;
}
/*Otra forma mas corta
function btnOnClick(){
    const sumaInputs = (+inpu1.value + +inpu2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
} */