function temporizador(tiempo){
    if(tiempo<=0){
        document.getElementById('output').innerText="finalizado...";
    }else{
      document.getElementById('output').innerText=tiempo;
      setTimeout(temporizador,1000, tiempo-1);
    }   
}
function inicio() {
  let input = document.getElementById('input').value;
  return temporizador(input);
}
    
let btn1=document.getElementById('iniciar'); 
btn1.addEventListener('click', inicio); 
