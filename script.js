const nameElement = document.getElementById("name");
const countryElement = document.getElementById("country");
const coordinatesElement = document.getElementById("coordinates");
const timezoneElement = document.getElementById("timezone");
const localTimeElement = document.getElementById("localTime");
const windElement = document.getElementById("winds");
const tempElement = document.getElementById("temps");
const cloudElement = document.getElementById("clouds");
const otherElement = document.getElementById("others");
const climateElement = document.getElementById("climate");

//function to call when clicked on search
function searching(){
  let locate=document.getElementById("place").value?document.getElementById("place").value:document.getElementById("place2").value;
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${locate}`;

fetch(url, {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '446363ef8dmsh550acd5a73923c1p1af557jsnfc5338ae0fb3',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error retrieving weather data');
    }
    return response.json();
  })
  .then(data => {
    const locationName = data.location.name;
    const countryName = data.location.country;
    const lattitude = data.location.lat;
    const longitude = data.location.lon;
    const timezone = data.location.tz_id;
    const localTime=data.location.localtime;
    const windMph = data.current.wind_mph;
    const windKph = data.current.wind_kph;
    const windDegree = data.current.wind_degree;
    const windDirection = data.current.wind_dir;
    const pressureMb = data.current.pressure_mb;
    const pressureIn = data.current.pressure_in;
    const precipitationMm = data.current.precip_mm;
    const precipitationIn = data.current.precip_in;
    const humidity = data.current.humidity;
    const cloudCover = data.current.cloud;
    const temp_c=data.current.temp_c;
    const temp_f=data.current.temp_f;
    const feelslikeC = data.current.feelslike_c;
    const feelslikeF = data.current.feelslike_f;
    const visibilityKm = data.current.vis_km;
    const visibilityMiles = data.current.vis_miles;
    const uvIndex = data.current.uv;
    const icon = data.current.condition.icon;
    const clima=data.current.condition.text;

    nameElement.innerHTML=`${locationName}`;
    countryElement.innerHTML=`${countryName}`;
    coordinatesElement.innerHTML=`Latitute : ${lattitude} , Longitude : ${longitude}`;
    timezoneElement.innerHTML=`TimeZone : ${timezone}`;
    localTimeElement.innerHTML=`Local Time : ${localTime}`;
    windElement.innerHTML = `<h1>Wind Speed :<h1/> <h2>${windMph} mph / ${windKph} kph <h2/><br/><h1> Direction :<h1/>  <h2> ${windDegree}&deg; ${windDirection}<h2/>`;
    tempElement.innerHTML =`<h1>Temperature : <h1/> <h2>${temp_c}&deg;C / ${temp_f}&deg;F <h2/><h1>Feels Like: <h1/> <h2>${feelslikeC}&deg;C / ${feelslikeF}&deg;F <h2/> `;
    cloudElement.innerHTML =`<h2>Cloud Cover: ${cloudCover}%<h2/><h2>Humidity: ${humidity}%<h2/><br/><h2>Precipitation: <br/>${precipitationMm} mm / ${precipitationIn} in <h2/>`;
    otherElement.innerHTML =`<h2>Pressure: <h2/> <h3>${pressureMb} mb / ${pressureIn} in <h3/><h2>UV Index: ${uvIndex}<h2/> <h2>Visibility :<h2/> <h3>${visibilityKm} km / ${visibilityMiles} miles<h3/>`;
    climateElement.innerHTML=`<br/><br/><img src="${icon}" style="width:100px"> <br/> <h2 style="text-transform:capitalize">${clima}<h2/>`;
  })
  .catch(error => {
    console.error(error);
  });
  searchForImage();
  document.getElementById("place").value="";
  document.getElementById("place2").value="";

}
const API_KEY = "McIt87rqORauJ7VnMCHYylGWEyFYbARMQOInd7mDqmVh4CPQgbbjpcWc";

// Function to search for an image using the Pexels API
async function searchForImage() {
  const placeName = document.getElementById("place").value?document.getElementById("place").value:document.getElementById("place2").value;

  const response = await fetch(`https://api.pexels.com/v1/search?query=${placeName}&per_page=1&ratio=16:9`, {
    method: "GET",
    headers: {
      "Authorization": API_KEY
    }
  });
  const data = await response.json();
  // Get the first photo in the search results
  const photo = data.photos[0];
  const imageElement = document.getElementById("placeImage");
  imageElement.src = photo.src.medium;
}
document.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    searching();
  }
});
