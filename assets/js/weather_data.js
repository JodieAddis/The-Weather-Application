
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
        console.log(res);
        let icon = res.weather[0].icon; 
        console.log(icon);//Ok
        document.querySelector('.section_city_image_display').src="https://openweathermap.org/img/wn/"+icon+"@2x.png"; 
    } catch{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fail to load data',
        })
    }
}
