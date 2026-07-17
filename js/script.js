const navbar = document.querySelector("#navbar");
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");
const fade=document.querySelectorAll(".fade-up");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="#081424";

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        navbar.style.background="transparent";

        navbar.style.boxShadow="none";

    }

});

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },800);

});

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

const reveals=document.querySelectorAll(".reveal");

function reveal(){

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

fade.forEach(item=>observer.observe(item));

const words = [

    "Frontend Developer",

    "Full-Stack Developer",

    "React Developer",

    "UI Enthusiast",
    "I build things for the web."

];

let wordIndex=0;
let letterIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function type(){

    const current=words[wordIndex];

    if(!deleting){

        typing.textContent=current.substring(0,letterIndex++);

        if(letterIndex>current.length){

            deleting=true;

            setTimeout(type,1500);

            return;

        }

    }else{

        typing.textContent=current.substring(0,letterIndex--);

        if(letterIndex<0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(type,deleting?50:100);

}

type();

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-200;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

window.addEventListener("scroll",()=>{

    navbar.classList.toggle("scrolled",window.scrollY>30);

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    topBtn.style.display=

        window.scrollY>400

        ?"block"

        :"none";

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};