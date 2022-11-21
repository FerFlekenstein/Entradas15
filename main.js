const cumple = new Date("Dec 10, 2022 00:00:00").getTime();
const calcularTiempo = setInterval(function(){
    const hoy = new Date().getTime();
    const diferencia = cumple - hoy;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    const muestra = document.getElementById("cuentaRegresiva");
    muestra.innerHTML = `${dias}días, ${horas}hs, ${minutos}m, ${segundos}s`;
    if(diferencia <= 0) {
        clearInterval(calcularTiempo);
        muestra.innerHTML = "¡Hoy es la fiesta!";
    }
}, 1000);

const botonDonar = document.getElementById("donacion");
botonDonar.addEventListener("click", () => {
    Swal.fire({
        title: "Datos Bancarios",
        html: "<p>Julieta Margarita Osuna <br>CVU: 0000003100056204411977 <br> Alias: Juli.osuna <br> CUIT/CUIL: 27464399521 <br> Mercado Pago</p>"
    })
})