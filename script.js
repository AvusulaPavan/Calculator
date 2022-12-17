function clearscreen(){
    document.getElementById("display").innerText=0;
}
function disp(value){
   let display = document.getElementById("display");
   console.log(display);
   let defaultValue = display.innerText==0
   let beforeIsNotOperator =!Number.isNaN(Number(value));

   if(defaultValue && beforeIsNotOperator){
    display.innerText=value;
   }
   else{
    display.innerText+=value;
   }
}
function solve(){
    var p= document.getElementById("display").innerText;
    var q=eval(p);
    document.getElementById("display").innerText=q;
}
function del(){
    var val=document.getElementById("display").innerText;
    if(val.length==1){
        document.getElementById("display").innerText=0;
    }
    else{
    document.getElementById("display").innerText=val.slice(0,-1);
    }
}