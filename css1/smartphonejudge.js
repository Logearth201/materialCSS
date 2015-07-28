var dwzt_cssmaterial_nonnonloggatukuttanndayo_smartphone = function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return true;
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return true;
    }else{
        return false;
    }
}

//
//レイアウトの変更処理
//
if(dwzt_cssmaterial_nonnonloggatukuttanndayo_smartphone()){
	$("main").width = 480;
	
}