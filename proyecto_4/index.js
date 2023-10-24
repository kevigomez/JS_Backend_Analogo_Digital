    const deg = 6;
    const horas = document.querySelector('.horas');
    const minutos = document.querySelector('.minutos');
    const segundos = document.querySelector('.segundos');

    setInterval(()=>{
        let tiempo =new Date();
        let hora= tiempo.getHours()*30;
        let minuto=tiempo.getMinutes()*deg;
        let segundo=tiempo.getSeconds()*deg;
        horas.style.transform = `rotate(${(hora)+(minuto/12)}deg)` ;
        minutos.style.transform = `rotate(${(minuto)}deg)`
        segundos.style.transform = `rotate(${(segundo)}deg)`
    })

function calcularTime() {
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
    let amPm = hora >= 12 ? "PM" : "AM";

    hora = hora % 12 || 12;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo;
    let relojDigitalContent = document.querySelector("#reloj-digital-content");
    let amPmElement = document.querySelector("#am-pm");

    relojDigitalContent.textContent = pantallaReloj;
    amPmElement.textContent = amPm;
}

setInterval(calcularTime, 1000);





