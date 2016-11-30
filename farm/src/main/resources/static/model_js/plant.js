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



ajaxRequest = function(){
	$.ajax({ url: "/user/info", dataType:"json",success: function(data){
	    alert(data);
	}});
}