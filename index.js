let hours = document.querySelector(".hr");
let minutes = document.querySelector(".min");
let second = document.querySelector(".sec");
let indicate = document.querySelector("h3");
let wishing = document.querySelector(".Timing");
let background = document.querySelector(".container");
// console.log(new Date());

function timing(){
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
   let sec = new Date().getSeconds();
    second.innerText = `${sec}`;
    // let show = hour >= 12 ? "Pm": "Am";

    let show = " ";
    if(hour >= 12 && hour <= 17){
        show = "pm";
        wishing.innerText = `Good Afternoon`;
        background.classList.add("backimage");
    }else if(hour >= 17 && hour <= 21) {
        wishing.innerText = `Good Evening`
        show = "pm";
        background.classList.add("evening");
        wishing.style.color = "white"
    }
    else if(hour > 21 && hour < 24){
        show = "pm";
        wishing.innerText = `Good Night`
        wishing.style.color = "white"
        background.style.background = "url('https://th.bing.com/th/id/OIP.pHdRx07J1l6d424DH5bYxwHaE8?pid=ImgDet&rs=1')"
    }
    else if(hour <= 5) {
        wishing.innerText = `Good Night`
        wishing.style.color = "white"
        background.style.background = "url('https://th.bing.com/th/id/OIP.pHdRx07J1l6d424DH5bYxwHaE8?pid=ImgDet&rs=1')"
        show = "Am";
    }
    else{
        background.classList.add("imageChange");
        show = "Am";
    }
    hour= hour % 12 || 12;

    if(hour < 10){
        hour ="0"+hour;
    }
    if(min < 10 ) {
        min ="0"+min;
    }
    if(sec < 10 ) {
        sec ="0"+sec;
    }
    second.innerText = `${sec}`;
    indicate.innerText = `${show}`;
    minutes.innerText = `${min}`;
    hours.innerText = `${hour}`;

}

setInterval(timing,1000);


