
export async function fiveDaysWeather (){
    try{
        event.preventDefault();
        let input = document.getElementById('navBar_input').value;
        // console.log(input); //Ok
        let locationApi = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
        let location = await locationApi.json();
        // console.log(location);//Ok
        let lat = await location[0].lat;
        let lon = await location[0].lon; 
        let name = await location[0].name;
        document.querySelector('.city_weather_name').innerHTML=name;//Ok
        let api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
        let res = await api.json();
        // console.log(res); 
        let data = res.list; 
        // console.log(data);//Ok
        let dt = new Date(); 
        let dayOne = dt.getFullYear() +'-0'+ (dt.getMonth()+1) +'-'+ dt.getDate(); 
        let dayTwo = dt.getFullYear() +'-0'+ (dt.getMonth()+1) +'-'+ (dt.getDate()+1); 
        let dayThree = dt.getFullYear() +'-0'+ (dt.getMonth()+1) +'-'+ (dt.getDate()+2);
        let dayFour = dt.getFullYear() +'-0'+ (dt.getMonth()+1) +'-'+ (dt.getDate()+3);
        let dayFive = dt.getFullYear() +'-0'+ (dt.getMonth()+1) +'-'+ (dt.getDate()+4);
        let dayData = []; 
        dayData.push(dayOne, dayTwo, dayThree, dayFour, dayFive); 
        // console.log(dayData);
        let dayArr= []; 
        for ( let j=0; j<dayData.length; j++){
            for (let i=0; i<data.length; i++){
                let date = data[i].dt_txt.split(' '); 
                if (dayData[j] === date[0]){
                    // dayArr.push({"date":dayData[j], "temp":data[i].main.temp, "temp_max":data[i].main.temp_max, "temp_min":data[i].main.temp_min, "icon":data[i].weather[0].icon});
                    dayArr[j].temp.push(data[i].main.temp);
                    // dayArr.push(data[i].main.temp_min);
                    // dayArr.push(data[i].main.temp_max);
                    // dayArr.push(data[i].weather[0].icon);
                    // dayArr.push(data[i].main.pressure);
                    // dayArr.push(data[i].main.humidity);
                    // dayArr.push(data[i].clouds.all);
                    // dayArr.push(data[i].wind.speed);
                    
                    // console.log(dayArr);
                }
            }
            dayArr.push({"date":dayData[j]});
        }
    }catch{
    }
}

