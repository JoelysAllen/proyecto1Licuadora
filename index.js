var estadoLicuadora ="apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        sonido();
        licuadora.classList.add("active");
        console.log("me prendiste");
    } else {
        estadoLicuadora = "apagada";
        sonido();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}

function sonido() {
    if (sonidoLicuadora.paused) {
        sonidoLicuadora.play();
    } else {
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}