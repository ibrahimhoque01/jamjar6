
var b=document.querySelectorAll(".img-slide");setInterval(function(){var a=document.querySelector(".current");a.classList.remove("current");a.nextElementSibling?a.nextElementSibling.classList.add("current"):b[0].classList.add("current");setTimeout(function(){return a.classList.remove("current")})},4E3)
