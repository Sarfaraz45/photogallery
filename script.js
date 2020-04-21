function upDate(element){

document.getElementById("image").innerHTML=element.alt;
}

function unDo(){
    document.getElementById("image").innerHTML="Hover over an image below to display here"
}

function openFunction(){
    e1 = document.getElementById("content");
    e1.style.display = "block";
}

function closeFunction(){
    e1 = document.getElementById("content");
    e1.style.display = "none";}

