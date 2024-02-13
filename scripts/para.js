function calculateParallelogramArea(){
const paraBase = document.getElementById("para-base");
const paraBaseText = paraBase.value;
const base = parseFloat(paraBaseText);


const paraHeight = document.getElementById("para-height");
const paraHeightText = paraHeight.value;
const height = parseFloat(paraHeightText);

const area = base * height;
const display = document.getElementById("parallelogram-area");
display.innerText = area;
}
