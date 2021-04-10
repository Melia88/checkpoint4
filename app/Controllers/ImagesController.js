import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawImage(){
  document.body.style.backgroundImage = `url${ProxyState.images}`
}

export default class ImagesController {
  constructor() {
    ProxyState.on("images", _drawImage);
      this.getBackgroundImage()
  }
  async getBackgroundImage(){
     try {
     await imagesService.getBackgroundImage()
       
    } catch (error) {
      console.error(error);
    } 
    
  }
}
