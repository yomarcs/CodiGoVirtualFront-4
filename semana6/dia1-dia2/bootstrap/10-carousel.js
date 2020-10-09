const btnAnterior = document.getElementById("btnAnterior");
const btnPause = document.getElementById("btnPause");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnIr3 = document.getElementById("btnIr3");


btnAnterior.onclick = () => {
    $("#carouselId").carousel("prev");
}
btnPause.onclick = () => {
    $("#carouselId").carousel("pause");
}
btnSiguiente.onclick = () => {
    $("#carouselId").carousel("next");
}
btnIr3.onclick = () => {
    $("#carouselId").carousel(2);
}

btnPlay.onclick = () => {
    $("#carouselId").carousel("cycle");
}