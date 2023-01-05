let card=document.getElementById("card");
let username=document.getElementById("username");
let email=document.getElementById("email");
let Username=document.getElementById("usernam");
let email1=document.getElementById("email1");


moon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moon.src="images/sun.png";
        card.style.backgroundColor="#fff"
        card.style.boxShadow="10px 10px 10px #32384f";
        Username.style.backgroundColor="#32384f"
        Username.style.color="#fff"
        email1.style.backgroundColor="#32384f"
        email1.style.color="#fff"
    }
    else{
        moon.src="images/moon.png";
        card.style.backgroundColor="#32384f";
        Username.style.backgroundColor="#fff"
        Username.style.color="#32384f"
        email1.style.backgroundColor="#fff"
        email1.style.color="#32384f"
    }
}



// localStorage.setItem("person",JSON.stringify("ahmed"))






