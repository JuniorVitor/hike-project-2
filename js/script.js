
document.getElementById("calculate-button").onclick = function(){
    let operation = document.querySelector('input[name="operation"]:checked').value;
    let resultElement = document.getElementById('result');
    let elem1 = document.getElementById('elem-1');
    let elem2 = document.getElementById('elem-2');
    let val1 = parseFloat(elem1.value);
    let val2 = parseFloat(elem2.value);

    if(verify(elem1) && verify(elem2)){
        resultElement.innerText = getResult(val1, val2, operation);
    }
};

function verify(element){
    if(isNaN(parseFloat(element.value))){
        alert('Preencha os campos!');
        element.focus();
        return false;
    }
    return true;
}


function getResult(elem1, elem2, operation){
    let result = 0;
    switch(operation){
        case '+': 
            result = elem1+elem2;
            break;

        case '-':
            result = elem1-elem2;
            break;

        case '*':
            result = elem1*elem2;
            break;

        case '/':
            result = elem1/elem2;
            break;

        case '^':
            result = Math.pow(elem1,elem2);
            break;
            
        case '%':
            result = elem1 % elem2;
            break;

        default:
            break;
    }
    return result;
}