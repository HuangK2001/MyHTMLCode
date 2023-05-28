var enroll =document.getElementById("enroll");
enroll.onclick = function(e){
	e.preventDefault();
	enroll.innerHTML="参加成功";
	enroll.style.background ="seagreen";
	enroll.style.borderColor = "seagreen";
}