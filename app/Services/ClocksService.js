

class ClocksService{
  getClock(){

    let myVar = setInterval(function() {
      myTimer();
    }, 1000);
    
    function myTimer() {
      var d = new Date();
      document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    }
  }

}

export const clocksService = new ClocksService();