
(function(){ "use strict";
document.addEventListener("DOMContentLoaded",function(){
var s=document.getElementById("pc-care-slider");if(!s)return;
var a=[].slice.call(s.querySelectorAll(".pc-care-slide")),d=[].slice.call(s.querySelectorAll(".pc-care-slider-dot")),p=s.querySelector(".pc-care-slider-prev"),n=s.querySelector(".pc-care-slider-next"),i=0,t=null,delay=4000;
function show(x){i=(x+a.length)%a.length;s.setAttribute("data-active-slide",String(i));a.forEach(function(e,k){e.classList.toggle("is-active",k===i);e.setAttribute("aria-hidden",k===i?"false":"true")});d.forEach(function(e,k){e.classList.toggle("is-active",k===i);e.setAttribute("aria-selected",k===i?"true":"false")})}
function start(){clearInterval(t);t=setInterval(function(){show(i+1)},delay)}
d.forEach(function(e,k){e.onclick=function(){show(k);start()}});if(p)p.onclick=function(){show(i-1);start()};if(n)n.onclick=function(){show(i+1);start()};
s.addEventListener("mouseenter",function(){clearInterval(t)});s.addEventListener("mouseleave",start);show(0);start();
});
})();
