import { fiveDaysWeather } from './displayData.js';
import { btn } from './variables.js';

btn.addEventListener('click', fiveDaysWeather); 


// export async function apiCall(event){
//     try{        
//         event.preventDefault();
//         let input = document.getElementById('navBar_input').value;
//         // console.log(input); //Ok
//         let locationApi = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
//         let location = await locationApi.json();
//         // console.log(location);//Ok
//         let lat = await location[0].lat;
//         let lon = await location[0].lon; 
//         let name = await location[0].name;
//         document.querySelector('.city_weather_name').innerHTML=name;//Ok
//         let api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
//         let res = await api.json();
//         // console.log(res); 
//         let data = res.list; 
//         console.log(data);//Ok code bon jusqu'ici
//         let description = data[0].weather[0].description;
//         // console.log(description)//ok 
//         document.querySelector('.section_weather__display_description').innerHTML=description;//Ok
//         let wind = data[0].wind.speed;
//         // console.log(wind);//ok
//         let clouds = data[0].clouds.all;
//         // console.log(clouds); //Ok
//         let icon = data[0].weather[0].icon;
//         // console.log(icon);//ok
//         document.querySelector('.section_weather__display_icon').src=`
//         https://openweathermap.org/img/wn/${icon}@2x.png 
//         `//Affichage de l'icon : Ok 
//         let temperature=data[0].main.temp; 
//         // console.log(temperature); 
//         document.querySelector('.section_weather__display_temp').innerHTML=temperature;//Ok 
//         let tempMin = data[0].main.temp_min;
//         document.querySelector('.section_weather__display_tempMin').innerHTML=tempMin;  
//         // console.log(tempMin);
//         let tempMax = data[0].main.temp_max; 
//         // console.log(tempMax); 
//         document.querySelector('.section_weather__display_tempMax').innerHTML=tempMax; 
//         } catch{
//         // Swal.fire({
//         // icon: 'error',
//         // title: 'Oops...',
//         // text: 'Fail to load data',
//         // })
//     }
// }