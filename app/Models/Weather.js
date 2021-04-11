import { ProxyState } from "../AppState.js"

export default class Weather{
 constructor({main, name}){
  this.main = main.temp 
  this.city = name
  this.clicked = true

  this.toF = Math.floor(((main.temp - 273.15) * 1.8) + 32)  
  this.toC = Math.floor(main.temp - 273.15)

 }

 get Template(){
   return `<div class="cursor weather-text m-2 p-4 text-center text-light text-shadow" onclick="app.weathersController.getConvertedTemp()"><p> ${this.clicked ? this.toF + '&#176;F' : this.toC+'&#176;C'} </p> 
   <p class="city-text text-light text-center">${this.city}</p>
   
   </div>`
 }

 

//  let toF = (weatherTemp - 32) * 5 / 9;
//   let toc = (weatherTemp - 32) * 5 / 9;

 
//   let toC = ProxyState.weather(c => c.temp == ( - 32) * 5 / 9)
//   return 
 

//  get Temp(){
//  let temp = ProxyState.weather.clicked
  
//  let toF = (this.main - 32) * 5 / 9;
//  let toC = (this.main - 32) * 5 / 9;
//  temp = ProxyState.weather(w => w.main += toF)
//     if(!temp) {
//       return (this.main += toC) 
//     }
// }
}