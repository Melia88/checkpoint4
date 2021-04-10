import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";

class QuotesServices{
 async getQuotes() {
    
    let res = await sandboxApi.get('quotes')
    // console.log(res.data)
    ProxyState.quotes = res.data
  }
  constructor(){
  }


}

export const quotesServices = new QuotesServices();