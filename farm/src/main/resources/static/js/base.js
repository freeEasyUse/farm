/**
 * 基础js
 */
var farm = {};
/**
 显示
 */
farm.show = function(url,code){

	//不是首页 隐藏宣传
	if(code!=="#home"){
		$(".logo").hide();
		$(".banner-slider").hide();
	}
	else{
		$(".logo").show();
		$(".banner-slider").show();
	}
	
    //获取mianShow
    $("#mainShow > div").hide();
    var element = $(code);

    if(element.children().length>0){
      element.show();
    }
    else{
      element.load(url);
      element.show();
    }










};
