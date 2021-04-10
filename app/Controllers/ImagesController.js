import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


function _drawImage(){
  document.body.style.backgroundImage = `url(${ProxyState.images})`
}

export default class ImagesController {
  constructor() {
    // listen/watch for when service saves the image url to ProxyState.images (ProxyState.images = res.data.url)
    ProxyState.on("images", _drawImage);
    // call the get method from service so it loads right away
      this.getBackgroundImage()
  }
  async getBackgroundImage(){
     try {
      // not my job, send it to service
     await imagesService.getBackgroundImage()
       
    } catch (error) {
      console.error(error);
    } 
    
  }
}
