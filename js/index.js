var imagsElement = Array.from( document.querySelectorAll(".item img"));
var BoxContainer =document.querySelector("#BoxContainer");
var boxInner = document.querySelector("#boxInner")
var closeElement = document.querySelector("#close")
var prevElement = document.querySelector("#prev")
var nextElement = document.querySelector("#next")
var currentIndex =0;
for(var i =0 ;i<imagsElement.length;i++){
    imagsElement[i].addEventListener("click",function(e){
        BoxContainer.style.display = "flex";
        var imgsrc = e.target.getAttribute("src");
        boxInner.style.backgroundImage = "url("+imgsrc+")";
        currentIndex = imagsElement.indexOf(e.target);

    })
}

closeElement.addEventListener("click",closeSlide)
function closeSlide(){
    BoxContainer.style.display = "none";
}

nextElement.addEventListener("click",nextSlide);
function nextSlide(){
currentIndex++;
if(currentIndex == imagsElement.length){
    currentIndex=0;
}

var imgsrc = imagsElement[currentIndex].getAttribute("src");
boxInner.style.backgroundImage = "url("+imgsrc+")";
}


prevElement.addEventListener("click",prevSlide);
function prevSlide(){
currentIndex--;
if(currentIndex < 0){
    currentIndex=imagsElement.length-1;
}

var imgsrc = imagsElement[currentIndex].getAttribute("src");
boxInner.style.backgroundImage = "url("+imgsrc+")";
}


document.addEventListener("keyup",function(e){
    
    if(e.code =="ArrowRight"){
        nextSlide()
    }
    else if(e.code =="ArrowLeft"){
        prevSlide()
    }
    else if(e.code =="Escape"){
        closeSlide()
    }
})
 