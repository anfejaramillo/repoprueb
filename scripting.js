function cambiarZapato(tipo){
    if(tipo == 'rojo'){
        document.getElementById('myImage').src = 'zapatoRojo.png'
    }
    else{
        document.getElementById('myImage').src='zapatoNegro.png'
    }
}

function alerta(mensaje){
    alert(mensaje)
}

function mostrarTexto(){
    console.log('mostrar')
    document.getElementById("idp").style = "display:block"
}

function ocultarTexto(){
    console.log('ocultar')
    document.getElementById("idp").style.display = "none"
}

function eliminarTexto(){
    console.log('eliminar')
    //document.getElementById("idp").style="content:\"\""
    document.getElementById("idp").remove();
}

function innsertarHtml(){
    console.log("insertando.... ")
    alert("innerHtml: " + document.getElementById("idp").innerHTML);
    alert("innerText: " + document.getElementById("idp").innerText);
    document.getElementById("idp").innerHTML 
                   =     document.getElementById("idp").innerHTML 
                                    + "<img src='img/f1.PNG' style='width:100px' >"
}

function initialize(){
    document.getElementById("zapatoRojo").onclick = function(){
        cambiarZapato('rojo');
    }
    document.getElementById("zapatoNegro").addEventListener('click',cambiarZapato,'negro');
    document.getElementById("idh1").addEventListener('click',cambiarZapato,'negro');
    document.getElementById("idh1").onclick = function(){
        alerta("El elemento con id idh1 fue clickeado")
    }
    document.getElementById("myImage").onclick = function(){
        alerta("El elemento IMAGE fue clickeado")
    }

    document.getElementById("btnMostrar").addEventListener('click',mostrarTexto);
    document.getElementById("btnOcultar").addEventListener('click',ocultarTexto);
    document.getElementById("btnEliminar").addEventListener('click',eliminarTexto);
    document.getElementById("insHtml").addEventListener('click',innsertarHtml);

}