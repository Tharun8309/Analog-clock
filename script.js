
setInterval(()=>
{
let x=new Date();
let h=x.getHours();
let m=x.getMinutes();
let s=x.getSeconds();
let hr=30*h+m/2;
let mr=6*m;
let sr=6*s;
document.querySelector("#hour").style.transform = `rotate(${hr}deg)`;
document.querySelector("#minute").style.transform = `rotate(${mr}deg)`;
document.querySelector("#second").style.transform = `rotate(${sr}deg)`;
},1000);
