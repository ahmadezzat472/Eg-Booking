let fname=document.getElementById("fname");
let email=document.getElementById("email");
let adr=document.getElementById("adr");
let btn=document.getElementById("btn");


let fname1=document.getElementById("fname1");
let email1=document.getElementById("email1");
let adr1=document.getElementById("adr1");
let btn1=document.getElementById("btn1");

let per_data;
if(localStorage.person!=null){
    per_data=JSON.parse(localStorage.person);
}else{
    per_data=[];
}

btn.onclick=function(){
    let person={
        fname:fname.value,
        email:email.value,
        adr:adr.value
    }
    per_data.push(person);
    localStorage.setItem("person",JSON.stringify(per_data));
}


x=per_data.length
function checkout(){
    fname1.value=per_data[x-1].fname;
    email1.value=per_data[x-1].email;
    adr1.value=per_data[x-1].adr;
}
