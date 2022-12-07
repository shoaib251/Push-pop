
let array=[];
function rays(){
    let push=document.getElementById('ray').value;
    array.push(push);
arrayFac();
}

   
function arrayFac(){
let result;
document.getElementById('ray').value;

document.getElementById('h2').innerHTML ="";  
for (let index = 0; index < array.length; index++) {
      result = array[index];
    let show=" <h3>"+(index+1 )+" :"+result+"</h3>"
    
    document.getElementById('h2').innerHTML +=show;  
    }
  
 
}
function pop(){
   array.pop();
   arrayFac();
}