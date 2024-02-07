const input = document.getElementById("number-input");
const result = document.getElementById("result");

function HandleClic(el){
    const exp=`${input.value}${el.innerText}`
    input.value=exp;
    // if(['+','-','*','/'].includes(el.innerText)) return;
    result.value= eval(exp);
}
function reset() {
    input.value = "";
    result.value = "";
  }