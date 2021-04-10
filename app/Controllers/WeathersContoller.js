import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather(){
  
  let template = ''
  let weatherTemp = ProxyState.weather.main.temp

  let toF = (weatherTemp - 32) * 5 / 9;
  let toc = (weatherTemp - 32) * 5 / 9;

    template += /*html */ `<div class="weather-text mt-2 text-center text-light text-shadow" onclick="app.weatherscontroller."><p> ${weatherTemp} </p> 
    
    </div>`
  document.getElementById('weather').innerHTML = template
}

export default class WeathersController{
  constructor(){
    ProxyState.on('weather', _drawWeather)
    console.log('from weathers controller')
    this.getWeather()
  }

  async getWeather(){
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error(error);
    }
  }
}