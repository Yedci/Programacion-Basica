let ataqueJugador // es una variable global
let ataquealeAtorioEnemigo 
let vidasJugador=3
let vidasEnemigo=3




function iniciarJuego(){
    // ocultando elementos HTMl con js  funcion style.display
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display='none'

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display='none'

    // leyendo eventos al momento de realizar in click en los botones
    let botonMascotaJugador= document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador) 

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua=document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){

    let sectionSeleccionarMascota=document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display="none"


    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="flex"

    
//Creamos unas variables para despues preguntarlas en la validacion. 
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    let spanMascotaJugador=document.getElementById('mascota-jugador')
// mas facil para leer. leemos la funcion para validar si el checked es true si esto es verdadero se da la alerta de la mascota seleccionada.
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML="Hipodoge"
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML="Capipepo"
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML="Ratigueya"
    }else{
        alert('Debes seleccionar una Mascota')
    }
seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById('mascota-enemigo')

    if(mascotaAleatorio ==1){
        spanMascotaEnemigo.innerHTML ="Hipodoge"
    }else if(mascotaAleatorio ==2){
        spanMascotaEnemigo.innerHTML ="Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML ="Ratigueya"

    }
}
function ataqueFuego(){
    ataqueJugador ='FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador='AGUA'
ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador='TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)

    if(ataqueAleatorio ==1){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio ==2){
        ataqueEnemigo= 'AGUA'
    }else{
        ataqueEnemigo ='TIERRA'
    }
    combate()
}
// COMBATE - CLASE 26 PARA SABER SI PERDÍ GANÉ O EMPATE.
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')


if (ataqueEnemigo==ataqueJugador){
    crearMensaje('EMPATE')
    } else if(ataqueJugador== 'FUEGO' && ataqueEnemigo =='TIERRA'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    } else if(ataqueJugador== 'AGUA' && ataqueEnemigo =='FUEGO'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }else if(ataqueJugador== 'TIERRA' && ataqueEnemigo =='AGUA'){
        crearMensaje('GANASTE') 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }
    revisarVidas()
}
function revisarVidas(){
    if (vidasEnemigo==0){
        crearMensajeFinal('FELICITACIONES! Ganaste 😁')
    }else if(vidasJugador==0) {
        crearMensajeFinal('Lo siento, has Perdido 😓')
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo =document.createElement('p')
    parrafo.innerHTML= 'Tú mascota atacó con: '  + ataqueJugador  + ',' + ' la mascota del enemigo ataco con: ' + ataqueEnemigo  + '-' + resultado

    sectionMensajes.appendChild(parrafo)
    }
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo =document.createElement('p')
    parrafo.innerHTML=resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.disabled=true
    let botonAgua=document.getElementById('boton-agua')
    botonAgua.disabled=true
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.disabled=true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display='block'

}
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min +1)+ min)
}
window.addEventListener('load',iniciarJuego)                                                            