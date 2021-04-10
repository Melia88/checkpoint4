import { sandboxApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
 
class ImagesService{
 async getBackgroundImage(id) {
    let res = await sandboxApi.get("/images", id)
        ProxyState.images = res.data.url
  }

}
  export const imagesService = new ImagesService();


