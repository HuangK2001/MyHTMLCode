var button = document.getElementById("myButton");
var cd = document.getElementById("cd");
var audio = document.getElementById("myAudio");
button.onclick = function(){
	if(audio.paused){
		audio.play();
		cd.style.animationPlayState="running";
		button.innerHTML="pause";
		button.style.background="grey";
	}
	else{
		audio.pause();
		cd.style.animationPlayState="paused";
		button.innerHTML="play";
		button.style.background="lightgrey";
		
	}
}