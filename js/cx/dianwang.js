var baseUrl = "http://hsing.natapp1.cc/"
$(function() {
	$("#headerpage").load("header.html");
	$("#aboutNav").load("./common/aboutNav.html");
	$("#footer").load("footer.html");
	showfirst()
	
	$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
		console.log($(this)[0].id);
		if($(this)[0].id=='pills-gonggao-tab'){
			$("#gonggaoList").empty()
			show(2)
		}else if($(this)[0].id=='pills-zhidao-tab'){
			$("#zhidaoList").empty()
			show(3)
		}else if($(this)[0].id=='pills-kuaixun-tab'){
			$("#kuaixunList").empty()
			show(4)
		}
	})
	
	
	
	
})
function showfirst(currentid){
	$.post(baseUrl+'api/demo/power/index',function(res){
		
		if(res.code==1){
			console.log(res);
			let list=res.data.list
			
			var visiblePages1
			var totalPages1=res.data.totalpage
			if(res.data.totalpage>6){
				 visiblePages1=6
			}else{
				 visiblePages1=res.data.totalpage
			}
			
			$("#gonggaototalpage").append(res.data.totalpage)
			$("#gonggaoTotal").append(res.data.total)
			
			$.each(list,function(index){
				if(index<3){
					$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
				}else{
					$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
				}
			})
			//加载分液器
			$.jqPaginator('#gonggaopage', {
				totalPages: totalPages1,
				visiblePages: visiblePages1,
				currentPage: 1,
				first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
				prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
				next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
				last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
				page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
				onPageChange: function(num, type) {
					console.log("pagercahgne");
					console.log(num);
					$.post(baseUrl+'api/demo/power',{'page':(num-1)},function(res){
							console.log(res);
							if(res.code==1){
								let list=res.data.list
								//初始化后填充数据
								$("#gonggaoList").empty()
								$("#gonggaototalpage").empty()
								$("#gonggaoTotal").empty()
								
								$("#gonggaototalpage").append(res.data.totalpage)
								$("#gonggaoTotal").append(res.data.total)

								$.each(list,function(index){
									if(num!=1){
										$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
									}else{
										if(index<3){
											$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
										}else{
											$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
										}
									}
								})
							}
					},'json')
				}
			});
		}
	},'json')
}
function show(currentid){
	console.log(currentid);
	$.post(baseUrl+'api/demo/power/index',{'category_id':currentid},function(res){
		console.log(res.data);
		if(res.code==1){
			let list=res.data.list
			$.each(list,function(index){
				if(currentid==2){
					
					if(index<3){
						$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					}else{
						$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					}
					var visiblePages1
					var totalPages1=res.data.totalpage
					if(res.data.totalpage>6){
						 visiblePages1=6
					}else{
						 visiblePages1=res.data.totalpage
					}
					
					$("#gonggaototalpage").append(res.data.totalpage)
					$("#gonggaoTotal").append(res.data.total)
					
					//加载分液器
					$.jqPaginator('#gonggaopage', {
						totalPages: totalPages1,
						visiblePages: visiblePages1,
						currentPage: 1,
						first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
						prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
						next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
						last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
						page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
						onPageChange: function(num, type) {
							$.post(baseUrl+'api/demo/power/index',{'page':(num-1)},function(res){
									console.log(res);
									if(res.code==1){
										let list=res.data.list
										//初始化后填充数据
										$("#gonggaoList").empty()
										$("#gonggaototalpage").empty()
										$("#gonggaoTotal").empty()
										
										$("#gonggaototalpage").append(res.data.totalpage)
										$("#gonggaoTotal").append(res.data.total)
							
										$.each(list,function(index){
											if(num!=1){
												$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
											}else{
												if(index<3){
													$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
												}else{
													$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
												}
											}
										})
									}
							},'json')
						}
					});
					 
				}else if(currentid==3){
					 console.log(res.data);
					 if(index<3){
					 	$("#zhidaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					 }else{
					 	$("#zhidaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					 }
					var visiblePages2
					var totalPages2=res.data.totalpage
					if(res.data.totalpage>6){
						 visiblePages2=6
					}else{
						 visiblePages2=res.data.totalpage
					}
					
					
					//加载分液器
					$.jqPaginator('#zhidaopage', {
						totalPages: totalPages2,
						visiblePages: visiblePages2,
					 	currentPage: 1,
					 	first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
					 	prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
					 	next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
					 	last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
					 	page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
					 	onPageChange: function(num, type) {
					 		$.post(baseUrl+'api/demo/power/index',{'page':(num-1)},function(res){
					 				console.log(res);
					 				if(res.code==1){
					 					let list=res.data.list
					 					//初始化后填充数据
					 					$("#zhidaoList").empty()
					 					$("#xinwenpage").empty()
					 					$("#xinwenTotal").empty()
					 					
					 					$("#xinwenpage").append(res.data.totalpage)
					 					$("#xinwenTotal").append(res.data.total)
					 		
					 					$.each(list,function(index){
					 						if(num!=1){
					 							$("#zhidaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					 						}else{
					 							if(index<3){
					 								$("#zhidaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					 							}else{
					 								$("#zhidaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					 							}
					 						}
					 					})
					 				}
					 		},'json')
					 	}
					 });
				}else if(currentid==4){
					 
					 if(index<3){
					 	$("#kuaixunList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					 }else{
					 	$("#kuaixunList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
					 }
					 var visiblePages
					 var totalPages
					 //加载分液器
					 $.jqPaginator('#kuaixunpage', {
					 	totalPages: 3,
					 	visiblePages: 3,
					 	currentPage: 1,
					 	first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
					 	prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
					 	next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
					 	last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
					 	page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
					 	onPageChange: function(num, type) {
					 		$('#p2').text(type + '：' + num);
					 	}
					 });
				}
				
				// $("#zhidaoList").empty()
				// $("#kuaixunList").empty()
				// if(index<3){
				// 	if(currentid==2){
				// 		$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
				// 	}
				// 	if(currentid==3){
						
				// 		$("#zhidaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
				// 	}
				// 	if(currentid==4){
						
				// 		$("#kuaixunList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #A6CFFD;'><div class='text-white font-weight-bold' style='font-size: 32px;'>"+list[index].date_time+"</div><div class='text-white' style='font-size: 22px;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='width: 450px;'><div class='font-weight-bold' style='color: #0A68CF; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #779DC4;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #FFC982;'><div>MORE</div> <img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
				// 	}
				// }else{
				// 	if(currentid==2){
				// 		$("#gonggaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
				// 	}
				// 	if(currentid==3){
				// 		$("#zhidaoList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
				// 	}
				// 	if(currentid==4){
				// 		$("#kuaixunList").append("<div class='d-flex py-4' style='border-bottom: 3px dotted #DCDCDC;'><div class='d-flex flex-column align-items-center justify-content-center' style='width: 100px;height: 100px;background-color: #F7F7F7;'><div class='font-weight-bold' style='font-size: 32px;color: #B0B0B0;'>"+list[index].date_time+"</div><div style='font-size: 22px;color: #B0B0B0;'>"+list[index].published_time+"</div></div><div class='ml-4 d-flex flex-column justify-content-center' style='max-width: 450px;'><div class='font-weight-bold' style='color: #333333; font-size: 18px;'>"+list[index].post_title+"</div><div class='chaochu2' style='color: #727272;font-size: 14px;'>"+list[index].post_excerpt+"</div></div><div class='d-flex flex-column justify-content-center ml-5' style='color: #555555;'><div>MORE</div><img src='img/more.png' style='width: 30px;margin-left: 10px;' ></div></div>")
				// 	}
				// }
			})
			
		}
	},'json')
}
