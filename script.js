var selected = 0;
var a = document.getElementById("num1");
var b = document.getElementById("num2");
var sum = document.getElementById("summary");
var p = document.getElementById("plus");
var m = document.getElementById("minus");
var k = document.getElementById("krat");
var d = document.getElementById("del");


a.addEventListener("input", sel);
b.addEventListener("input", sel);
p.addEventListener("click", plus);
m.addEventListener("click", minus);
k.addEventListener("click", krat);
d.addEventListener("click", del);

function sel(){
    if (selected==0){
        plus();
    }else if (selected==1){
        minus();
    }else if (selected==2){
        krat();
    }else if (selected==3){
        del();
    }
}
function plus(){
    selected = 0;
    var one = parseFloat(a.value) || 0;
    var two = parseFloat(b.value) || 0;
    sum.innerHTML = "Result is " + (one+two) + ".";
}
function minus(){
    selected = 1;
    var one = parseFloat(a.value) || 0;
    var two = parseFloat(b.value) || 0;
    sum.innerHTML = "Result is " + (one-two) + ".";
}
function krat(){
    selected = 2;
    var one = parseFloat(a.value) || 0;
    var two = parseFloat(b.value) || 0;
    sum.innerHTML = "Result is " + (one*two) + ".";
}
function del(){
    selected = 3;
    var one = parseFloat(a.value) || 0;
    var two = parseFloat(b.value) || 0;
    sum.innerHTML = "Result is " + (one/two) + ".";
}