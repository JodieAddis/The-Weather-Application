// export let input = document.getElementById('navBar_input').value;
// console.log(input); 

export async function weatherCall(event){
    try{
        event.preventDefault();
        let input = document.getElementById('navBar_input').value;
        console.log(input); 
        let locationApi = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
        let location = await locationApi.json();
        // console.log(location); 
        let lat = await location[0].lat;
        let lon = await location[0].lon; 
        let name = await location[0].name; 
        document.querySelector('.city_weather_name').innerHTML=name;  
        let api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
        let res = await api.json(); 
        let data = res.list; 
        console.log(data); 
        let temperature = await data[0].main.temp; 
        document.querySelector('.section_weather__display_temp').innerHTML=temperature+`°C`;
        let icon = await data[0].weather[0].icon;
        document.querySelector('.section_weather__display_icon').src="https://openweathermap.org/img/wn/"+ icon + "@2x.png"; //Icon weather
        let description = await data[0].weather[0].description;
        document.querySelector('.section_weather__display_description').innerHTML=description;
        let date = data[0].dt_txt; 
        let humidity = await data[0].main.humidity; 
        let wind = await data[0].wind.speed; 
        let clouds = await data[0].clouds.all; 
        document.querySelector('.section_weather_details_list').innerHTML= `
        <li>Clouds : ${clouds}%</li>
        <li>Humidity : ${humidity}%</li>
        <li>Wind : ${wind} km/h</li>
        `
        for (let i=0; i<5; i++){
            document.querySelector('.section_5days').innerHTML=`
            <div>
                <span>${date}</span>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon weather">
                <span>${temperature}</span>
                <span>${humidity}</span>
            </div>
            `
        }

        // let clouds = res.clouds.all;// cloudness %
        // document.querySelector('.section_weather_details_list').innerHTML= `
        // <li>Clouds : ${clouds}%</li>
        // <li>Humidity : ${humidity}%</li>
        // <li>Wind : ${windKm} km/h</li>
        // `
    } catch{
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Fail to load data',
        // })
    }
}
