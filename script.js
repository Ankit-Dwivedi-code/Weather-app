let apikey = "3118ef278a21e6d8c0dfefdd4fda9699";


let cityInput = document.getElementById("city")

async function fetchweather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    let p = await fetch(url)
    let data = await p.json()
    console.log(data);

    document.getElementById("cityname").innerHTML = data.name;
    document.querySelector(".date").innerHTML = new Date();
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".haze").innerHTML = "HAZE";
    document.querySelector(".min-max").innerHTML = Math.round(data.main.temp_min) + "°C/" +Math.round(data.main.temp_max) + "°C";

}

function fetchurl() {
    fetchweather(cityInput.value);
}

cityInput.addEventListener("keypress", event=>{
    if(event.key ==="Enter" ){
        fetchurl();
    }
})

