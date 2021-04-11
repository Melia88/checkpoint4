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
 
  getConvertedTemp(){
    // if(){

    // }
  }
}

export const weathersService = new WeathersService();