var forcastElement = $("#forecast");
var weatherURL="https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=b7ede2273b9e96bedc709dc1a983e6bf"

console.log(weatherURL);

$.ajax({
    url:weatherURL,
    method:"GET"
}).then(function(response){

    var forcast = response.list;

    console.log(forcast);

    for(let i = 0; i < forcast.length; i++){

        let dataHolder = $("<p>");

        let date = forcast[i].dt_txt;

        dataHolder.append(date);

        forcastElement.append(dataHolder);
    }
})