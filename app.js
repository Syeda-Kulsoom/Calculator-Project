var display = document.getElementById('display')
function getButtonValue(btnValue){
    
    display.value += btnValue
}

function calculate(){
    display.value = eval(display.value)
}

function clearAll(){
    display.value = ""
}