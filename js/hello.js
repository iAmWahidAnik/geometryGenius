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

// triangle 
document.getElementById('btn-triangle').addEventListener('click', function(){
    const base = takeInputMakeNumber('input-b-triangle');
    const height = takeInputMakeNumber('input-h-triangle');
    const area = 0.5 * base * height;
    getElementSetValue('set-area-triangle', area);
    document.getElementById('area-triangle').classList.remove('hidden');
})
// Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const width = takeInputMakeNumber('input-w-rectangle');
    const length = takeInputMakeNumber('input-l-rectangle');
    const area = width * length;
    getElementSetValue('set-area-rectangle', area);
    document.getElementById('area-rectangle').classList.remove('hidden');
})