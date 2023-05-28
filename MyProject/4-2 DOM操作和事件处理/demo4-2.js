var score = input();
var res = solve(score);
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
p1.innerHTML += score;
p2.innerHTML += res;