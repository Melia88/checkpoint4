import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather(){
  
  let template = ''
  let weather = ProxyState.weather
  let toC = Math.round(weather.main.temp - 273.15)
  let toF = Math.round(((weather.main.temp - 273.15) * 1.8) + 32)

  let cityName = ProxyState.weather.name


    template += /*html */ `<div class="cursor weather-text m-2 p-4 text-center text-light text-shadow" onclick="app.weathersController.getConvertedTemp()"><p> ${toF}&#176; </p> 
    <p class="city-text text-light text-center">${cityName}</p>
        
     </div>`
  document.getElementById('weather').innerHTML = template
}

// <button onclick="getConvertedTemp()">Click Me</button> 
// ${toF}&#176;
export default class WeathersController{
  constructor(){
    ProxyState.on('weather', _drawWeather)
    // console.log('from weathers controller')
    this.getWeather()
    this.getConvertedTemp()
  }

  async getWeather(){
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error(error);
    }
  }

 async getConvertedTemp(){
  try {
    await weathersService.getConvertedTemp()
  } catch (error) {
    console.error(error);
  }
  }
}