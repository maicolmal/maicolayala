const btnSwitch = document.querySelector(".switch");

btnSwitch.addEventListener("click", e => {
    btnSwitch.classList.toggle("active");
    document.body.classList.toggle("active");

})

/*let nombre = prompt("hola, decime tu nombre",);
alert("CURRICULUM-VITAE"+ nombre);

let accesopermitido;
let age = prompt('¿Que edad tienes?','');   
if (age >=18 && age<40){
    accesopermitido=true;
}
else{
    accesopermitido=false;
    alert(accesopermitido);
}

let acumulames=0;
let promedio=0;
for( let i=1;i<13;i++){
    let temperaturames=prompt
}*/