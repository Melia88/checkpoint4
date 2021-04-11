import {ProxyState} from '../AppState.js'
import { clocksService } from '../Services/ClocksService.js'


function _drawClock(){
  
}
export default class ClocksController{
  constructor(){
    ProxyState.on('clock', _drawClock)
    this.getClock()
  }

  async getClock(){
    try {
      await clocksService.getClock()
    } catch (error) {
      console.error(error);
    }
  }
}
