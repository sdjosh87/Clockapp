function clockTime() {
    /* Month, Day, Year */
    var today = new Date();
    var date = 
    today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear();
    
    /* Hour, Minute, Second */
    var hours = 
    today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    var am_pm = 
    today.getHours() >= 12 ? "PM" : "AM";
    var min = 
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    var sec = 
    today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    
    var time = hours + ":" + min + ":" + sec + am_pm;

    document.getElementById("clockbox").innerText = date;
    document.getElementById("clockbox2").innerText = time;
    
    var t = setTimeout(function(){ clockTime() }, 1000); /* refresh timer */
    }

function updateTime(t) {
    if (t < 10) {
      return "0" + t;
    }
    else {
      return t;
    }
  }

clockTime(); /*Runs the function*/
    