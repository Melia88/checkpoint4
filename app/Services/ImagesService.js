import { sandboxApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
 
class ImagesService{
 async getBackgroundImage() {
  //  /images appends to the end of the sandboxApi, pulls up all the images and then saves them into res (let res)
    let res = await sandboxApi.get("/images")
  // res.data.url (url is what the image is called in sandbox) is now saved into ProxyState images = null
        ProxyState.images = res.data.url
  }

}
  export const imagesService = new ImagesService();


