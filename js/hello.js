function takeInputMakeNumber(elementId){
    const getElement = document.getElementById(elementId);
    const elementString = getElement.ariaValueMax;
    const elementNumber = parseFloat(elementString);
    return elementNumber;
}

function getElementSetValue(elementId, value){
    const getElement = document.getElementById(elementId);
    getElement.innerText = value;
}