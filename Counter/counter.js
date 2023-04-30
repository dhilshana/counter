function add(){
   var counter=document.getElementById('con');
   var number=counter.innerHTML;
   number++
   counter.innerHTML=number;
}
function lower(){
var counter=document.getElementById('con');
   var number=counter.innerHTML;
   number--; 
   if(number<0){
    counter.innerHTML=0;
   }
   else{
    counter.innerHTML=number;
   }
   
}