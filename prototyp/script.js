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
    const czas = new Date().toLocaleTimeString("pl-PL", {timezone: "Europe/Warsaw"});

    let czasSpan = document.getElementById("czas");
    czasSpan.innerHTML = czas;
}
GodzinaMinuty();
setInterval(GodzinaMinuty, 1000); // 1000 ms = 1s
