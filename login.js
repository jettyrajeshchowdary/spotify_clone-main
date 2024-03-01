let btn=document.querySelector("form");
btn.addEventListener("submit",function(event){
event.preventDefault();
let usr=document.querySelector("#usrnm");
let pss=document.querySelector("#paswrd");
alert(`Hiii  ${usr.value} welcome to spotify`);
});