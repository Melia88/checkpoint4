export default class Weather{
 constructor({main, data}){
  this.main = main.temp 
  this.city = data.name
 }


}