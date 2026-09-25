document.addEventListener("DOMContentLoaded", () => {

const roles=[
"Senior Ruby on Rails Developer",
"Full Stack Engineer",
"ReactJS Developer",
"AWS • Docker • PostgreSQL",
"10+ Years Experience"
];

const typing=document.getElementById("typing");
let role=0;
let letter=0;
let remove=false;

function type(){
let text=roles[role];

if(remove){
typing.textContent=text.substring(0,letter--);
}else{
typing.textContent=text.substring(0,letter++);
}

let speed=80;

if(!remove && letter===text.length+1){
remove=true;
speed=1500;
}

if(remove && letter===0){
remove=false;
role=(role+1)%roles.length;
speed=300;
}

setTimeout(type,speed);
}

type();

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.2});

sections.forEach(section=>observer.observe(section));

const header=document.querySelector("header");
const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){
header.classList.add("sticky");
}else{
header.classList.remove("sticky");
}

let current="";

sections.forEach(section=>{
const top=section.offsetTop-150;
if(pageYOffset>=top){
current=section.id;
}
});

links.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}
});

if(window.scrollY>350){
btn.style.display="block";
}else{
btn.style.display="none";
}

});

links.forEach(link=>{
link.addEventListener("click",e=>{
e.preventDefault();
const target=document.querySelector(link.getAttribute("href"));

target.scrollIntoView({behavior:"smooth"});
});
});

const btn=document.createElement("button");
btn.id="topBtn";
btn.innerHTML="↑";
document.body.appendChild(btn);

btn.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});

document.getElementById("year").textContent=
`© ${new Date().getFullYear()} Divya Chouhan • Ruby on Rails Full Stack Developer`;

console.log("Portfolio Loaded Successfully 🚀");

});