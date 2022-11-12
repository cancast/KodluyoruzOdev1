var name = prompt("İsminizi Giriniz :");

var header = document.getElementById("header");

var dateNow =  new Date();

switch (dateNow.getDay()) {
    case 1 :
        dayName = "Pazartesi";
        break;
    case 2 :
        dayName = "Salı";
        break;
    case 3 :
        dayName = "Çarşamba";
        break;
    case 4 :
        dayName = "Perşembe";
        break;
    case 5 :
        dayName = "Cuma";
        break;
    case 6 :
        dayName = "Cumartesi";
        break;
    case 7 :
        dayName = "Pazar";
        break;
}

var hour = `${dateNow.getHours()} : ${dateNow.getMinutes()} : ${dateNow.getSeconds()} ${dayName}` 

if (name) {

    header.innerHTML = `Merhaba, ${name} Hoş geldin`;

}else {

    header.innerHTML = "Bir isim girmediniz"

}

document.getElementById("headerTime").innerHTML = hour;

