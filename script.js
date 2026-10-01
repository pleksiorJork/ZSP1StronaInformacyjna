// https://gist.github.com/farhad-taran/f487a07c16fd53ee08a12a90cdaea082
function runAtSpecificTimeOfDay(hour, minutes, func)
{
  const twentyFourHours = 86400000;
  const now = new Date();
  let eta_ms = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minutes, 0, 0).getTime() - now;
  if (eta_ms < 0)
  {
    eta_ms += twentyFourHours;
  }
  setTimeout(function() {
    //run once
    func();
    // run every 24 hours from now on
    setInterval(func(), twentyFourHours);
  }, eta_ms);
}

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

function pelnaData(){
    const pelnaData = new Date().toLocaleDateString("pl-PL", {timezone: "Europe/Warsaw"});
    
    let dataSpan = document.getElementById("data");
    dataSpan.innerHTML = pelnaData;
}

function GodzinaMinuty() {
    const czas = new Date().toLocaleTimeString("pl-PL", {timezone: "Europe/Warsaw", hour: "2-digit", minute: "2-digit"});

    let czasSpan = document.getElementById("czas");
    czasSpan.innerHTML = czas;
}

const openMeteoUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.2784&longitude=17.9891&timezone=Europe%2FBerlin&forecast_days=1&hourly=&current=temperature_2m,cloud_cover,surface_pressure,rain";
fetch(openMeteoUrl)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Brak polączenia z OpenMeteo`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("pogoda").innerHTML = Math.round(data.current.temperature_2m) + " °C"
        document.getElementById("pogoda").classList.add("fs-1");
        var cloudCover = data.current.cloud_cover;
        switch(true) {
            case (cloudCover <= 25):
                document.getElementById("pogoda-ikona").src = "img/pogoda/sunny.png";
                break;
            case (cloudCover < 50):
                document.getElementById("pogoda-ikona").src = "img/pogoda/sunnyperiods.png";
                break;
            case (cloudCover < 75):
                document.getElementById("pogoda-ikona").src = "img/pogoda/sunnyintervals.png";
                break;
            case (cloudCover <= 100):
                document.getElementById("pogoda-ikona").src = "img/pogoda/cloudy.png";
                break;
            default:
                document.getElementById("pogoda-ikona").src = "";
                break;
        }
    })
    .catch(error => {
        console.error("Błąd OpenMeteo: ", error);
    })

GodzinaMinuty();
setInterval(GodzinaMinuty, 100);

runAtSpecificTimeOfDay(0, 0, dzienTygodnia());
runAtSpecificTimeOfDay(0, 0, pelnaData());




