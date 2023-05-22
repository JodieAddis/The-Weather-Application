
// export function cityName(event){
//     event.preventDefault();
//     let input = document.getElementById('navBar_input').value;
//     console.log(input); 
//     return input; 
// }

export async function apiCall(event){
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
        let api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
        let res = await api.json();
        console.log(res); 
        let data = res.list; 
        console.log(data);
        let dataPerDay = Math.ceil(data.length/5);
        const result = new Array(5)
        .fill('')//Make sure each element isn't empty
        .map((_, i) => data.slice(i*dataPerDay, (i+1)*dataPerDay)); 
        console.log(result); 
        for (let i=0; i<5; i++){
            let icon = data[i].weather[0].icon;
            let humidity = data[i].main.humidity; 
            document.querySelector('.section_5days').innerHTML +=`
            <div>
                <span></span>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon weather">
                <span>${temperature}</span>
                <span>${humidity}</span>
            </div>
            `
        } 
        let description = data[0].weather[0].description;
        document.querySelector('.section_weather__display_description').innerHTML=description;
        let wind = data[0].wind.speed; 
        let clouds = data[0].clouds.all; 
        document.querySelector('.section_weather_details_list').innerHTML +=`
        <li>Clouds : ${clouds}%</li>
        <li>Humidity : ${humidity}%</li>
        <li>Wind : ${wind} km/h</li>`
    } catch{
        // Swal.fire({
        // icon: 'error',
        // title: 'Oops...',
        // text: 'Fail to load data',
        // })
    }
}