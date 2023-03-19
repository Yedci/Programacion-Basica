function iniciarJuego(){
    let botonMascotaJugador= document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador) 
}

function seleccionarMascotaJugador(){
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')

    if (inputHipodoge.checked){
        alert('Seleccionaste Hipodoge, ahora ajugar')
    }else if(inputCapipepo.checked){
        alert('Seleccionaste Capipepo, ahora a jugar')
    }else if(inputRatigueya.checked){
        alert('Seleccionaste Ratigueya, ahora a jugar')
    }else{
        alert('Debes seleccionar una Mascota')
    }

}

window.addEventListener('load',iniciarJuego)