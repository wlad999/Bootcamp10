'use strict';

let temperatureDegree = document.querySelector('.temperature-degree');
let temperatureDescription = document.querySelector('.temperature-description')
let timeZone = document.querySelector('.location-timezone');
let iconID = document.querySelector('.icon');
let temperatureSection = document.querySelector('.temperature-section');
let temperatureUnit = document.querySelector('.temperature-unit');

let onload=()=> {
  let lat;
  let long;
  let celsus, tempBuffer;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      // console.log(navigator.geolocation);
      // console.log(position);
      lat = position.coords.latitude;
      long = position.coords.longitude;
      

let proxy = 'https://cors-anywhere.herokuapp.com/';
let api =(`${proxy}https://api.darksky.net/forecast/71112812e101a60980d3b37a2f524b59/${lat},${long}`);

fetch(api)
.then(response =>response.json())
.then(data => {
  console.log(data);
const {icon, summary, temperature}= data.currently;
temperatureDegree.textContent = temperature;
temperatureDescription.textContent =summary;
timeZone.textContent =data.timezone;
celsus = 5/9*(temperature-32);
setIcon(icon, iconID);
tempBuffer = temperature;
temperatureSection.addEventListener('click', setTemperature);

})
})
   
}
function setTemperature (){
  if (temperatureUnit.textContent==='F'){
    temperatureUnit.textContent = 'C';
    temperatureDegree.textContent = Math.floor(celsus);
  } else {
    temperatureUnit.textContent='F';
    temperatureDegree.textContent = tempBuffer;
  }
}


function setIcon(icon, iconID){
  const skycons = new Skycons({color: "white"});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  console.log(skycons.currentIcon);
  return skycons.set(iconID, Skycons[currentIcon]);    

}

}


window.addEventListener('load',onload);