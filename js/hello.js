function takeInputMakeNumber(elementId){
    const getElement = document.getElementById(elementId);
    const elementString = getElement.value;
    const elementNumber = parseFloat(elementString);
    return elementNumber;
}
function getElementSetValue(elementId, value){
    const getElement = document.getElementById(elementId);
    getElement.innerText = value;
}
// validation function 
// function validation(inputOne, inputTwo){
//     if (inputOne <= 0 || inputTwo <= 0 || isNaN(inputOne) || isNaN(inputTwo)){
//         alert ('please write the values correctly')
//         return;
//     }
// }
// triangle 
document.getElementById('btn-triangle').addEventListener('click', function(){
    const base = takeInputMakeNumber('input-b-triangle');
    const height = takeInputMakeNumber('input-h-triangle');
    // validation(base, height);
    // if (base <= 0 || height <= 0 || isNaN(base) || isNaN(height)){
    //     alert ('please write the values correctly')
    //     return;
    // }
    const area = 0.5 * base * height;
    getElementSetValue('set-area-triangle', area.toFixed(2));
    document.getElementById('area-triangle').classList.remove('hidden');
})
// Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const width = takeInputMakeNumber('input-w-rectangle');
    const length = takeInputMakeNumber('input-l-rectangle');
    const area = width * length;
    getElementSetValue('set-area-rectangle', area.toFixed(2));
    document.getElementById('area-rectangle').classList.remove('hidden');
})
// Parallelogram
document.getElementById('btn-Parallelogram').addEventListener('click', function(){
    const base = takeInputMakeNumber('input-b-parallel');
    const height = takeInputMakeNumber('input-h-parallel');
    const area = base * height;
    getElementSetValue('set-area-parallel', area.toFixed(2));
    document.getElementById('area-parallel').classList.remove('hidden');
})
// Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const dOne = takeInputMakeNumber('input-d1-rhombus');
    const dTwo = takeInputMakeNumber('input-d2-rhombus');
    const area = 0.5 * dOne * dTwo;
    getElementSetValue('set-area-rhombus', area.toFixed(2));
    document.getElementById('area-rhombus').classList.remove('hidden');
})
// pentagon 
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pValue = takeInputMakeNumber('input-p-pentagon');
    const bValue = takeInputMakeNumber('input-b-pentagon');
    const area = 0.5 * pValue * bValue;
    getElementSetValue('set-area-pentagon', area.toFixed(2));
    document.getElementById('area-pentagon').classList.remove('hidden')
})
// Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const aValue = takeInputMakeNumber('input-a-ellipse');
    const bValue = takeInputMakeNumber('input-b-ellipse');
    const area = 3.1415 * aValue * bValue;
    getElementSetValue('set-area-ellipse', area.toFixed(2));
    document.getElementById('area-ellipse').classList.remove('hidden')
})