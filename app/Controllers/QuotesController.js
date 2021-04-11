import { ProxyState } from "../AppState.js";
import { quotesServices } from "../Services/QuotesServices.js";

function _drawQuotes(){
  let template = ''
  let quotesContent = ProxyState.quotes.content
  let author = ProxyState.quotes.author
  template += /*html */ `

  <div class="p-3 question" id="quotesContent">
          <div class="quotesContent quotes-text text-light"> "${quotesContent}" </div> 
    		<div class="hide answer pt-2 text-center"> ${author} 🖊️</div>
      </div>
     
  `

  // <div class="p-3 question" id="quotesContent">
  //         <p class="quotesContent">  </p> 
  //         <div class="answer pt-2">
  //             <div class="hide m-0 text-center" id="author"></div>
  //         </div>
  //     </div>

  document.getElementById('quote').innerHTML = template
}
export default class QuotesController{
  constructor(){
    ProxyState.on('quotes', _drawQuotes)
    // console.log('from quotes controller');
    this.getQuotes()
  }

  async getQuotes(){
    try {
      await quotesServices.getQuotes()
    } catch (error) {
      console.error(error);
    }
  }


}