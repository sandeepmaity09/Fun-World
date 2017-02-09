function changeMe(){
	document.getElementById('changeM').innerHTML = "I'm Changed.";
};

function rechangeMe(){
 	document.getElementById('changeM').innerHTML = "I'm going to be changed.";
};


var varTimer = null;

function showTimer(){
	varTimer = setInterval(function(){startTimer()},1000);	
};

function startTimer(){
	var date= new Date();
	var time= date.toLocaleTimeString();
		document.getElementById('showTimers').innerHTML=time;
};

function stopTimer(){
	clearInterval(varTimer);
	document.getElementById('showTimers').innerHTML="Please Start Me";
};

function greyMe(){
	document.getElementById('changing').style.color="grey";
	document.getElementById('changing').innerHTML="I'm Grey";
};

function blueMe(){
	document.getElementById('changing').style.color="blue";
	document.getElementById('changing').innerHTML="I'm Blue";
};

function greenMe(){
	document.getElementById('changing').style.color="green";
	document.getElementById('changing').innerHTML="I'm Green";
};

function skyMe(){
	document.getElementById('changing').style.color="lightblue";
	document.getElementById('changing').innerHTML="I'm Sky";
};

function orangeMe(){
	document.getElementById('changing').style.color="#eea236";
	document.getElementById('changing').innerHTML="I'm Orange";
};

function redMe(){
	document.getElementById('changing').style.color="red";
	document.getElementById('changing').innerHTML="I'm Red";
};

function addMe(){
	var num1 = parseInt(document.getElementById('add-num-1').value);
	var num2 = parseInt(document.getElementById('add-num-2').value);
	var num3 = num1 + num2;
	document.getElementById('add-num-show').value = num3;
};

function subtractMe(){
	var num1 = parseInt(document.getElementById('sub-num-1').value);
	var num2 = parseInt(document.getElementById('sub-num-2').value);
	var num3 = num1 - num2;
	document.getElementById('sub-num-show').value = num3;
};

function multiplyMe(){
	var num1 = parseInt(document.getElementById('mul-num-1').value);
	var num2 = parseInt(document.getElementById('mul-num-2').value);
	var num3 = num1 * num2;
	document.getElementById('mul-num-show').value = num3;
};

function divideMe(){
	var num1 = parseInt(document.getElementById('div-num-1').value);
	var num2 = parseInt(document.getElementById('div-num-2').value);
	var num3 = num1 / num2;
	document.getElementById('div-num-show').value = num3;
};


function drawCircle(){
	var c = document.getElementById("drawCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath()
	ctx.arc(100,50,50,0,2*Math.PI);
	ctx.stroke();
}

function drawRectangle(){
	var c = document.getElementById("drawCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle("#FF0000");
	ctx.fillRect(0,0,200,200);
}