let city = document.getElementById("city");
let btn = document.getElementById("btn"); 
let btn2 = document.getElementById("btn2"); 
let data = document.getElementById("data")
let container = document.getElementById("container")

btn.addEventListener("click", ()=>{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=83ebbd724ce618cf9c563f141a4342e9&units=metric"

    fetch(url).then((response) =>{
        return response.json()
    }).then((result) =>{
        console.log(result);

        let place = document.getElementById("place")
        let temp = document.getElementById("temp")
        let dics = document.getElementById("dics")

        place.innerHTML = result.name;
        temp.innerHTML = result.main.temp + "°C"
        dics.innerHTML = result.weather[0].description;

        data.style.opacity = 1;
    }).catch((error) =>{
        alert(city.value +  " not found")
        data.innerHTML= ""

    })  

})


btn2.addEventListener("click", ()=>{
    data.innerText = ""
    city.value = ""
    data.style.opacity = 0;
    location.reload();
})