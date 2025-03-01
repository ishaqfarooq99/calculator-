function btnClick(a){
    var getInp = document.getElementById(`int`);
    getInp.value += a;
}

function eq(){
    var getInp = document.getElementById(`int`);
    getInp.value = eval(getInp.value);
}

function clrAll(){
    var getInp = document.getElementById(`int`);
    getInp.value = ``;
}

function clr(){
    var getInp = document.getElementById(`int`);
    getInp.value = getInp.value.slice(0,-1);
}