var videoPlayer=document.getElementById("videoPlayer");
var myVideo=document.getElementById("myVideo");

//close video function
function stopVideo(){
  videoPlayer.style.display="none";
}

//display video function
function playVideo(file){
     myVideo.src=file;
     videoPlayer.style.display="block";
     

}