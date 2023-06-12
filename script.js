let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".mobi-nav");
let btn = document.querySelector(".design");
let secondBtn = document.querySelector(".functionality");
let project01 = document.querySelector(".project-heading");
let portfolio = document.querySelector(".hyper-text");
let portfolio2 = document.querySelector(".wrapper");
let project02 = document.querySelector(".project-02-heading");
let portfolioJs = document.querySelector(".JavaScript");
let portfolioJs2 = document.querySelector(".javascript-wrapper");


hamburger.addEventListener("click", function(){
	mobileNav.classList.toggle("active-nav");
})
btn.addEventListener("click", function(){
	project01.classList.remove("active-heading");
	portfolio.classList.remove("active");
	portfolio2.classList.remove("active");
	project02.classList.add("active");
	portfolioJs.classList.add("active");
	portfolioJs2.classList.add("active");
});

secondBtn.addEventListener("click", function(){
	project01.classList.add("active-heading");
	portfolio.classList.add("active");
	portfolio2.classList.add("active");
	project02.classList.remove("active");
	portfolioJs.classList.remove("active");
	portfolioJs2.classList.remove("active");
})