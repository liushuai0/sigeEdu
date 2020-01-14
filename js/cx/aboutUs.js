var baseUrl = "http://hsing.natapp1.cc/"

$(function() {
	$("#headerpage").load("header.html");
	$("#aboutNav").load("aboutNav.html");
	$("#footer").load("footer.html");

	//ajax获取数据
	$.post(baseUrl + "api/demo/sige/index",
		function(res) {
			console.log(res);
			var list = res.data.list
			if (res.code === 1) {
				//左侧侧栏遍历
				$("#listNav >a").each(function(i) {
					$(this).append(list[i].name)
				});
				//右侧标题处理
				$(".sige_title").each(function(i) {
					$(this).append(list[i].name)
				});
				//纯文本填充处理

				var index1arr = [] //纯文本的序号
				var index2arr = [] //列表的序号
				for (let i = 0; i < list.length; i++) {
					//纯文本is_list=0,带列表is_list=1
					if (list[i].is_list == 0) {

						index1arr.push(i)
					} else {
						console.log("列表组" + i);
						index2arr.push(i)
					}
				}

				$(".sige_content").each(function(i) {
					let index1 = index1arr[i]
					$(this).append(list[index1].data[0].post_content)
				})


				//列表组处理
				//1.发展历程
				if ($(".time_title")) {
					let timeindex = index2arr[0]
					$(".time_title").each(function(i) {
						$(this).append(list[timeindex].data[i].post_title)
					})
					$(".year").each(function(i) {
						$(this).append(list[timeindex].data[i].post_excerpt)
					})
					$(".timeImg").each(function(i) {
						$(this).attr("src", list[timeindex].data[i].thumbnail)
					})
				}
				//2.官方新闻
				let xinwenindex = index2arr[1]
				let xinwenList = list[xinwenindex].data
				console.log(xinwenList);
				$("#xinwenpage").append(list[xinwenindex].totalpage)
				$("#xinwenTotal").append(list[xinwenindex].total)
				//加载官方新闻分页器
				let xwtotalPages = list[xinwenindex].totalpage
				let xwvisiblePages = list[xinwenindex].total
				$.jqPaginator('#xinwenPage', {
					totalPages: xwtotalPages,
					visiblePages: xwvisiblePages,
					currentPage: 1,
					first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
					prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
					next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
					last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
					page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
					onPageChange: function(num, type) {
						console.log(num);
						$.post(baseUrl + "api/demo/sige/paginate", {
								'category_id': list[xinwenindex].id,
								'page': num-1
							},
							function(res) {
								console.log(res);
								if (res.data.list.length > 0) {
									let xinwenList = res.data.list
									$('#xinwenList').empty()
									$.each(xinwenList, function(index) {
										$('#xinwenList').append(
											"<div class='row border-bottom mx-3 pb-3 mb-3'><div class='gf_left col-2'><div>" + xinwenList[index].date_time +
											"</div><div class='gf_year'>" + xinwenList[index].year_time +
											"</div><div><img src='img/xinwenright.png' style='width: 20px;height: 20px;'></div></div><div class='gf_center col-7'><div class='gf_title chaochu2'>" +
											xinwenList[index].post_title + "</div><div class='gf_content chaochu2'>" + xinwenList[index].post_excerpt +
											"</div></div><div class='gf_img col-3'><img src=" + xinwenList[index].thumbnail +
											" style='width: 152px;height: 90px;'></div></div>")
									})
								} else {
									
								}
							}, "json")
					}
				});
				
				//3.开班动态
				let dongtaiindex = index2arr[2]
				let dongtaiList = list[dongtaiindex].data
				console.log(dongtaiList);
				$("#dongtaipage").append(list[dongtaiindex].totalpage)
				$("#dongtaiTotal").append(list[dongtaiindex].total)
				//加载开班动态分页器
				let dttotalPages = list[dongtaiindex].totalpage
				let dtvisiblePages = list[dongtaiindex].total
				$.jqPaginator('#dongtaiPage', {
					
					totalPages: dttotalPages,
					visiblePages:dtvisiblePages,
					currentPage: 1,
					first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
					prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
					next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
					last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
					page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
					onPageChange: function(num, type) {
						console.log(num);
						$.post(baseUrl + "api/demo/sige/paginate", {
								'category_id': list[dongtaiindex].id,
								'page': num-1
							},
							function(res) {
								console.log(res);
								if (res.data.list.length > 0) {
									let dongtaiList = res.data.list
									$('#dongtaiList').empty()
									$.each(dongtaiList, function(index) {
										
										$('#dongtaiList').append("<div class='dontai_card'><img src=" + dongtaiList[index].thumbnail +
											" class='dongtai_img'><div class='dongtai_title'>" + dongtaiList[index].post_title +
											"</div><div class='dongtai_content chaochu2 my-1'>" + dongtaiList[index].post_excerpt +
											"</div><div class='dongtai_content chaochu2'>" + dongtaiList[index].year_time + "-" + dongtaiList[index].date_time +
											"</div></div>")
									})
								} else {
									
								}
							}, "json")
					}
				});


				//4.高校宣讲
				let xuanjiangindex = index2arr[3]
				let xuanjiangList = list[xuanjiangindex].data
				$("#xuanjiangpage").append(list[xuanjiangindex].totalpage)
				$("#xunajiangTotal").append(list[xuanjiangindex].total)
				
				//加载高校宣讲分页器
				let xjtotalPages = list[xuanjiangindex].totalpage
				let xjvisiblePages = list[xuanjiangindex].total
				$.jqPaginator('#xuanjiangPage', {
					totalPages: xjtotalPages,
					visiblePages: xjtotalPages,
					currentPage: 1,
					first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
					prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
					next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
					last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
					page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
					onPageChange: function(num, type) {
						console.log(num);
						$.post(baseUrl + "api/demo/sige/paginate", {
								'category_id': list[xuanjiangindex].id,
								'page': num-1
							},
							function(res) {
								console.log(res);
								if (res.data.list.length > 0) {
									let xuanjiangList = res.data.list
									$('#xuanjiangList').empty()
									$.each(xuanjiangList, function(index) {
										if (index == 0&&num==1) {
											$('#xuanjiangList').append(
												"<div class='xj_card'><img src='img/classim.png' class='xj_img'><div class='ml-3 xj_card_right'><div class='xj_title'>" +
												xuanjiangList[index].post_title + "</div><div class='xj_content'>" + xuanjiangList[index].post_excerpt +
												"</div><div class='xj_date'>" + xuanjiangList[index].year_time + "-" + xuanjiangList[index].date_time +
												"</div></div><div class='align-self-center'><img src='img/xuanjiang.png'  style='width: 30px;height: 30px;'></div></div>"
											)
										} else {
											$('#xuanjiangList').append(
												"<div class='xj_card2'><img src='img/classim.png' class='xj_img'><div class='ml-3 xj_card_right'><div class='xj_title'>" +
												xuanjiangList[index].post_title + "</div><div class='xj_content'>" + xuanjiangList[index].post_excerpt +
												"</div><div class='xj_date'>" + xuanjiangList[index].year_time + "-" + xuanjiangList[index].date_time +
												"</div></div><div class='align-self-center'><img src='img/xuanjiang1.png'  style='width: 30px;height: 30px;'></div></div>"
											)
										}
									
									})
								} else {
									
								}
							}, "json")
					}
				});






				//思格简介处理
				var list = res.data.list
				let jianjie = list[0]
				console.log("sdfadfas");

				console.log("qwqweqwe");
















			} else {
				alert("获取信息失败")
			}
		}, "json");




	//分页器初始化
	var visiblePages
	var totalPages

	setCookie("visiblePages", 5)
	setCookie("totalPages", 6)



	


})
