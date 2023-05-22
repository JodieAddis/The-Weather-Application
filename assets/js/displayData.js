// import { apiCall } from "./apiCall.js";

// export function displayData(){
//     let data = res.list; 
//     console.log(data);
//     for (let i=0; i<5; i++){
//         let temperature = data[i].main.temp;
//         console.log(temperature)
//         let icon = data[i].weather[0].icon;
//         let humidity = data[i].main.humidity; 
//         document.querySelector('.section_5days').innerHTML +=`
//         <div>
//             <span></span>
//             <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon weather">
//             <span>${temperature}</span>
//             <span>${humidity}</span>
//         </div>
//         `
//     } 
//     let description = data[0].weather[0].description;
//     document.querySelector('.section_weather__display_description').innerHTML=description;
//     let wind = data[0].wind.speed; 
//     let clouds = data[0].clouds.all; 
//     document.querySelector('.section_weather_details_list').innerHTML +=`
//     <li>Clouds : ${clouds}%</li>
//     <li>Humidity : ${humidity}%</li>
//     <li>Wind : ${wind} km/h</li>`
// }