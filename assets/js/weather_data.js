export async function submitInput(event){
    try{
        event.preventDefault();
        let input = document.getElementById('navBar_input').value;
        console.log(input); 
        let locationApi = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=5cb7fc28972cc41b9f08bb663b766ae2`);
        let location = await locationApi.json();
        console.log(location); 
        let lat = await location[0].lat;
        let lon = await location[0].lon;  
        let api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5cb7fc28972cc41b9f08bb663b766ae2`); 
        let res = await api.json(); 
        console.log(res);
    } catch{
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Fail to load data',
        // })
    }
}
