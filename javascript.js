const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
    fulImg.style.width = '500px';
    fulImg.style.height = '800px'

}
function closeImg(){
    fulImgBox.style.display = "none";
}


