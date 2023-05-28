//返回值 函数名(形式参数列表){
//	函数体
//}

//function 函数名(形参列表){
//	函数体
//}

//定义函数：关键字function
function sum(a,b){
	return a+b;
}

//调用函数：JS中的函数支持可变参数
var res1 = sum(3,4);
var res2 = sum();
var res3 = sum(3);
var res4 = sum(3,4,5);
document.writeln(res1);
document.writeln(res2);
document.writeln(res3);
document.writeln(res4);

//输入
function input(){
	var score = prompt("请输入一个成绩");
	return score;
}

//处理
function solve(score){
	var res3 = '';
	var rank = ['E','E','E','E','E','D','C','B','A','A'];//查找表结构取代分支
	res3 = rank[parseInt(score/10)];
	return res3;
}

//输出
function output(score,res3){
	console.log("成绩为" + score + "等级为" + res3);
}

//var score = input();
//var res3 = solve();
//output(score,res3);