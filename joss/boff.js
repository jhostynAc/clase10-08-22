let boton=document.querySelector('form')

boton.addEventListener('submit',()=>{
    alert ('enviado con exito')
})
let boton2=document.querySelector('form')

boton.addEventListener('reset', ()=>{
   alert ('¿estas seguro?')
})

function mouseover(params) {
    document.getElementById(hello).innerHTML="el puntero esta encima";
}
function mouseout(params) {
    document.getElementById(hello).innerHTML="el puntero ya no esta";
}
