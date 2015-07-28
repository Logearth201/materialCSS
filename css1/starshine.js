var dwzt_cssmaterial_nonnonloggatukuttanndayo_ctx;
var dwzt_cssmaterial_nonnonloggatukuttanndayo_drawobj = [];
function dwzt_cssmaterial_nonnonloggatukuttanndayo_init(){
	var canvas = $("#donotusebylog_logmaterialbackview_001").get(0);
	canvas.width = window.parent.screen.width;
	canvas.height =  window.parent.screen.height;
	if (!canvas || !canvas.getContext) {
		//IE対策はここにでも書けば？
		console.log("Canvas非対応です。");
		return false;
	}
	var tmp = ["#FF0000","#00FF00","#FFFF00","#00FFFF","#0000FF","#FF00FF","#FFFFFF"];
	dwzt_cssmaterial_nonnonloggatukuttanndayo_ctx = canvas.getContext("2d");
	for(var i=0;i<=80;i++){
		dwzt_cssmaterial_nonnonloggatukuttanndayo_drawobj[i] = new dwzt_cssmaterial_nonnonloggatukuttanndayo_Star(tmp[Math.floor(Math.random()*tmp.length)]);
	}
	var loop = function(){
		dwzt_cssmaterial_nonnonloggatukuttanndayo_ctx.clearRect(0,0,window.parent.screen.width,window.parent.screen.height);
		for(var i=0;i<=dwzt_cssmaterial_nonnonloggatukuttanndayo_drawobj.length-1;i++){
			dwzt_cssmaterial_nonnonloggatukuttanndayo_drawobj[i].draw();
		}
		setTimeout(loop,dwzt_cssmaterial_nonnonloggatukuttanndayo_timegap);
	}
	loop();
}

function dwzt_cssmaterial_nonnonloggatukuttanndayo_Star(rgb0){
	this.x = Math.floor(Math.random() * window.parent.screen.width);
	this.y = Math.floor(Math.random() * window.parent.screen.height);
	this.time = Math.floor(100 * Math.random());
	this.k = (Math.random() * 20 + 10) / 2.1;
	this.rgb = rgb0;
}
dwzt_cssmaterial_nonnonloggatukuttanndayo_Star.prototype.draw = function(){
	dwzt_cssmaterial_nonnonloggatukuttanndayo_ctx.globalAlpha = 0.2+0.2*Math.sin(this.time / this.k);
	dwzt_cssmaterial_nonnonloggatukuttanndayo_ctx.fillStyle = this.rgb;
	dwzt_cssmaterial_nonnonloggatukuttanndayo_ctx.beginPath();
	dwzt_cssmaterial_nonnonloggatukuttanndayo_ctx.arc(this.x,this.y,50,0,Math.PI*2,false);
	dwzt_cssmaterial_nonnonloggatukuttanndayo_ctx.fill();
	this.time ++;
};
function dwzt_cssmaterial_nonnonloggatukuttanndayo_onload(){
	
}

window.addEventListener("load", dwzt_cssmaterial_nonnonloggatukuttanndayo_onload,false);

dwzt_cssmaterial_nonnonloggatukuttanndayo_init();