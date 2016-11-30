/**
 * 
 */
$('#plant').bootstrapTable({
    url: '../json/plant.json',
    columns: [{
        field: 'time',
        title: '时间'
    }, {
        field: 'location',
        title: '地区'
    }, {
        field: 'field',
        title: '类型'
    }, {
    	field:'seed',
    	title:'种子'
    }
   ]
});


$.ajaxSetup( {
	//设置ajax请求结束后的执行动作
	complete : 
		function(XMLHttpRequest, textStatus) {
			if(XMLHttpRequest.responseText.length>100){
				alert("gogog");
			}
		}
	});



ajaxRequest = function(){
	$.ajax({
		   type: "GET",
		   url: "/user/info",
		   dataType:"json",
		   success: function(msg){
		     alert( "Data Saved: " + msg );
		   },
		   statusCode:{302:function(){
			   alert('go');
		   }}
	});
}