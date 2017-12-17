var ans="0";
var curr="0";
var oper="0";

function addDigit(dig){
  if (parseInt(curr)==0 && curr.indexOf(".")==-1 ){
    curr=dig;
  }
  else{
    curr+=dig;
  }
  document.getElementById('display').value=curr;
}

function decimal(){
  if (curr.length == 0){
    curr="0.";
  }
  else {
    curr+=".";
  }
  document.getElementById('display').value=curr;
}

function Clear(){
  curr="0";
  document.getElementById('display').value=curr;
}

function allClear(){
  ans="0";
  curr="0";
  oper="0";
  document.getElementById('display').value=ans;
}

function operate(operator){
  ans=curr;
  if (operator == "+"){
    oper="+";
  }
  if (operator == "-"){
    oper="-";
  }
  if (operator == "*"){
    oper="*";
  }
  if (operator =="/"){
    oper="/";
  }
  curr="";
}

function equate(){
  if (oper == "+"){
    curr=parseFloat(curr)+parseFloat(ans);
  }
  if (oper == "-"){
    curr=parseFloat(ans)-parseFloat(curr);
  }
  if (oper == "*"){
    curr=parseFloat(curr)*parseFloat(ans);
  }
  if (oper =="/"){
    if (parseFloat(curr)!=0)
      curr=parseFloat(ans)/parseFloat(curr);
    else
      curr="Error: Divided by Zero!"
  }
  document.getElementById('display').value=curr;
}
