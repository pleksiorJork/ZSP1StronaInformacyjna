function dzienTygodnia(){
    const data = new Date().toLocaleDateString("pl-PL", {timezone: "Europe/Warsaw"});
    const dzienTygodnia = new Date().getDay(data);
    
    let dzienSpan = document.getElementById("dzien");
    switch (dzienTygodnia) {
        case 0:
            dzienSpan.innerHTML = "Niedziela";
            break;
        case 1:
            dzienSpan.innerHTML = "Poniedziałek";
            break;
        case 2:
            dzienSpan.innerHTML = "Wtorek";
            break;
        case 3:
            dzienSpan.innerHTML = "Środa";
            break;
        case 4:
            dzienSpan.innerHTML = "Czwartek";
            break;
        case 5:
            dzienSpan.innerHTML = "Piątek";
            break;
        case 6:
            dzienSpan.innerHTML = "Sobota";
            break;
        default:
            dzienSpan.innerHTML = "Błąd!";
            break;
    }
}
dzienTygodnia();
setInterval(dzienTygodnia, 86400000); // 86400000 ms = 1d

function pelnaData(){
    const pelnaData = new Date().toLocaleDateString("pl-PL", {timezone: "Europe/Warsaw"});
    
    let dataSpan = document.getElementById("data");
    dataSpan.innerHTML = pelnaData;
}
pelnaData();
setInterval(pelnaData, 86400000) // 86400000 ms = 1d

function GodzinaMinuty() {
    const czas = new Date().toLocaleTimeString("pl-PL", {timezone: "Europe/Warsaw", hour: "2-digit", minute: "2-digit"});

    let czasSpan = document.getElementById("czas");
    czasSpan.innerHTML = czas;
}
GodzinaMinuty();
setInterval(GodzinaMinuty, 60000); // 60000 ms = 1min

function poprzedni(n) {
    console.log(n);
    switch(n) {
        case 1:
            document.getElementById("wydarzenie1").style.display = "none";
            document.getElementById("wydarzenie5").style.display = "block";
            document.getElementById("wydarzenie2-klon").style.display = "none";
            document.getElementById("wydarzenie2").style.display = "block";
            document.getElementById("wydarzenie3-klon").style.display = "none";
            document.getElementById("wydarzenie3").style.display = "block";
            document.getElementById("wydarzenie4-klon").style.display = "none";
            document.getElementById("wydarzenie4").style.display = "block";
            break;
        case 6:
            document.getElementById("wydarzenie2").style.display = "none";
            document.getElementById("wydarzenie6").style.display = "block";
            break;
        case 5:
            document.getElementById("wydarzenie3").style.display = "none";
            document.getElementById("wydarzenie1-klon").style.display = "block";
            break;
        case 4:
            document.getElementById("wydarzenie4").style.display = "none";
            document.getElementById("wydarzenie2-klon").style.display = "block";
            break;
        case 3:
            document.getElementById("wydarzenie5").style.display = "none";
            document.getElementById("wydarzenie3-klon").style.display = "block";
            break;
        case 2:
            document.getElementById("wydarzenie6").style.display = "none";
            document.getElementById("wydarzenie1").style.display = "block";
            document.getElementById("wydarzenie1-klon").style.display = "none";
            document.getElementById("wydarzenie4-klon").style.display = "block";
            break;
        default:
            document.write("za nisko");
    }
}
function nastepny(n){
    console.log(n);
    switch(n) {
        case 1:
            document.getElementById("wydarzenie6").style.display = "block";
            document.getElementById("wydarzenie1-klon").style.display = "block";
            document.getElementById("wydarzenie1").style.display = "none";
            document.getElementById("wydarzenie2-klon").style.display = "block";
            document.getElementById("wydarzenie2").style.display = "none";
            document.getElementById("wydarzenie3-klon").style.display = "block";
            document.getElementById("wydarzenie3").style.display = "none";
            document.getElementById("wydarzenie4").style.display = "none";
            break;
        case 2:
            document.getElementById("wydarzenie3-klon").style.display = "none";
            document.getElementById("wydarzenie5").style.display = "block";
            break;
        case 3:
            document.getElementById("wydarzenie2-klon").style.display = "none";
            document.getElementById("wydarzenie4").style.display = "block";
            break;
        case 4:
            document.getElementById("wydarzenie3").style.display = "block";
            document.getElementById("wydarzenie1-klon").style.display = "none";
            break;
        case 5:
            document.getElementById("wydarzenie6").style.display = "none";
            document.getElementById("wydarzenie2").style.display = "block";
            break;
        case 6:
            document.getElementById("wydarzenie1").style.display = "block";
            document.getElementById("wydarzenie2").style.display = "block";
            document.getElementById("wydarzenie3").style.display = "block";
            document.getElementById("wydarzenie4").style.display = "block";
            document.getElementById("wydarzenie1-klon").style.display = "none";
            document.getElementById("wydarzenie2-klon").style.display = "none";
            document.getElementById("wydarzenie3-klon").style.display = "none";
            document.getElementById("wydarzenie4-klon").style.display = "none";
            document.getElementById("wydarzenie5").style.display = "none";
            document.getElementById("wydarzenie6").style.display = "none";
            break;
        default:
            document.write("za wysoko");
    }
}
