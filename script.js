function clr(){
    var res = document.getElementById("res");
    res.value = " ";
}
function inval(val){
    var res = document.getElementById("res");
    res.value = res.value + val;
}
function inop(op){
    var res = document.getElementById("res");
    operator = op;
    val1 = parseInt(res.value);
    res.value = "";
    
}
function result(){
    switch(operator){
        case '+': return val1 + val2; 
        case '-': return val1 - val2; 
        case '*': return val1 * val2; 
        case '/': return val1 / val2; 
        case '%': return val1 % val2; 
    }
}
function calculate(){
    var res = document.getElementById("res");
    if((val1 == null) || (res.value == "")){
        alert("Please enter a value!");
    }else{
        val2 = parseInt(res.value);
        res.value = result();
    }
}



