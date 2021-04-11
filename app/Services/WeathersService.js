import { sandboxApi } from "./AxiosService.js";
import Weather from "../Models/Weather.js"
import { ProxyState } from "../AppState.js";


class WeathersService{
    constructor(){
    // console.log("from weathers service");
  }

 async getWeather() {
   
   let res = await sandboxApi.get('weather')
  //  console.log('Service weather', res);

  ProxyState.weather = new Weather(res.data)
  // console.log(res.data)
    
  }
 
  getConvertedTemp(){
    let weather = ProxyState.weather
    if(weather.clicked == true){
      weather.clicked = false
    }else{
      weather.clicked = true
    }
    ProxyState.weather = ProxyState.weather
  }
}


export const weathersService = new WeathersService();