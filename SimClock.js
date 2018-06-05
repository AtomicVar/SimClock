function main() {
	time();
	setInterval("time()", 1000);
}

function time() {
	var ctx = document.getElementById('cvs').getContext('2d');
	ctx.clearRect(0, 0, 400, 400);
	ctx.translate(200, 200);
	//Hour Body
	for (i = 0; i < 12; i++) {
		ctx.beginPath();
		ctx.moveTo(90, 0);
		ctx.lineTo(100, 0);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;
		ctx.stroke();
		ctx.rotate(Math.PI / 6);
	}
	//Minutes Body
	for (i = 0; i < 60; i++) {
		if (i % 5 != 0) {
			ctx.beginPath();
			ctx.moveTo(95, 0);
			ctx.lineTo(100, 0);
			ctx.strokeStyle = "gray";
			ctx.lineWidth = 2;
			ctx.stroke();
		}
		ctx.rotate(Math.PI / 30);
	}
	//画指针
	var time = new Date();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	hr = hour >= 12 ? hour - 12 : hour;
	//hour
	ctx.save();
	ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
	ctx.beginPath();
	ctx.moveTo(0, 5);
	ctx.lineTo(0, -40);
	ctx.strokeStyle = "black";
	ctx.lineWidth = 8;
	ctx.stroke();
	ctx.restore();
	//minutes
	ctx.save();
	ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
	ctx.beginPath();
	ctx.moveTo(0, 6);
	ctx.lineTo(0, -60);
	ctx.strokeStyle = "black";
	ctx.lineWidth = 5;
	ctx.stroke();
	ctx.restore();
	//seconds
	ctx.save();
	ctx.rotate((Math.PI / 30) * sec);
	ctx.beginPath();
	ctx.moveTo(0, 5);
	ctx.lineTo(0, -80);
	ctx.strokeStyle = "black";
	ctx.lineWidth = 4;
	ctx.stroke();
	ctx.restore();
	ctx.translate(-200, -200);

	document.getElementById('hr').value = hour;
	document.getElementById('min').value = min;
	document.getElementById('sec').value = sec;
}