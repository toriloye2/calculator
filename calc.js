// for backward clearing
const forclear = () => {
    let value = document.getElementById('output').value;
    document.getElementById("output").value = value.substr(0,value.length - 1);
}
// for complete clearing
const clearAll = () => {
    let value = document.getElementById('output').value;
    document.getElementById('output').value = ''
}

// displaying value
const fordisplay = (value) => {
    document.getElementById("output").value+= value ;
    
      
};  

// for eqaulTo
const calculate = () => {
    let x = document.getElementById('output').value;
    let y = eval(x)
    document.getElementById('output').value = y;
}
// for bracket
let bracketSwitch = false;

const bracket = () => {
    let brac;
    if(!bracketSwitch){
        brac = '('
    } else{
        brac = ')'
    };
    bracketSwitch = !bracketSwitch;
    document.getElementById('output').value += brac;
}

// for +/- reverse
const reverseOp = () => {
   let num = document.getElementById('output').value;
   let num1 = num * -1;
   document.getElementById('output').value = num1;


} 


