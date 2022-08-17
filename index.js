
 const hoursEl = document.getElementById("hours");
 const minEl = document.getElementById("minutes");
 const secEl = document.getElementById("seconds");
 const ampmEl = document.getElementById("AmPm");

 function updateClock(){

 let h = new Date().getHours();
 let m = new Date().getMinutes();
 let s = new Date().getSeconds();
 let ampm = "AM";

 if( h > 12 ){
   h = h - 12;
   ampm = "PM";

 }

 h = h < 10 ? "0" + h : h;

  hoursEl.innerText = h;
  minEl.innerText = m;
  secEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(()=>{
    updateClock()
  }, 1000)

}

 updateClock();