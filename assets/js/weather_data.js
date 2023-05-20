
export async function weatherCall(event){
    try{
        event.preventDefault();
        let input = document.getElementById('navBar_input').value;
        console.log(input); 
        let locationApi = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
        let location = await locationApi.json();
        console.log(location); 
        let lat = await location[0].lat;
        let lon = await location[0].lon; 
        let name = await location[0].name; 
        document.querySelector('.city_weather_name').innerHTML=name;  
        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5cb7fc28972cc41b9f08bb663b766ae2`); 
        let res = await api.json(); 
        let icon = await res.weather[0].icon; 
        document.querySelector('.section_weather__display_icon').src="https://openweathermap.org/img/wn/"+icon+"@2x.png"; //Icon weather
        let temperatureKelvin = await res.main.temp;//Unit : Kelvin
        let temperatureCelsius = (temperatureKelvin - 273,15); 
        document.querySelector('.section_weather__display_temp').innerHTML=temperatureCelsius +`°C`;  
        let humidity = await res.main.humidity;// %
        let windMeter = res.wind.speed;// speed : m/s
        let windKm = (windMeter*3.6); 
        let clouds = res.clouds.all;// cloudness %
        document.querySelector('.section_weather_details_list').innerHTML= `
        <li>Cloudiness : ${clouds}%</li>
        <li>Humidity : ${humidity}%</li>
        <li>Wind : ${windKm} m/s</li>
        `
    } catch{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fail to load data',
        })
    }
}
