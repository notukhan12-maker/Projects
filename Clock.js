setInterval(() => {
    let date = new Date;
    let hour=date.getHours() % 12;
    let minute =date.getMinutes();
    let second = date.getSeconds();

    let hrotation= 30 * hour + minute / 2;
    let mrotation= 6 * minute;
    let srotation= 6 * second;

   document.getElementsByClassName("hour")[0].style.transform = `rotate(${hrotation}deg)`;
   document.getElementsByClassName("minute")[0].style.transform = `rotate(${mrotation}deg)`;
   document.getElementsByClassName("second")[0].style.transform = `rotate(${srotation}deg)`;
},1000);