var baseUrl = "http://hsing.natapp1.cc/"
$(function() {

$.post(baseUrl + "api/demo/index/countdown",
function(res){
	console.log(res);
	$('#simple_timer').syotimer({
		year: res.data.year,
		month:  res.data.month,
		day: res.data.date,
		hour: res.data.hour,
		minute: res.data.minute,
	});
},'json')
	
	
	$("#teacherGroupList> .teacherGroup").hover(function() {
		// let ht=$(this).find(".teacher_jieshao").height()

		// $(this).find(".teacher_jieshao").show().animate({height: ht},500)
		$(this).find(".teacher_jieshao").show()
		$(this).css({
			opacity: 0.8
		})

	}, function() {
		$(this).find(".teacher_jieshao").hide()
		// $(this).find(".teacher_jieshao").stop().animate({"height":"0px"},500);
		$(this).css({
			opacity: 1
		})
	})
	$.post(baseUrl + "api/demo/index/index",
		function(res) {
			console.log(res);
			//4个课程处理
			let homelist=res.data.homelist.data
			$(".logoBottom").each(function(index){
				$(this).attr("src",homelist[index].thumbnail)
			})
			$(".logoBottomtext").each(function(index){
				$(this).append(homelist[index].title)
				$(this).attr('onclick',"toWailian('"+homelist[index].jump_url+"')")
			})
			
			
			//电网头条处理
			let leadlist=res.data.leadlist.data
			$("#toutiaoName").append(res.data.leadlist.msg)
			$.each(leadlist,function(index){
				if(index==0){
					$("#toutiaoList").append("<li class='mb-3'><div class='d-flex align-items-center'><b>"+(index+1)+". </b><b class='chaochu' onclick='toDetail("+leadlist[index].id+")' style='max-width: 95%;'>"+leadlist[index].post_title+"</b><img src='img/new1.png' class='newImg'></div><div>"+leadlist[index].published_time+"</div></li>")
					
				}else{
					$("#toutiaoList").append("<li class='mb-3'><div class='d-flex align-items-center'><b>"+(index+1)+". </b><b class='chaochu' onclick='toDetail("+leadlist[index].id+")' style='max-width: 95%;'>"+leadlist[index].post_title+"</b></div><div>"+leadlist[index].published_time+"</div></li>")
					
				}
			})
			
			//招考公告处理
			let noticelist=res.data.noticelist.data
			$("#zhaokaoName").append(res.data.noticelist.msg)
			$.each(noticelist,function(index){
				if(index==0){
					$("#zhaokaoList1T").append(noticelist[index].post_title)
					$("#zhaokaoList1T").attr("onclick","toDetail("+noticelist[index].id+")")
					$("#zhaokaoList1D").append(noticelist[index].published_time)
					$("#zhaokaoList1N").append(noticelist[index].post_excerpt)
				}else{
					$("#zhaokaoList").append("<li><div class='row mb-3'><img src='"+noticelist[index].thumbnail+"' class='col-5 rounded'><div class='col-7 pl-0 d-flex flex-column justify-content-around'><b style='cursor: pointer;' onclick='toDetail("+noticelist[index].id+")'>"+noticelist[index].post_title+"</b><div><small>发表时间："+noticelist[index].published_time+"</small></div></div></div></li>")
				}
			})
			
			//相关资讯处理
			let inforlist=res.data.inforlist.data
			$("#zizunName").append(res.data.inforlist.msg)
			$.each(inforlist,function(index){
				if(index<3){
					$("#zixunList1").append("<div class='d-flex align-items-center w-100'><img src='"+inforlist[index].thumbnail+"' style='width: 110px;height: 90px;'><div class='ml-2'><b class='chaochu2'>"+inforlist[index].post_title+"</b><div>"+inforlist[index].published_time+"</div></div></div>")
				}else{
					$("#zixunList2").append("<div class='d-flex align-items-center w-100'><img src='"+inforlist[index].thumbnail+"' style='width: 110px;height: 90px;'><div class='ml-2'><b class='chaochu2'>"+inforlist[index].post_title+"</b><div>"+inforlist[index].published_time+"</div></div></div>")
					
				}
			})
			
			//直播课堂处理
			let courselist=res.data.courselist.data
			$("#ketangName").append(res.data.courselist.msg)
			$.each(courselist,function(index){
				if(index<3){
					$("#ketangList1").append("<img src="+courselist[index].thumbnail+" class='w-100 mb-3' style='height:87px'> ")
				}else{
					$("#ketangList2").append("<img src="+courselist[index].thumbnail+" class='w-100 mb-3' style='height:87px'>")
				}
			})
			
			//精讲教师处理i
			let teacherList=res.data.teacherlist
			$("#jiaoshi").append(res.data.teacherlist.msg)
			$(".teacher_img").each(function(index){
				if(teacherList.data[index]){
					$(this).attr("src",teacherList.data[index].thumbnail)
				}
				
			})
			
			//教学环境处理
			let jxhjlist=res.data.jxhjlist
			// if(jxhjlist.data.length>4){
			// 	$("#huanjing1").append("<div class='col-3 flexc'><img  class='huanjingImg' style='height: 150px;border-radius: 10px;'><span class='chaochu envir_title'></span></div>")
			// }
			
			$(".huanjingImg").each(function(index){
				if(jxhjlist.data[index]){
					$(this).attr("src",jxhjlist.data[index].thumbnail)
				}
			})
			
			$(".envir_title").each(function(index){
				if(jxhjlist.data[index]){
					$(this).append(jxhjlist.data[index].post_title)
				}
			})
			
			
		
			
			
			
			
			
			
			
			
			
			
			
		},"json")


	$(".zhaokao2").ellipsis({
		row: 2
	})
	$(".chaochu3").ellipsis({
		row: 3
	})

})


function toWailian(url){
		window.open(url)
	}
function toDetail(id) {
	console.log("asdfsfd");
	window.location.href = 'detail.html?id='+id
}




















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
