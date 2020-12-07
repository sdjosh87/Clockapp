function clockTime() {
    /* Month, Day, Year */
    var today = new Date();
    var date = 
    today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear();
    
    /* Hour, Minute, Second */
    var hours = today.getHours();
    var am_pm = today.getHours() >= 12 ? "PM" : "AM";
    var min = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    var sec = 
    today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    
    var time = hours + ":" + min + ":" + sec + am_pm;
    
    /*Keeps the hours from showing as "0" at midnight */
    /*Accurate after Noon */
    if(hours ==0) {
      hours = 12;
    }
    if (hours > 12) {
      hours = hours -12;
    }
    
    /*Shows the date and clock on the page */
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
    