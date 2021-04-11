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

  ProxyState.weather = res.data
  // console.log(res.data)
    
  }
 
  getConvertedTemp(checked){
    let weather = ProxyState.weather
    let toC = Math.round(weather- 273.15)
    let toF = Math.round(((weather - 273.15) * 1.8) + 32)
  
    if(ProxyState.weather != checked){
      toF
    } else {
      toC
    }
  }

}

export const weathersService = new WeathersService();