$(function(){
	
	$("#teacherGroupList> .teacherGroup").hover(function(){
		// let ht=$(this).find(".teacher_jieshao").height()
		
		// $(this).find(".teacher_jieshao").show().animate({height: ht},500)
		$(this).find(".teacher_jieshao").show()
		$(this).css({opacity:0.8})
		
	},function(){
		$(this).find(".teacher_jieshao").hide()
		// $(this).find(".teacher_jieshao").stop().animate({"height":"0px"},500);
		$(this).css({opacity:1})
	})
	
})




















// var hostUrl = "http://localhost:3000/"
// var zkList=[]
// $(function() {
// 	console.log("12412314")

// 	// 电网头条文章
// 	// $.get(hostUrl + 'toutiao', {data:1}, function(res) {
// 	// 	console.log('头条文章')
// 	// 	console.log(res.data.list);
// 	// 	 zkList = res.data.list
// 	// 	$.each(zkList, function(index, value) {
// 	// 		var liList = '<li class="mb-3" onclick="ttNewsDetail('+index+')">' + '<b>' + (index+1) + '、' + zkList[index].title + '</b>' + '<div>' + zkList[index].time + '</div>' + '</li>'
// 	// 		$("#toutiao").append(liList)
// 	// 	})
// 	// }, 'json')

// 	// 招考公告文章
// 	$.get(hostUrl + 'zhaokao', {}, function(res) {
// 		console.log('招考文章')
// 		console.log(res);
// 		let ttList = res
// 		for (let i = 0; i < ttList.length; i++) {
// 			// var liList = '<li class="mb-3">' + '<b>' + i + '、' + ttList[i].title + '</b>' + '<div>' + ttList[i].time +
// 			// 	'</div>' +
// 			// 	'</li>'
// 			// $("#zhaokao").append(liList)
// 		}
// 	}, 'json')
	
// 	let geohash='40.10038,116.36867'
// 	$.get(hostUrl+`address/${geohash}`,{},function(res){
// 		console.log(res);
// 	})


// })

// function zkshowMore() {
// 	console.log("招考查看更多");

// }

// function ttshowMore() {
// 	console.log("头条查看更多");


// }
// function ttNewsDetail(index){
// 	console.log(index);
// 	console.log(this.zkList[index]);

// }